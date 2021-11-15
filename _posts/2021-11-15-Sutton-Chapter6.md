---
layout: post
title: An Introduction to Reinforcement Learning, Sutton - Chapter 6
year: 2021.11.15
description: >
author: Y.B.KIM
noindex: false
category: study
---

**Chapter 6: Temporal-Difference Learning**
---

이 챕터에서는 Dynamic Programming(DP)과 Monte Carlo(MC) 방법을 혼합한 Temporal-Difference(TD) learning에 대해서 배워 본다.

**6.1 TD Prediction**

TD는 MC와 마찬가지로 샘플링한 경험을 이용해서 prediction 문제를 풉니다. 여기서 prediction 문제란 상태 가치 함수 V를 구하는 문제이다.

V(St)←V(St)+α[Gt−V(St)]
V(St)←V(St)+α[Rt+1+γV(St+1)−V(St)]

위에서 첫번째 식이 MC이고, 두번째 식이 TD이다. Prediction 문제라는 것은 V(St)를 찾는 문제이고, MC에서는 에피소드를 끝까지 시뮬레이션해서 얻은 값인 Gt를 향해서 V(St)를 α만큼 업데이트를 해 줍니다. 반면, TD에서는 다음 상태의 V(St+1)값을 이용해 Gt값을 Rt+1+γV(St+1)로 대체합니다. Bootstrapping이라고 하기도 합니다.

예를 들어, 제가 회사에 가는데 걸리는 시간을 예측하려 할 때, 집에서 버스정류장까지의 예측 시간이 10분, 버스정류장에서 버스로 회사까지 예측 시간이 15분이라고 가정해 봅시다. 그러면 집에서 회사까지의 예측 시간 V(집)은 25분입니다. 여기서 α값을 0.5로, γ값을 1로 두기로 할 때, 만약 실제로 통근을 한 첫 날, 버스 정류장까지 20분, 버스 정류장에서 회사까지 25분이 걸려서 총 45분이 걸렸다고 한다면, MC 방법을 이용한 첫 업데이트는 V(집)←25+0.5∗(45−25)=35가 됩니다. 여기서 MC 방법을 사용하려면 실제로 집에서 회사까지 끝까지 가야만 합니다.

반면, TD의 경우 집에서 버스 정류장까지 20분이 걸린 시점에서, V(집)←25+0.5∗(20+15−25)=30로 업데이트 할 수 있습니다. 즉, 버스 정류장에서 회사까지의 거리를 MC는 실제로 가본 값을 사용하지만, TD는 실제 가볼 필요없이 현재의 예측치로 대체하는 것입니다.

이렇게 바로 다음 상태의 V값을 사용하는 TD 알고리즘을 one-step TD 혹은 TD(0)라고 합니다. 이를 더 일반화한 알고리즘인 TD(λ) 혹은 n-step TD는 챕터 7과 12에서 다룹니다. 아래는 TD(0)의 알고리즘입니다.

<div style="text-align: center;">
     <img src="https://i1.wp.com/irealist.org/wp-content/uploads/kboard_attached/4/202005/5ec93acdd15f39544136.png?w=840&ssl=1">
</div>

여기서 대괄호 [ ]안의 값은, 현재 V값과 추정치인 R+γV(S′)값 사이의 오차를 표기하는 값이고, 이를 TD error라고 하며, 강화학습에서 자주 나올 개념입니다.


여기서 중요하지만 자주 간과되는 것은, δt는 t가 아닌 t+1에 계산되는 개념이란 것입니다. 또한, 만약 에피소드 도중에 V를 업데이트하지 않는다면, Monte Carlo error를 TD error의 합으로 나타낼 수 있습니다. 

에피소드 도중에 V값을 업데이트할 경우 이 등식은 성립하지 않지만, step size가 충분히 작다면 근사적으로 성립합니다. 이 등식은 TD learning의 이론에서 중요한 역할을 합니다.



**6.2 Advantages of TD Prediction Methods**

TD의 장점은 다음과 같습니다.

