---
layout: post
title: 프로그래머스 [1차] 다트게임 (Python)
year: 2021.11.17
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[프로그래머스 다트게임](https://programmers.co.kr/learn/courses/30/lessons/17682)

<br>

**[원문]**

카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~

Game Star

카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.<br>
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.<br>

다트 게임은 총 3번의 기회로 구성된다.<br>
각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.<br>
점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.<br>
옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.<br>
스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)<br>
스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)<br>
스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)<br>
Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.<br>
스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.<br>
0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.<br>

**입력 형식**

"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.<br>

예) 1S2D*3T<br>

점수는 0에서 10 사이의 정수이다.<br>
보너스는 S, D, T 중 하나이다.<br>
옵선은 *이나 # 중 하나이며, 없을 수도 있다.<br>

*출력 형식**
3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.<br>
예) 37<br>

**입출력 예제**

예제	dartResult	answer	설명 <br>
1	1S2D*3T	37	11 * 2 + 22 * 2 + 33 <br>
2	1D2S#10S	9	12 + 21 * (-1) + 101 <br>
3	1D2S0T	3	12 + 21 + 03  <br>
4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31 <br>
5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31 <br>
6	1T2D3D#	-4	13 + 22 + 32 * (-1) <br>
7	1D2S3T*	59	12 + 21 * 2 + 33 * 2 <br>


**Code**
---

``` python
def solution(dartResult):
    ans = 0
    splitted = []
    
    i = 0
    while True:
        if len(dartResult) == 0:
            break
        
        if dartResult[i] in "DST":
            if i == len(dartResult) - 1:
                splitted.append(dartResult[:i+2])
                dartResult = dartResult[i+2:]
                i = 0

            elif dartResult[i+1] in "*#":
                splitted.append(dartResult[:i+2])
                dartResult = dartResult[i+2:]
                i = 0
            else:
                splitted.append(dartResult[:i+1])
                dartResult = dartResult[i+1:]
                i = 0
        else:
            i += 1

    nums = [0, 0, 0]
    options = ['', '', '']
    for i in range(len(splitted)):
        if len(splitted[i]) == 2:
            if splitted[i][1] == "S":
                nums[i] = int(splitted[i][0]) ** 1
            elif splitted[i][1] == "D":
                nums[i] = int(splitted[i][0]) ** 2
            elif splitted[i][1] == "T":
                nums[i] = int(splitted[i][0]) ** 3
        
        elif len(splitted[i]) == 3:
            # 10이 있는 경우
            if '10' in splitted[i]:
                if splitted[i][2] == "S":
                    nums[i] = 10 ** 1
                elif splitted[i][2] == "D":
                    nums[i] = 10 ** 2
                elif splitted[i][2] == "T":
                    nums[i] = 10 ** 3
            # 일반적인 경우 + option
            else:
                if splitted[i][1] == "S":
                    nums[i] = int(splitted[i][0]) ** 1
                    options[i] = splitted[i][2]
                elif splitted[i][1] == "D":
                    nums[i] = int(splitted[i][0]) ** 2
                    options[i] = splitted[i][2]
                elif splitted[i][1] == "T":
                    nums[i] = int(splitted[i][0]) ** 3
                    options[i] = splitted[i][2]

        
        # 10이 포함되어있고, option까지 있는 경우
        elif len(splitted[i]) == 4:
            if splitted[i][2] == "S":
                nums[i] = 10 ** 1
                options[i] = splitted[i][3]
            elif splitted[i][2] == "D":
                nums[i] = 10 ** 2
                options[i] = splitted[i][3]
            elif splitted[i][2] == "T":
                nums[i] = 10 ** 3
                options[i] = splitted[i][3]
    
    for i in range(len(options)):
        if options[i] == "#":
            nums[i] = -1 * nums[i]
        elif options[i] == "*":
            if i == 0:
                nums[0] *= 2
            else:
                nums[i] *= 2
                nums[i-1] *= 2
        else:
            pass
    
    return sum(nums)
``` 

