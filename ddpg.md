---
layout: page
title: Trainining Self-Driving Car in Simulator with DDPG
permalink: /ddpg/
---

**Introduction**
---

해당 프로젝트는 강화학습 알고리즘 중 **DDPG(Deep Deterministic Policy Gradient)**라는 알고리즘을 자율주행 자동차 task에 적용하는 내용으로 진행되었습니다.
본 프로젝트에서 정의하는 문제는, 물리 엔진 (Bullet 2.78)이 장착된 simulator 상에서 차량의 모델이 주어진다고 할 때, lane으로부터의 이탈없이 특정 goal까지 최대한 빠르게 이동하는 것이었습니다.
본 프로젝트에서는 Policy Gradient 기반의 강화학습 알고리즘인 DDPG 알고리즘이 사용되었습니다. Policy Gradient 계열의 강화학습 알고리즘은 objective function의 미분 값을 바탕으로 gradient ascent 기법을 활용하여 가장 큰 return 값을 줄 수 있는 policy를 찾는 최적화 알고리즘입니다.
기존 **DQN(Deep Q Network)** 기법에서는 high-dimensional한 input을 사용할 수는 있었지만, discrete하고 차원이 낮은 action space를 지닌 task만 해결 가능했었습니다. 따라서, DQN에서는 시스템 action의 종류가 늘어날수록 차원의 저주에 걸린다는 문제점이 있었습니다. 이를 해결하고자, Deep Neural Network로 근사화한 action-value function을 사용하는 Model-free, Off-policy Actor-Critic 알고리즘을 제안하였고, 이 알고리즘의 이름을 **Deep Deterministic Policy Gradient(DDPG)**라고 명명했습니다.


**Task**
---

<iframe width="650" height="335" src="https://www.youtube.com/embed/uJyL-RYrtzs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br>


**Deep Deterministic Policy Gradient(DDPG)**
---

- DDPG는 model-free off-policy actor-critic 알고리즘으로 Deep Q Learning(DQN)과 DPG의 컨셉을 결합한 알고리즘이다. DQN은 discrete한 action space에서 작동되고, DPG는 이를 continuous한 action space로 확장했으며, deterministic한 policy를 사용하였다.
- 이 알고리즘이 off-policy인만큼, 이는 actor와 critic이라는 network를 가진다. actor는 explore를 하기 위한 action을 생성한다. actor의 update 과정동안 critic으로부터 생긴 TD error를 사용한다. critic network는 Q-learning의 update rule과 비슷한 TD error를 바탕으로 update가 수행된다.
- Q-learning에서 function approximator로 deep neural network를 사용하므로써 instability issue가 생길 수 있는 것을 확인하였다. 이러한 문제를 해결하기 위해 experience replay와 target networks가 사용되었다.


**On-policy Learning vs Off-policy Learning**
---

- On-policy의 경우, 자신이 직접 시행착오를 겪으면서 스스로 배우는 것에 비유를 할 수 있다. 동일한 policy인 \pi에 대하여 sampling된 경험을 따르면서 이를 통해 학습을 하는 방식을 의미한다.
- 반면, Off-policy의 경우 본인이 아닌 다른이가 시행착오를 겪는 것을 보면서 배우는 것에 비유를 할 수 있다. 다른 policy인 \mu에 대해서 sampling된 경험을 따르면서 자신의 policy인 \pi를 학습하는 방식을 의미한다.

- DDPG는 high-dimensional이면서 continuous한 action space의 policy를 학습 가능하다는 특징을 가지고 있습니다. DPG와의 비교를 하자면 DDPG는 다음과 같이 표현할 수 있을 것입니다.
    
    DDPG = DPG + Actor-Critic with DNN 
    
- 하지만 actor-critic을 그대로 적용하기에는 학습의 converge가 잘 안된다는 단점이 있었고, 이를 해결하고자 DQN의 아이디어를 도입하였습니다.


**Actor Critic**
---

- Actor-Critic을 간단하게 설명하자면, 이는 Policy Gradient의 Temporal Difference(TD) 버전이라고 할 수 있다. 이는 Actor network와 Critic network로 구성된다.
- Actor는 어떠한 action이 수행되어야 하는지를 결정하고, Critic의 경우 Actor에게 해당 action이 얼마나 좋았고, 어떻게 조정을 해야할지 알려주게 된다. Actor를 학습하는 것은 policy gradient 접근 방식으로 수행될 수 있으며, Critic은 Actor에 의해 생성된 action을 value function을 계산함으로써 평가한다.