DP와는 달리 모델이나, 보상과 다음 상태에 관한 변화 확률을 알지 않아도 된다는 것입니다. 이는 MC의 장점과 동일합니다.
에피소드 하나를 끝까지 하고서야 업데이트 가능한 MC와는 달리, 실시간(online)으로, 점진적(incremental)으로 시행할 수 있다는 것입니다. 이 부분이 실제 적용에서 큰 고려사항이 되는 경우가 많은데, 어떤 문제들은 에피소드가 굉장히 길기도 하고, 또 어떤 문제들은 에피소드가 끝나지 않는 continuing task일 경우도 많기 때문입니다.
몇몇 MC 방식의 경우, ϵ-greedy 정책 등을 통해 실험적인 행동을 선택한 에피소드들을 무시하거나 discount할 필요가 있는데, 이것이 수렴을 굉장히 느리게 만들 수 있습니다. TD 방법은 이후에 어떤 행동을 선택했는지와 관계없이 각 스텝에서 배우기 때문에 이러한 문제에 봉착하는 경우가 적습니다.
TD 방법은 이러한 장점들을 가지고 있으며, 최적값에의 수렴(convergence)도 보장되어 있습니다. Step-size parameter α가 충분히 작은 상수일 경우에는 vπ에 평균적으로 수렴하며, 만약 α가 아래의 stochastic approximation 조건들을 충족하며 감소하는 변수일 경우에는 1의 확률로 수렴이 보장됩니다.


참고로 α값이 1tn의 형태일 경우, n이 1이하면 합이 무한대이고 1을 초과하면 무한대보다 작게 됩니다. 따라서 n = 1일 경우, ∑1t1=∞ 이고 그것을 제곱한 ∑1t2<∞ 이므로 두 조건을 모두 충족하는 α값인 것입니다.

만약 TD와 MC가 둘다 최적의 prediction에 수렴한다면, 어느 쪽이 더 빨리 수렴할까요? 이론적으로 이는 아직 열려 있는 문제이지만, 실제로 적용한 예들을 보면 일반적으로 TD 방법들이 좀더 빨리 수렴하는 경우가 많습니다. 본 챕터에 대한 구체적인 예시를 보려면 125페이지의 Example 6.2를 참조하시기 바랍니다.



**6.3 Optimality of TD(0)**

Batch updating이란, 어떤 유한 개의 샘플 경험을 통해 업데이트를 각 step에서 계산만 하다가, 해당 유한 개의 step이 다 끝나고 나서 가치함수를 업데이트하는 것을 말합니다. Batch updating 하에서의 TD(0)는, step-size parameter 인 α가 충분히 작기만 하다면 그것이 어떤 값이든 간에 하나의 답으로 확정적으로 수렴합니다. 상수 α값을 갖는 MC 또한 어떠한 답으로 확정적으로 수렴하지만, 이 답은 TD(0)과 조금 다릅니다. 왜 이 두 답이 다른지 다음의 예를 통해 알아봅니다.

어떤 Markov Reward Process (MRP)에서 다음의 샘플을 경험한다고 해 봅니다.MRP란 행동 선택이 없이 transition probability만 가지는 MDP를 말합니다. 한 움직임은 (상태, 보상) 페어로 표기하고, 에피소드의 끝은 | 로 표기하며, discount factor γ는 간단히 1이라고 가정합니다.

A, 0, B, 0 | B, 1 | B, 1 | B, 1 | B, 1 | B, 1 | B, 1 | B, 0

위는 8개의 에피소드가 나열되어 있습니다. 여기서 A, 0, B, 0 는 에피소드가 A에서 시작해서 보상을 0 얻고, 다음 상태로 B로 간 후 보상을 0 얻었다는 뜻입니다.

만일 우리가 MC 방법을 쓴다면, A는 딱 한번 등장했고 마지막까지 총 리턴이 0이었으니 V(A) = 0이며, B는 8번 등장해 그 중 6번 1의 보상이 주어졌으니 V(B) = 0.75가 될 것입니다. 그러나 TD(0)의 방법을 쓰면, V(B) = 0.75로 동일하지만, V(A)를 계산할 때 V(B)에 의존하게 되므로 V(A) = 0.75을 얻게 됩니다. 우리는 직관적으로 TD(0)의 값이 더 합리적이란 것을 알 수 있습니다. 아래는 이 MRP를 도표로 표현한 그림입니다.

<div style="text-align: center;">
     <img src="https://i0.wp.com/irealist.org/wp-content/uploads/kboard_attached/4/202005/5ec9686b25f981489960.png?w=840&ssl=1">
</div>


