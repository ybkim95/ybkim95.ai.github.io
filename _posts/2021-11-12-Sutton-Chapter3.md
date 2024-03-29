---
layout: post
title: An Introduction to Reinforcement Learning, Sutton - Chapter 3
year: 2021.11.12
description: >
author: Y.B.KIM
noindex: false
category: study
---

**Chapter 3: Finite Markov Decision Processes**
---

이번 chapter는 Markov Decision Process(MDP)로, 사실상 강화학습 공부는 이 편부터 시작한다고 봐도 과언이 아니라고 할 수 있다. 각 파트별로 MDP의 여러 요소들을 정의하고 이것이 강화학습 문제를 어떻게 프레임하는지 알아본다.



**3.1 에이전트-환경 인터페이스(The Agent-Environment Interface)**

MDP에서 학습하고 행동하는 주체는 에이전트(agent)이다. 그리고 에이전트가 상호작용하는, 에이전트 자체 외의 모든 요소를 환경(environment)이라고 한다. 에이전트와 환경 사이의 경계를 구분짓는 일반적인 규칙은, 에이전트가 재량으로 바꿀 수 없는 모든 것들은 환경에 속하도록 두는 것이다. 재량으로 바꿀 수 있는 것들은 행동하는 범주에 속하게 된다.

에이전트가 어떤 행동(action)을 취하면 환경은 이에 반응해서 새로운 상황(state)을 제시한다. 그 과정에서 보상(reward)이 수반되며, 에이전트의 목적은 이 보상의 합을 최대화하는 것이다.

<div style="text-align: center;">
     <img src="https://i0.wp.com/irealist.org/wp-content/uploads/kboard_attached/4/202005/5ebf1d072e54c8414229.png?w=840&ssl=1">
     <br>출처: Sutton and Barto Textbook, p.48
</div>

<br>
이 과정은 시간의 흐름 t = 0, 1, 2, ... 에 따라 이루어지며, 아래와 같은 스퀀스(trajectory)를 이룬다.

