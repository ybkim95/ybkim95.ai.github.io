---
layout: post
title: 2020 카카오 인턴십 for Tech developers
year: 2021.11.17
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problems**
---
[2020 카카오 인턴십 for Tech developers](https://tech.kakao.com/2020/07/01/2020-internship-test/)

<br>

# 문제 1

[링크](https://programmers.co.kr/learn/courses/30/lessons/67256)

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

<div style="text-align: center;">
     <img src="https://tech.kakao.com/wp-content/uploads/2020/07/kakao_phone1-768x768.png" width="50%" height="50%">
</div>

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
5. 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인지 오른손인지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해 주세요.

**Code**

``` python
def solution(numbers, hand):
    ans = ''
    L_visited = [-1]
    R_visited = [-2]
    
    def decide_hand(L_visited, R_visited, target, hand):
        coord = {1: (-1,1), 2: (0,1), 3: (1,1), 4: (-1,0), 5:(0,0), 6: (1,0), 7: (-1,-1), 8: (0,-1), 9: (1,-1), 0: (0,-2), -1: (-1,-2), -2: (1,-2)}

        l_dis = abs(coord[target][0] - coord[L_visited[-1]][0]) + abs(coord[target][1] - coord[L_visited[-1]][1])  
        r_dis = abs(coord[target][0] - coord[R_visited[-1]][0]) + abs(coord[target][1] - coord[R_visited[-1]][1]) 

        if l_dis < r_dis:
            L_visited.append(target)
            return 'L'
        elif r_dis < l_dis:
            R_visited.append(target)
            return 'R'
        else:
            if hand == "left":
                L_visited.append(target)
                return 'L'
            else:
                R_visited.append(target)
                return 'R'
        
    for n in numbers:
        if n in [1,4,7]:
            ans += 'L'
            L_visited.append(n)
        elif n in [3,6,9]:
            ans += 'R'
            R_visited.append(n)
        else:
            ans += decide_hand(L_visited, R_visited, n, hand)
        
    return ans
```

**Notes**

이번 문제의 핵심은 왼손과 오른손의 위치와 누르려는 버튼 사이의 거리를 어떻게 mapping할 것인가 일듯 싶다. 나의 경우는 무식하게 좌표로 변환해서 코드를 작성하였는데, 좋은 방법은 아닌거 같아서 다른 사람의 코드를 참조해봤다.

그런데 ???...

다른 사람의 코드를 참조해보니, 나랑 비슷한게 푼듯 싶다... 더 좋은 방법이 있는지는 추후 찾아보도록하자. <br>




# 문제 2

[링크](https://programmers.co.kr/learn/courses/30/lessons/67257)

IT 벤처 회사를 운영하고 있는 라이언은 매년 사내 해커톤 대회를 개최하여 우승자에게 상금을 지급하고 있습니다.
이번 대회에서는 우승자에게 지급되는 상금을 이전 대회와는 다르게 다음과 같은 방식으로 결정하려고 합니다.
해커톤 대회에 참가하는 모든 참가자들에게는 숫자들과 3가지의 연산문자(+, -, *) 만으로 이루어진 연산 수식이 전달되며, 참가자의 미션은 전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여 만들 수 있는 가장 큰 숫자를 제출하는 것입니다.
단, 연산자의 우선순위를 새로 정의할 때, 같은 순위의 연산자는 없어야 합니다. 즉, + > - > * 또는 - > * > + 등과 같이 연산자 우선순위를 정의할 수 있으나 +,* > - 또는 * > +,-처럼 2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다. 수식에 포함된 연산자가 2개라면 정의할 수 있는 연산자 우선순위 조합은 2! = 2가지이며, 연산자가 3개라면 3! = 6가지 조합이 가능합니다.
만약 계산된 결과가 음수라면 해당 숫자의 절댓값으로 변환하여 제출하며 제출한 숫자가 가장 큰 참가자를 우승자로 선정하며, 우승자가 제출한 숫자를 우승상금으로 지급하게 됩니다.

예를 들어, 참가자 중 네오가 아래와 같은 수식을 전달받았다고 가정합니다.

"100-200*300-500+20"

일반적으로 수학 및 전산학에서 약속된 연산자 우선순위에 따르면 더하기와 빼기는 서로 동등하며 곱하기는 더하기, 빼기에 비해 우선순위가 높아 * > +,- 로 우선순위가 정의되어 있습니다.
대회 규칙에 따라 + > - > * 또는 - > * > + 등과 같이 연산자 우선순위를 정의할 수 있으나 +,* > - 또는 * > +,- 처럼 2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다.
수식에 연산자가 3개 주어졌으므로 가능한 연산자 우선순위 조합은 3! = 6가지이며, 그 중 + > - > * 로 연산자 우선순위를 정한다면 결괏값은 22,000원이 됩니다.
반면에 * > + > - 로 연산자 우선순위를 정한다면 수식의 결괏값은 -60,420 이지만, 규칙에 따라 우승 시 상금은 절댓값인 60,420원이 됩니다.

참가자에게 주어진 연산 수식이 담긴 문자열 expression이 매개변수로 주어질 때, 우승 시 받을 수 있는 가장 큰 상금 금액을 return 하도록 solution 함수를 완성해주세요.

**Code**

``` python
from itertools import permutations

def solution(expression):
    # split
    _splitted = []
    operators = []
    i = 0
    while True:
        if (i > len(expression)-1):
            break
        if expression[i] not in "0123456789":
            _splitted.append(expression[:i]) # ex) 0,1,2,3,4,5,6,7,8,9
            _splitted.append(expression[i]) # ex) -, +, *
            operators.append(expression[i])
            expression = expression[i+1:]
            i = 0
        else:
            if i == len(expression)-1 and expression[i] in "0123456789":
                _splitted.append(expression[:i+1])
            i += 1
    
    operators = set(operators)

    ans = []

    # operator priority
    for priority in list(permutations(operators)):
        splitted = _splitted
        for p in priority: 
            j = 0
            while j <= len(splitted) - 1:
                if splitted[j] in p:
                    num = str(eval("".join(splitted[j-1:j+2])))
                    splitted = splitted[:j-1] + [num] + splitted[j+2:]
                    
                else:
                    j += 1
        
        ans.append(abs(int(splitted[0])))
    
    return max(ans)

```

**Notes**

내가 생각하는 본 문제에서의 핵심은 permutation할 연산자 list가 매번 다르다는 것이다. 처음에는 그냥 default로 ["-", "+", "*"]으로 두고 풀었으나, 이게 아니라는걸 파악하니 쉽게 풀렸다. 
코드가 명료하지는 못하지만, 직관적인 조건만 지키면 쉽게 풀리는 문제였다. <br>


# 문제 3

[링크](https://programmers.co.kr/learn/courses/30/lessons/67258)

[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.
어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.
어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매

예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.

|진열대 번호|1|2|3|4|5|6|7|8|
|보석 이름|DIA|RUBY|RUBY|DIA|DIA|EMERALD|SAPPHIRE|DIA|

진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.

진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.

진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다. 이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.
가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 하도록 하며, 만약 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return 합니다.

**초기 Code**

``` python
def solution(gems):
    types = set(gems)
    candidates = []
    for start in range(len(gems)):
        end = start
        while end <= len(gems) - 1:
            if len(types) == len(set(gems[start:end+1])):
                candidates.append([end-start+1, [start+1, end+1]])
                break
            else:
                end += 1

    candidates = sorted(candidates)
    ans = min(candidates)

    return ans[1]
```

**Notes**

위 코드는 초창기 코드이다. 본 문제는 정확성뿐만 아니라 효율성도 평가하는 문제였는데, 정확성에서는 2 케이스에 대해 시간 초과를 제외하고 다 성공한 것으로보아 logic 자체는 틀리지 않았으나, 효율성 측면에서는 정말 좋지 않은 코드로 판단되었다. 
시간 복잡도를 조금이나마 해결하고자 추후에 떠올린 방법은 다음과 같다: 

가령 ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"] 이런 경우를 생각해보자. 현재 내 코드에서 효율성의 문제가 발생하였다는 것은, 최악의 경우 비효율적이라는 뜻과 같다. 
따라서, 모든 경우를 일일히 볼 수 없다는 뜻과 같다. 그래서 내가 컴퓨터였다면, 어떻게 했을지 생각해보니, 각 보석마다 가장 늦게 택한다면 언제 택할 수 있을지 미리 스캔을 해놓는 것이었다. 

위의 예시에서는 다음과 같이 정리될 수 있을 것이다: <br>
["RUBY": 2, "DIA": 7, "EMERALD": 5, "SAPHIRE": 6]

또, 동시에 가장 빨리 택한다면 언제 택할 수 있을지 미리 스캔을 해보면 다음과 같을 것이다: <br>
["RUBY": 1, "DIA": 0, "EMERALD": 5, "SAPHIRE": 6]

따라서, 두 리스트를 통해 ranges = [[1,2], [0,7], [5,5], [6,6]]를 만들고, 이를 통해 모든 요소들을 다 포함하는 가장 최소 길이의 범위는 [2,7]임을 알 수 있다. 

이를 토대로 다시 코드를 작성해봤다. 

**최종 Code**

``` python

```



<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