Batch Monte Carlo 방법은 training set, 즉 샘플된 데이터 내에서 mean-squared error를 최소화하게 되는 반면, batch TD(0) 방법은 해당 Markov proess의 maximum-likelihood 모델에 맞는 답을 찾아 냅니다. 여기서 maximum-likelihood 모델은 다음과 같습니다.

상태 i에서 j로의 transition probability: 상태 i에서 출발한 모든 케이스 중에 j에 도달한 비율
그와 관련한 기대 보상(expected reward): i에서 j에 도달했을 때 받은 보상들의 평균값
만약 주어진 모델이 올바르다면 그에 따라 추정되는 가치 함수도 올바르게 되는 것을 certainty-equivalence estimate라고 하는데, 일반적으로 batch TD(0)은 certainty-equivalence estimate으로 수렴합니다. 즉, maximum-likelihood 모델의 방법론이 해당 MDP의 참값(true underlying process)를 표현한다면, batch TD(0) 또한 가치 함수의 참값을 도출해낼 수 있습니다.



**6.4 Sarsa: On-policy TD Control**

이제 TD prediction 방법을 사용한 control 문제를 푸는 방법을 알아봅니다. 지난 챕터에서 언급했지만 control problem이란 최적의 정책을 찾는 문제를 말합니다. DP 챕터에서 언급한 Generalized policy iteration(GPI)와 같은 패턴에서 evaluation/prediction 파트를 TD 방법으로 대체하면 됩니다.

여기서도 마찬가지로 상태-가치 함수 V보다는 행동-가치 함수 Q를 아래의 식을 반복함으로써 배우게 됩니다.

Q(St,At)←Q(St,At)+α[Rt+1+γQ(St+1,At+1)−Q(St,At)]
만약 St+1이 마지막 terminal state일 경우 Q(St+1,At+1)를 0으로 정의합니다. 이 업데이트는 각 스텝에서 (St,At,Rt+1,St+1,At+1)의 다섯 조합을 사용하는데, 거기에서 Sarsa라는 알고리즘 이름이 나옵니다.

Sarsa 알고리즘은, 모든 상태-행동 쌍(state-action pair)이 무한히 많이 방문되는 이상 최적의 정책에 1의 확률로 수렴합니다. 이러한 조건은 ϵ-greedy 정책에서 ϵ=1t로 두는 방식 등을 사용해서 충족할 수 있습니다. 아래는 Sarsa 알고리즘의 pseudocode입니다. Sarsa 알고리즘을 적용한 구체적인 예는 페이지 130의 Example 6.5를 참조하시기 바랍니다.

<div style="text-align: center;">
     <img src="https://i2.wp.com/irealist.org/wp-content/uploads/kboard_attached/4/202005/5ec98d34847308992917.png?w=840&ssl=1">
</div>


**6.5 Q-learning: Off-policy TD Control**

이전 섹션의 pseudocode에서 Q(S,A)가 업데이트 되는 부분을 보시면 Sarsa 알고리즘의 가치 함수 업데이트는, 수익 G를 "현재 보상에다 다음 상태-행동 쌍의 가치 함수값을 할인하여 더한 값"으로 bootstrapping함을 알 수 있습니다. 여기서 다음 상태에서 행할 행동은, 현재까지 업데이트된 정책에 따라 선택된 행동이었습니다.

초기 강화학습에서 가장 혁신을 불러온 Q-learning의 업데이트에서는 행동을 선택할 때, 모든 행동 중 Q함수값이 높은 행동을 이용해 boostrapping합니다. 현재 배워지고 있는 정책을 사용하지 않기 때문에 Q-learning은 off-policy 알고리즘에 속합니다.

Q(St,At)←Q(St,At)+α[Rt+1+γmaxaQ(St+1,a)−Q(St,At)]

<div style="text-align: center;">
     <img src="https://i1.wp.com/irealist.org/wp-content/uploads/kboard_attached/4/202005/5ec98ff37933a6037373.png?w=840&ssl=1">
</div>

Q-learning의 자세한 예시는 페이지 132의 Example 6.6를 참조하시기 바랍니다.


**6.6 Expected Sarsa**

Sarsa가 bootstrapping하는 다음 Q값을 현재 정책에 따른 행동을 통해 선택한다면 Q-learning은 해당 상태에서의 행동 중 Q값을 최대화하는 행동을 통해 Q값을 선택합니다. 또 다른 알고리즘인 Expected Sarsa는, 현재 정책 하에서 각 행동들의 확률을 가중치로 한 Q의 기대값을 bootstrapping하여 현재 Q값을 업데이트 합니다.