![a](https://latex.codecogs.com/gif.download?S_0%2C%20A_0%2C%20R_1%2C%20S_1%2C%20A_1%2C%20R_2%2C%20S_2%2C%20A_2%2C%20R_3%2C%20...)

유한(finite) MDP에서는, 환경 상태(S, state), 행동 선택지(A, action), 그리고 보상(R, reward)이 모두 한정된 숫자로 이루어져 있다. 이 경우, 변수 ![a](https://latex.codecogs.com/gif.download?R_t)와 S_t는 바로 이전의 R_{t−1}와 S_{t−1}에만 의존하는 잘 정의된 이산(discrete) 확률 분포를 가진다. 이 책에서 다루는 문제는 거의 유한 MDP라고 생각하셔도 된다.

p(s′,r|s,a)≐Pr{St=s′,Rt=r|St−1=s,At−1=a} for all s′,s∈S,r∈R and a∈A(s)
이 함수 p는 해당 MDP가 어떻게 움직이고 돌아가는지에 관한 역학(dynamics)을 정의합니다. 바로 이전 시간대 t-1의 값에만 의존하고 t-2보다 이전의 값에는 의존하지 않는 속성을 Markov property라고 합니다. (t-2 이전의 값에 영향받지 않는다고 생각하시는 것보다, t-2 이전의 모든 정보가 이미 t-1에 다 담겨있다고 생각하시는 것이 이해하기 편합니다) 책의 파트 I에서는 계속 이 Markov property를 가정합니다. Chapter 17에서는 non-Markov 환경을 어떻게 Markov로 재정의할 수 있는지에 대해 알아봅니다.

한 가지 더 언급하자면, 우리는 에이전트가 환경에 대해 완벽히 알지는 못한다고 가정할 필요는 없습니다. 오히려 모든 것을 알면서도 보상을 쉽게 얻지 못하는 경우도 있습니다. 에이전트와 환경 간의 경계는, 에이전트의 절대적인 컨트롤(absolute control)이 없음을 말하는 것이지 에이전트의 지식의 한계를 결정 짓는 것은 아닙니다.



**3.2 목표와 보상(Goals and Rewards)**

강화학습에서는 보상(reward)의 총합(cumulative sum)의 기댓값(expected value)을 최대화하는 것을 목표(goal)로 합니다. 보상을 디자인할 때 주의할 점은, 에이전트가 어떻게(how) 목표를 달성할지에 대한 관여하기보다는 최종 목표(what)에 초점을 맞춰야 합니다. 예를 들어, 체스에서는 이길 경우 보상을 주어야지, 상대의 말을 가지거나 센터 장악을 하는 것 등에 보상을 부여해서는 안됩니다. 그럴 경우, 상대의 킹을 잡을 수 있는데도 센터에 모여 있는 등의 행동을 할 수도 있습니다.



**3.3 수익과 에피소드(Returns and Episodes)**

수익(return)은 에이전트가 얻는 보상의 총합, 즉 Gt≐Rt+1+Rt+2+...+RT 로 정의됩니다.

한 에피소드가 끝나는 시점이 정해져 있는 강화학습 문제를 episodic task라고 하고, 끝나지 않는 연속적인 문제들을 continuing task라고 합니다. 체스는 게임이 끝나는 시점이 있으니 episodic task이고, 공장의 전력 소모를 관리하는 시스템은 공장이 문을 닫지 않는 한 계속되는 continuing task입니다. Episodic task의 경우 에피소드가 끝나는 시점 T를 terminal state라고 합니다.

연속적 문제의 경우 보상들의 합인 수익(return)은 무한대가 될 수 있으므로, 시간에 따른 할인율(discount rate)이 필요하고 이 0에서 1사이의 값을 γ라고 둡니다. 그러면 에이전트는 할인된 기대 수익(expected discounted return) Gt≐Rt+1+γRt+2+γ2Rt+3+...=∑∞k=0γkRt+k+1 을 최대화하는 것이 목적이 됩니다. 할인율이 0이면 에이전트는 근시안적으로 바로 앞의 보상에만 치중하고, 1에 가까워질수록 좀더 먼 시점의 보상까지 염두에 두게 됩니다.



**3.4 통일된 표기(Unified Notation for Episodic and Continuing Tasks)**

앞으로 책에서, episodic task의 경우 i번째 에피소드의 t step은 St,i로 표기하지만 하나의 에피소드 내에서 설명할 때는 그냥 St로 표기합니다. 또한 알고리즘의 설명을 할 때 episodic task와 continuing task을 구별해서 제각각 설명하는 것은 비효율적이므로, episodic task를 아래와 같이 마지막에 terminal state 대신 특별한 absorbing state를 대체한 형태로 해서 생각하도록 합니다.



이렇게 되면 이 task는 연속적이면서도 보상은 episodic한 형태와 동일하게 유지되므로, 여러 가지 표기와 설명을 continuing task와 혼용할 수 있습니다.



**3.5 정책과 가치 함수(Policies and Value Functions)**

거의 모든 강화학습 알고리즘들은 가치 함수(value function)을 추정하는 것을 필요로 합니다. 가치 함수는 어떤 상태(state)가 에이전트에게 얼마나 좋은지를 수치화합니다. 얼마나 좋은가란 결국, 이 상태(state)에서 미래에 기대할 수 있는 수익(return)이 큰가 작은가입니다. 우리는 에이전트가 가치가 높은 상태(state)를 향해 행동하는 것을 원합니다.

정책(policy)은 상태(state)별로 각 행동의 확률을 매핑합니다. π(a|s)는 현재 상태 St=s일 때 행동 At=a을 취할 확률을 나타냅니다. π(점프|계단)=.9은, 현재 놓인 상황이 계단일 경우 90% 확률로 점프하라고 지시하는 정책을 나타냅니다.

아래는 정책 π에 대한 상태-가치 함수(state-value function)라고 합니다. 현재 상태(s)에서 시작해서, 정책 π를 따라 행동해 나간다 가정할 때의 미래 기대 보상치를 할인해서 더한 값입니다.

vπ(s)≐Eπ[Gt|St=s]=Eπ[∑∞k=0γkRt+k+1|St=s] for all s∈S
가치 함수에는 두 가지가 있는데, 그 두번째는 행동-가치 함수(action-value function)입니다.

qπ(s,a)≐Eπ[Gt|St=s,At=a]=Eπ[∑∞k=0γRt+k+1|St=s,At=a]
즉 q는 현재 상태(s)에서 특정 행동(a)을 취한 후, 그 다음 상태부터는 정책 π를 따라갔을 때 기대되는 미래 수익을 의미하고, v는 현재 상태(s)에서 정책 pi를 따라갔을 때 기대되는 미래 수익을 의미합니다. 즉, q(s,a)에서 a=π(s)일 경우, q와 v값은 같습니다.

위의 두 가지 가치 함수를 계산하는 방법 중 하나는, 단순히 샘플에서 평균을 내는 것입니다. 에이전트를 어떤 정책 π에 따라 수백 번 행동을 시킵니다. 그 다음 해당 상태(s)에 도달하였을 때부터 에피소드가 끝날 때까지 얻는 수익을 각각 기록하여 평균을 내면 v의 추정값이 됩니다. q도 마찬가지로 구할 수 있습니다. 이 방식을 Monte Carlo 방법이라 하며 챕터 5에서 다룹니다. 만약 상태(s)가 너무 많으면 상태별로 기록을 하는게 비현실적이므로 Part II에서 다룰 근사 함수(function approximators)들을 이용합니다.

강화학습에서 가치 함수의 가장 근본적인 속성은, 재귀적(recursive)이라는 것입니다.


v를 찬찬히 따져서 풀어쓰면 위와 같습니다.

행1: v값은 어떤 상태(s)에서 시작해서 얻는 수익 기대값(Gt)입니다.
행2: 여기서 Gt를 풀어 쓰면, 바로 다음 오는 보상(Rt+1)에다가 다음 상태에서 시작해서 얻는 수익 기대값의 합을 한번 할인한 것과도 같습니다.
행3: 여기서 가장 처음의 ∑aπ(a|s) 파트를 빼고 보면, 행2의 기대값(E)을 다음 상태(s')로 올 수 있는 여러 s들과, 각각의 다음 상태(s')별로 올 수 있는 여러 보상(r)들에 대해 풀어 쓴 후, 현재 상황(s)에서 정책 π이 취할 수 있는 여러 행동에 대한 확률로 풀어쓴 것입니다. 만약 정책이 확률적(stochastic)이지 않고 결정론적(deterministic)일 경우, 처음 파트를 생략할 수 있습니다.
행4: 맨 오른쪽의 [ ] 파트를 다음 상태의 v값으로 치환하여서 재귀적(recursive) 속성을 보여줍니다.
처음 이 공식을 접하면 특히 행2에서 행3으로 가는 파트가 헷갈릴 수 있습니다. 그럴 경우 그냥 행4가 의미하는 바가 무엇인지만 잘 이해해보려 하는 것도 도움이 됩니다. 여기서 행4는 vπ에 대한 벨만(Bellman) 방정식이라 하고, vπ는 이 벨만 방정식의 유일한 해입니다. 벨만 방정식은 두고두고 나오므로 잘 기억해 두시는 것을 권장합니다.


출처: Sutton and Barto Textbook, p.59

위의 그림은 backup diagram으로, 상태 s에서 선택가능한 다음 세 가지 행동에 대한 확률 π, 그 다음 선택한 행동 a이 초래할 수 있는 두 가지 다음 상태 s'에 대한 확률 p와 각각에 따른 보상을 한 도표에 그려 놓은 것으로, 향후 책에서 설명에 자주 쓰일 것입니다.



**3.6 최적 정책과 최적 가치 함수(Optimal Policies and Optimal Value Functions)**

두 정책이 있을 때, π≥π′ if and only if vπ(s)≥vπ′(s)의 관계를 통해 최적의 정책을 구할 수 있습니다. MDP에서는 언제나 모든 다른 정책과 동등하거나 더 좋은 정책이 최소한 하나이상 존재합니다.

v∗(s)≐maxπvπ(s), for all s∈S이고,

q∗(s,a)≐maxπqπ(s,a), for all s∈S and a∈A(s)입니다.

또한 v∗와 q∗간의 관계는 다음과 같이 표현할 수 있습니다. 이는 앞 파트에서 설명한 것과 동일합니다.

q∗(s,a)=E[Rt+1+γv∗(St+1)|St=s,At=a]
벨만 방정식에는 여러 가지 형태가 있는데, 최적값에 대한 벨만 최적 방정식(Bellman Optimality Equation)은 아래와 같습니다.





간단한 정의를 풀어쓴 것 뿐이니 찬찬히 따져보면 되겠습니다.

만약 환경(environment)의 p값을 알고 있다면, 벨만 최적 방정식을 이용해 v∗최대값을 구해낼 수 있습니다. 그리고 v∗가 있으면 최적 정책(optimal policy)를 구하는 것은 어렵지 않습니다. 각 상태 s에 대해, 벨만 최적 방정식에서 최대값을 얻게 하는 행동(action)이 한 개 이상 있을 것입니다. 최적 정책은 그 최대값을 얻는 행동(action)들에게만 양의 확률을 배당합니다. v∗의 재귀적 속성상 greedy(컴퓨터 과학 용어로, 전체적인 큰 문제에 대한 고려없이 바로 당면한 작은 문제에 대해서만 최적의 행동을 하는 것을 말합니다)한 방식으로 문제를 풀어도 전체적으로도 최적이 됩니다.



**3.7 최적과 근사(Optimality and Approximation)**

환경의 p값을 알고 있다 해도 실제로는 최적값을 찾아내는데 엄청난 계산 비용(computational cost)가 드는 경우가 많고, 메모리 또한 제약이 있습니다. 따라서 복잡한 문제들에는 근사법들을 사용할 필요가 있습니다. 나중 파트에 다룹니다.

본 글은 IREALISM 블로그의 글을 참고로 하였습니다. 본문은 아래 링크를 참조부탁드리겠습니다.

[Reference](https://irealist.org/data-science/?mod=document&uid=7864)

<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>