**Notes**
---

Level 1 문제이다. 간단한 문제인데, 정규 표현식에 대한 숙지가 안되어있어 굉장히 번거롭게 문제를 해결했다. 특히 10이 포함된 경우를 처리하는게 번거로우니 주의하자. 
아래 코드는 다른 사람의 모범 답안인데, 이번 기회에 정규 표현식을 좀 익혀보자. 

``` python
import re

def solution(dartResult):
    bonus = {'S' : 1, 'D' : 2, 'T' : 3}
    option = {'' : 1, '*' : 2, '#' : -1}
    p = re.compile('(\d+)([SDT])([*#]?)')
    dart = p.findall(dartResult)
    for i in range(len(dart)):
        if dart[i][2] == '*' and i > 0:
            dart[i-1] *= 2
        dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

    answer = sum(dart)
    return answer
```

**코드 리뷰**

Python에서 정규 표현식을 사용하려면, re 라이브러리를 import 해야한다.

파이썬 re 모듈의 메타문자는 총 12개로 다음과 같은 것들이 있다.

``` python
`$()*+.?[\^{
```

위에서 사용한 re.compile()은 정규표현식을 사용하는 방법 중 정규표현식을 미리 컴파일 해서 패턴을 저장해놓는 경우이다.

re.compile() : 패턴저장

예시를 하나 봐보자. 

``` python
import re
pattern1 = re.compile("\d{2}")
print(type(pattern1))
print('\n')
print(dir(pattern1))
```

[Output]

```
<class 're.Pattern'>
[...
 'findall',
 'finditer',
 'flags',
 'fullmatch',
 'groupindex',
 'groups',
 'match',
 'pattern',
 'scanner',
 'search',
 'split',
 'sub',
 'subn']
```

컴파일된 객체는 re.Pattern이라는 타입으로 저장되고, 컴파일된 객체에 바로 함수를 적용해 사용하면 된다.

```
pattern1.findall("dflds78flksd")
```
```
[Output]
['78']
```

장점은 다음과 같다.

컴파일(compile)을 활용하는 경우, 한 줄 더 써야 하지만 패턴 객체(p)를 만들고 나서 여러번 재사용이 가능하다.
반복적인 매칭 작업이 필요할 경우에는 패턴을 미리 컴파일해서 시간을 단축할 수 있다.

그렇다면, 다시 다른 사람의 풀이로 돌아가 re.compile()에 인자로 전달되는 부분을 어떤 의미를 담고 있는 것일까?
이는 정규 표현식을 뜻하는데, '(\d+)([SDT])([*#]?)'를 봐보면 다음과 같은 의미를 해석할 수 있다. 

()는 하위표현식을 의미하고, []는 가령 [SDT]이면 S or D or T를 의미하고, [*#]은 * or #를 의미한다. [*#]?는 * or #가 0개 이상인 경우를 뜻한다. 
\d는 모든 숫자와 일치하며 [0-9]와 동일한 의미가 있고, 뒤에 +가 붙어있으므로, 이는 앞의 문자나 부분식을 하나 이상 탐욕적으로 찾겠다는 뜻을 담고 있다. 

종합적으로, 위 정규 표현식은 1) 모든 숫자 중 하나가 포함되어있는 것을 우선적으로 찾은 뒤, 2) S 혹은 D 혹은 T가 포함되어있어야 하고, * 혹은 #이 0개 이상 포함된 것을 찾겠다는 것이다. 

따라서, 이를 기준으로 아래와 같이 dart를 정의하고 print 해보면 아래와 같다. 

``` python
dart = p.findall(dartResult)
print(dart)
```

``` python
[('1', 'S', ''), ('2', 'D', '*'), ('3', 'T', '')]
```

여기까지 완성이 되었다면, 게임이 끝난것과 다름 없다. 나머지 부분은 너무 직관적인 logic이라 생략한다. 



<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