Sarsa에 비해, expected Sarsa는 계산 비용이 더 들지만, 여러 step-size parameter α값에서 Sarsa보다 훨씬 향상된 성능을 보입니다. 일반적으로 expected Sarsa의 성능은 계산 비용이 조금 더 추가되는 것 외에는 Sarsa나 Q-learning을 압도합니다.



**6.7 Maximization Bias and Double Learning**

이제까지의 control 알고리즘 중에는 최대값을 취하는 것들이 있었는데, 그 때문에 최대화 편향(maximization bias)이라는 것이 생기게 됩니다. 간단한 예를 들면 어떤 상태(state)에 여러 행동(action)들이 있고, 각 행동들의 Q값이 실제로는 모두 0이지만 추정 과정에서 어떤 Q(s, a)는 -1, 어떤 Q(s, a)는 1 등으로 분포가 생긴다고 가정한다면, 최대값을 쓰는 알고리즘은 여기서 1을 취하게 되는 문제가 발생합니다.


위는 간단한 MDP 문제인데 A가 시작점이고 회색 사각형이 에피소드가 끝이 나는 terminal state입니다. A에서 시작을 하였을 때 취할 수 있는 행동은 왼쪽으로 가거나 오른쪽으로 가거나입니다. 오른쪽으로 가는 Q(A, right)는 항상 0이지만, 왼쪽으로 간 후 B에서 terminal state로 가는 길에서는 평균이 -0.1이고 표준편차가 1인 정규 분포를 따르는 보상을 받는 길이 여러 갈래 있습니다.

왼쪽의 길의 평균 보상은 -0.1이기 때문에 항상 오른쪽을 선택하는 것이 옳은 행동이지만, 그래프에서 보다시피 Q-learning은 초반에 maximization bias 때문에 왼쪽이 더 높다는 착각을 하여, 에피소드 샘플을 꽤 많이 경험하기 전까지는 왼쪽을 선택합니다. 극한(asymptotic)을 향해 가더라도, 아직 왼쪽 행동을 선택하는 비율이 5%나 됩니다.

이 문제를 해결하기 위한 알고리즘으로는 Double Q-Learning이 있습니다. 이 알고리즘에서는 두 개의 Q함수 Q1과 Q2를 병렬로 계산하는데, 매 step마다 50%의 확률로  중 한 가지를 선택합니다. 만일 Q1이 선택되었다면, bootstrapping하는 Q값을 계산할 때 어떤 상태-행동(state-action) 쌍을 선택하는지는 Q1를 사용하지만, 그렇게 선택된 쌍의 가치값은 Q2를 이용하게 됩니다.

위에서 예시로 든 MDP의 상태 B에서 terminal state까지 가는데 행동 a, b, c가 있고, 각각의 가치 함수 Q(B, a), Q(B, b), Q(B, c)값들이 -0.3, -0.1, +0.1이라고 가정합니다. 그러면 원래의 Q-learning에서는 현재의 Q값들을 이용해서 행동 c를 선택하고, Q(B, c)의 값인 +0.1를 사용하게 되어서 오른쪽이 아닌 왼쪽 행동을 취하는 케이스가 생겨나게 됩니다. 하지만 Double Q-learning에서는 Q1과 Q2 둘 다에서 우연히 c가 높은 값을 가지게 되는 예외적인 경우를 제외하고는 이런 일이 필연적으로 발생하지는 않습니다.


<div style="text-align: center;">
     <img src="https://i0.wp.com/irealist.org/wp-content/uploads/kboard_attached/4/202005/5ec9e86c3bc8e2778402.png?w=840&ssl=1">
</div>


위는 Double Q-learning의 pseudocode입니다. 참고로 Loop안에서 처음 ϵ-greedy 정책에 따른 행동 선택을 할 때는 Q1과 Q2를 함께 이용해서 선택을 합니다. 예를 들어 각 행동의 probability를 두 Q함수에서 평균을 낸 것을 사용하는 방법이 있습니다.

본 글은 IREALISM 블로그의 글을 참고로 하였습니다. 본문은 아래 링크를 참조부탁드리겠습니다.

[Reference](https://irealist.org/data-science/?mod=document&uid=7864)