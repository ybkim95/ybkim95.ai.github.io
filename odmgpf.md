---
layout: page
title: ODMG-PF
permalink: /odmgpf/
---

## **Real-time Dynamic Obstacle Avoidance of Holonomic Mobile Robot using an Obstacle-Driven Mixed Gaussian Potential Field**

Obstacle-dependent Multi-Gaussian Potential Field (ODMG-PF)

† **Yu Bin, Kim**

**Keywords:** Mixed Gaussian Potential Field(혼합 가우시안 포텐셜 필드), Dynamic Obstacle Avoidance(DOA, 동적 장애물 회피), Holonomic Mobile Robot(홀로노믹 모바일 로봇)

## Abstract
This paper is about the new obstacle avoidance method called **O**bstacle-**D**ependent **M**ixed **G**aussian **P**otential **F**ield(**ODMG-PF**) which defines obstacles from the sensor detection and calculates the likelihood of collision with them. In this paper, a novel attractive field and repulsive field calculation method and the robot direction decision approach is presented. Simulations and the experiments were carried out to benchmark with previous potential field-based obstacle avoidance method. The results show that ODMG-PF performed 23.2% and 25.0% improvement for simulation and 17.19% and 14.28% improvements for the real experiment in terms of average deviation and the collision rate.

## 1. 서론
 이동 로봇(Mobile Robot)의 자율 주행에 대한 연구는 오래전부터 진행되어 왔으며, 오늘날에도 꾸준히 연구되고 있다. 초창기에는 단순 작업과 간단한 이동이 요구되었던 반면, 최근에는 여러 가지 변수가 존재하는 공장 또는 위험한 건설 현장과 같이 인간이 작업하기에 위험한 곳에서의 작업, 전자동화 process로 운영되는 공장에서의 물류의 운반, 미지의 지역에 대한 탐사 등 다양한 분야에서 활용 및 개발되고 있다. 이때 주목해야 할 점은 로봇이 미지의 환경에서 활용되는 경우가 많아짐에 따라 주변 상황을 스스로 감지하고 로봇 스스로 판단하여 장애물 회피는 물론 정밀하고 안전한 주행을 하는 것이 굉장히 중요하다는 것이다. 

 로봇이 장애물 회피를 하는 것에 있어 로봇 주위 환경에 대해 정확히 인지하는 것이 중요하며, 그 정보를 가지고 효과적인 회피 알고리즘을 고안하는 것도 굉장히 중요하다. 자율 이동 로봇은 움직이는 다른 장애물이나 어떤 대상을 만났을 때 부딪치지 않고 안전하게 회피를 할 수 있어야 한다. 이러한 이유로 자율 이동 로봇을 위한 장애물 회피 방법, 경로 계획과 같은 자율 주행에 대해서 예전부터 최근까지 많은 연구가 활발하게 진행되어왔던 것이다. 경로계획 방법은 전역 경로계획 (Global Path Planning)과 지역 경로계획 (Local Path Planning)으로 나뉘며, 전역 경로 계획 방법 같은 경우에는 이미 Path Planner가 장애물의 위치나 방향 크기들을 사전에 미리 알고 있는 상태에서 장애물을 회피하여 원하는 목표 지점까지 가는 것이다. 

 포텐셜 필드(Potential Field) 기반의 경로 계획 알고리즘은 로봇과 목표지점 사이에 가상의 인력(Attractive Field)을 형성하고 로봇과 장애물 사이에는 가상의 척력(Repulsive Field)을 형성시킴으로써 장애물을 회피하고 경로를 형성할 수 있도록 로봇의 운동 방향을 계획하는 방법이다. 이는 다른 알고리즘에 비해 구현이 간단하며 연산 양이 적다는 장점이 있지만, 기존 포텐셜 필드 기반 알고리즘은 동적 장애물 회피에 있어서 낮은

회피율과 척력과 인력이 상쇄되어 더이상 움직이지 못하는 지역 최소점(local minima) 등의 문제점이 발생했었다. 이를 해결하기 위해 로봇을 중심으로 일정 거리(threshold distance) 이내의 장애물에 대해서 가우시안 포텐셜 필드(Gaussian Potential Field) 기법을 도입하는 연구가 선행되어 장애물 회피의 개선과 지역 최소점의 문제를 해결할 수 있었다. 하지만, 다양한 형태의 장애물에 대한 평가가 부족했고, 전체 자유도(Degree of Freedom, D.O.F) 대비 제어 가능한 자유도가 더 작은 Differential type이 아닌 제어 가능한 자유도가 더 큰 Holonomic 로봇의 운동 모델과 로봇의 가속도가 고려되지 못했다는 한계가 있었다.

 본 연구에서는 선행 연구의 문제점을 개선하고 발전시키기 위해 첫째, 기존 가우시안 모델의 개선하기 위해 장애물의 key feature를 파악하고, 새로운 모수와 weight 값을 기반으로 분포를 형성하는 혼합 가우시안 모델(Gaussian Mixture Model)을 적용해 다양한 형태의 동적 장애물에 대응할 수 있는 지역 경로 계획법을 연구하고자 하며, 둘째, 로봇의 dynamics를 고려한 Holonomic 로봇 모델에 본 알고리즘을 적용할 수 있는지에 대한 확장성을 검토하려 한다. 이를 위해 MATLAB Robotics Tool, 물리 엔진이 탑재된 가상시뮬레이터(V-REP) 그리고 실제 환경에서의 총 3단계 실험을 진행하였다. 

  결론적으로, 본 연구를 통해 확인하고자 한 것은 첫째, 다양한 형태의 장애물에 대한 ODMG-PF 경로 계획법의 성능 평가. 둘째, 새로운 경로 계획법과 기존 포텐셜 필드 기반의 알고리즘과의 benchmarking. 셋째, 로봇의 dynamics를 고려한 Holonomic 로봇 운동 모델의 제어 관점에서의 확장성이다.

To read more, please refer to following original paper:
[Real-time Dynamic Obstacle Avoidance of Holonomic Mobile Robot using an Obstacle-Driven Mixed Gaussian Potential Field.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4803286c-0d2a-431d-abf4-e8a29beefab4/Real-time_Dynamic_Obstacle_Avoidance_of_Holonomic_Mobile_Robot_using_an_Obstacle-Driven_Mixed_Gaussian_Potential_Field.pdf)


**Code**
---
[ODMG-PF](https://github.com/ybkim95/ODMG-PF)


**Robot Assemble**
---

<img src="/assets/img/assemble.gif" width="450" height="370">


**Presentation**
---

<iframe width="650" height="335" src="https://www.youtube.com/embed/R-NFALPbP4U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br><br>