**Reward Function**
---

<img src="/assets/img/ddpg_reward.png" width="30%" height="60%"
     alt="Markdown Monster icon"
     style="float: center;"/>

- f(speed x): relative angle \theta를 기준으로 보상함수는 LiDAR 센서로부터 수집되는 거리값의 조합과 차량의 real heading vector와 차량의 desired heading vector 사이의 각도를 바탕으로 설정되었다.
- 아래 코드에서처럼,
    
    1) f(LiDAR)의 경우, FRONT / BACK / SIDE 영역에 해당되는 LiDAR ray들을 바탕으로 일정 거리 범위를 지정하여 threshold 값이 이하이면 그에 맞는 punishment를 주고 일정 threshold 값 이상이면 reward를 주는 방식으로 추가해줬다.
    
    2) f(speed_x)의 경우, 위 그림 상에서는 잘못 표기되어있지만 전진해야하는 방향을 기준으로 나아가는 속도의 k배를 해서 reward에 추가해줬다.

``` python
    def getReward(self):
        self.reward_lidar = 0

        # FRONT
        if (min(self.lidar_front) <= 0.25):
            #print(cl("[CLOSE] FRONT", "red"))
            self.reward_lidar_front = -1. / min(self.lidar_front) / 5.
        elif (0.25 < min(self.lidar_front) < 0.5):
            #print(cl("[CLOSE] FRONT", "red"))
            self.reward_lidar_front = -1. / min(self.lidar_front) / 7.5
        else:
            #print(cl("[ENOUGH] FRONT", "green"))
            self.reward_lidar_front = 1. * min(self.lidar_front) / 5.
        
        # BACK
        if (min(self.lidar_back) <= 0.25):
            #print(cl("[CLOSE] BACK", "red"))
            self.reward_lidar_back = -1. / min(self.lidar_back) / 5. 
        elif (0.25 < min(self.lidar_back) < 0.5):
            #print(cl("[CLOSE] BACK", "red"))
            self.reward_lidar_back = -1. / min(self.lidar_back) / 7.5
        else:
            #print(cl("[ENOUGH] BACK", "green"))
            self.reward_lidar_back = 1. * min(self.lidar_back) / 5.

        # SIDE
        if (min(self.lidar_side) <= 0.15):
            #print(cl("[CLOSE] SIDE", "red"))
            self.reward_lidar_side = -1. / min(self.lidar_side) / 8. 
        elif (0.15 < min(self.lidar_side) < 0.3):
            #print(cl("[CLOSE] SIDE", "red"))
            self.reward_lidar_side = -1. / min(self.lidar_side) / 12.
        else:
            #print(cl("[ENOUGH] SIDE", "green"))
            self.reward_lidar_side = 1. * min(self.lidar_side) / 8.


        self.reward_lidar =  sum([self.reward_lidar_front, self.reward_lidar_side, self.reward_lidar_back])  
        self.reward_vel = abs(self.vx)*3.
       
        self.reward = self.reward_lidar + self.reward_vel
       
        return self.reward
```


**Result**
---

<img src="/assets/img/ddpg_result.png" width="100%" height="60%"
     alt="Markdown Monster icon"
     style="float: center;"/>


- 본 프로젝트에서는 자율주행 자동차가 lane 상에서 장애물과의 충돌없이 주행을 하는 continuous한 action space에서 DDPG 강화학습 알고리즘을 적용해보는 것을 수행했습니다.
- 훈련중 대략 200 episode 근처에서 Reward의 convergence가 관찰되었으며 약 100,000 steps에 걸쳐 training 되었습니다.
- 테스트중 훈련과 같은 stop condition을 가지고 20 episode에 대해 평가를 진행한 결과, 여러 종류의 lane에 대해서 collision 없이 계속적으로 주행 가능한 것을 관찰할 수 있었습니다.



**Paper**
---

<img src="/assets/img/ddpg1.png" width="85%" height="60%"
     alt="Markdown Monster icon"
     style="float: center;"/>

<img src="/assets/img/ddpg2.png" width="85%" height="60%"
     alt="Markdown Monster icon"
     style="float: center;"/>

<br>

For more information please refer to this [LINK](https://drive.google.com/file/d/1h8Pxa18lu2fGG2SZx3r15dilqar-Izu7/view?usp=sharing)

