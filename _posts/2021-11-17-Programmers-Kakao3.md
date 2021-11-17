---
layout: post
title: 프로그래머스 키패드 누르기 (Python)
year: 2021.11.17
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[키패드 누르기]](https://programmers.co.kr/learn/courses/30/lessons/67256)

<br>

**[원문]**

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

<div style="text-align: center;">
     <img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4b69a271-5f4a-4bf4-9ebf-6ebed5a02d8d/kakao_phone1.png">
</div>

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.


**제한사항**

* numbers 배열의 크기는 1 이상 1,000 이하입니다.
* numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
* hand는 "left" 또는 "right" 입니다.
* "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
* 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.



입출력 예<br>
numbers	hand	result<br>
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"<br>
[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"<br>
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"<br>

입출력 예 #1

순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.<br>

왼손 위치	오른손 위치	눌러야 할 숫자	사용한 손	설명<br>
\*	#	1	L	1은 왼손으로 누릅니다.<br>
1	#	3	R	3은 오른손으로 누릅니다.<br>
1	3	4	L	4는 왼손으로 누릅니다.<br>
4	3	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.<br>
5	3	8	L	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.<br>
8	3	2	R	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.<br>
8	2	1	L	1은 왼손으로 누릅니다.<br>
1	2	4	L	4는 왼손으로 누릅니다.<br>
4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.<br>
4	5	9	R	9는 오른손으로 누릅니다.<br>
4	9	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.<br>
5	9	-	-	

따라서 "LRLLLRLLRRL"를 return 합니다.

입출력 예 #2

왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

입출력 예 #3

오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.


**Code**
---

``` python
def solution(numbers, hand):
    ans = ''
    L_visited = [-1]
    R_visited = [-2]
    
    def decide_hand(L_visited, R_visited, target, hand):
        coord = {1: (-1,1), 2: (0,1), 3: (1,1), 4: (-1,0), 5:(0,0), 6: (1,0), 7: (-1,-1), 8: (0,-1), 9: (1,-1), 0: (0,-2), -1: (-1,-2), -2: (1,-2)}

        l_dis = abs(coord[target][0] - coord[L_visited[-1]][0]) + abs(coord[target][1] - coord[L_visited[-1]][1])  
        r_dis = abs(coord[target][0] - coord[R_visited[-1]][0]) + abs(coord[target][1] - coord[R_visited[-1]][1]) 

        # print("L_visited: {}".format(L_visited))
        # print("R_visited: {}".format(R_visited))
        
        if l_dis < r_dis:
            # print("Left: {}, Right: {}".format(l_dis, r_dis))
            L_visited.append(target)
            return 'L'
        elif r_dis < l_dis:
            # print("Left: {}, Right: {}".format(l_dis, r_dis))
            R_visited.append(target)
            return 'R'
        else:
            # print("Left: {}, Right: {}".format(l_dis, r_dis))
            if hand == "left":
                L_visited.append(target)
                return 'L'
            else:
                R_visited.append(target)
                return 'R'
        
    for n in numbers:
        # print("current number:", n)
        if n in [1,4,7]:
            ans += 'L'
            L_visited.append(n)
        elif n in [3,6,9]:
            ans += 'R'
            R_visited.append(n)
        else:
            ans += decide_hand(L_visited, R_visited, n, hand)
        
        # print("current sequence:", ans)
        # print()
    
    return ans
```

**Notes**
---

이번 문제의 핵심은 왼손과 오른손의 위치와 누르려는 버튼 사이의 거리를 어떻게 mapping할 것인가 일듯 싶다. 나의 경우는 무식하게 좌표로 변환해서 코드를 작성하였는데, 좋은 방법은 아닌거 같아서 다른 사람의 코드를 참조해봤다.

그런데 ???...

다른 사람의 코드를 참조해보니, 나랑 비슷한게 푼듯 싶다... 더 좋은 방법이 있는지는 추후 찾아보도록하자.


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

