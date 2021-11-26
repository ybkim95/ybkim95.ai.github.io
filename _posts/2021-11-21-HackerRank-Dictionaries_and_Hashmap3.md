---
layout: post
title: HackerRank Interview Preparation Kit-Dictionaries and Hashmap3 (Python3)
year: 2021.11.21
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Sherlock and Anagrams](https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps)

<br>

**[원문]**

Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

**Example**

s = mom

The list of all anagrammatic pairs is [m,m], [mo,om] at positions [[0],[2]], [[0,1],[1,2]]  respectively.

**Function Description**

Complete the function sherlockAndAnagrams in the editor below.

sherlockAndAnagrams has the following parameter(s):

* string s: a string

**Returns**

* int: the number of unordered anagrammatic pairs of substrings in *s*

**Input Format**

The first line contains an integer *q*, the number of queries.
Each of the next *q* lines contains a string *s* to analyze.

**Constraints**

* 1 <= q <= 10
* 2 <= length of s <= 100

*s* contains only lowercase letters in the range ascii[a-z].

**Sample Input 0**

```
2
abba
abcd
```

**Sample Output 0**

```
4
0
```

**Explanation 0**

The list of all anagrammatic pairs is [a,a], [ab,ba], [b,b] and [abb,bba] at positions [[0],[3]], [[0,1],[2,3]], [[1],[2]] and [[0,1,2],[1,2,3]] respectively.

No anagrammatic pairs exist in the second query as no character repeats.

**Sample Input 1**

```
2
ifailuhkqq
kkkk
```

**Sample Output 1**

```
3
10
```

**Explanation 1**

For the first query, we have anagram pairs [i,i], [q,q] and [ifa,fai] at positions [[0],[3]], [[8],[9]] and [[0,1,2],[1,2,3]] respectively.

For the second query:
There are 6 anagrams of the form [k,k] at positions [[0],[1]], [[0],[2]], [[0],[3]], [[1],[2]], [[1],[3]] and [[2],[3]].
There are 3 anagrams of the form [kk,kk] at positions [[0,1],[1,2]], [[0,1],[2,3]] and [[1,2],[2,3]].
There is 1 anagram of the form [kkk,kkk] at position [[0,1,2],[1,2,3]].

**Sample Input 2**

```
1
cdcd
```

**Sample Output 2**

```
5
```

**Explanation 2**

There are two anagrammatic pairs of length 1:[c,c] and [d,d].
There are three anagrammatic pairs of length 2:[cd,dc], [cd,cd], [dc,cd] at positions [[0,1],[1,2]], [[0,1],[2,3]], [[1,2],[2,3]] respectively.


**초기 Code**
---

``` python
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'sherlockAndAnagrams' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING s as parameter.
#

def isAnagram(s1,s2):
    if len(set(s1)) != len(set(s2)):
        return False
    
    dic1 = {i:list(s1).count(i) for i in list(s1)}
    dic2 = {i:list(s2).count(i) for i in list(s2)}
        
    if dic1 == dic2:
        return True
    return False
    
def sherlockAndAnagrams(s):
    if len(set(s)) == 1:
        return len(s) * (len(s)+1) // 2
    ans = 0
    start = 0
    win_size = 1
    for start in range(len(s)):
        while win_size < len(s):
            target = s[start:start+win_size]
            candidates = [s[j:j+win_size] for j in range(start+1, len(s)-win_size+1)]
            for c in candidates:
                if isAnagram(target, c):
                    ans += 1
            win_size += 1
        win_size = 1
    
    return ans
                

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        s = input()

        result = sherlockAndAnagrams(s)

        fptr.write(str(result) + '\n')

    fptr.close()
```

**Notes**
---

힘들게 최초의 코드를 짯으나, 아마 전체적으로 시간 복잡도의 문제가 발생하는거 같다 (colab 상에서 돌려보면 답은 다 맞는데, Hackerrank에서는 TLE가 뜨는 걸로 보아).
그래서 좀 더 스마트한 다른 사람의 코드를 분석해보고자 한다. 



**최종 Code**
---

``` python

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'sherlockAndAnagrams' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING s as parameter.
#

from collections import Counter

def sherlockAndAnagrams(s):
    arr = []
    for i in range(1,len(s)): # window size
        for j in range(0, len(s)-i+1): # start position
            arr.append("".join(sorted(s[j:j+i])))
    
    count = {k:v for k,v in Counter(arr).items() if v > 1}

    ans = 0
    for i in list(count.values()):
        ans += sum(range(i))

    return ans
                

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        s = input()

        result = sherlockAndAnagrams(s)

        fptr.write(str(result) + '\n')

    fptr.close()

```

**Notes**
---

위 코드는 돌아다니는 python 코드중 가장 직관적으로 이해가 된 것을, 내가 이해하기 편하도록 변형해서 작성해본 코드이다. 우선 주어진 s를 토대로 만들 수 있는 모든 substring을 모아놓은 list를 만드는 부분은 내가 생각한 것과 동일했다. 

하지만, 한 가지 이 문제에서 핵심적으로 생각해야 하는 것은, 내가 isAnagram() 함수를 만드느라 고생했던 부분에서 두 string간의 dictionary를 만들어서 각 구성요소가 같은 횟수로 사용되었는지 확인하기 보다, 각 string을 sort한 다음 같은지를 판단하는게 훨씬 효율적이라는 것이다. (그래서 sorted()를 사용한 것)

그 다음으로, collections library에서 제공하는 Counter 함수를 사용하면 주어진 list의 원소가 몇번 count되는지를 너무나도 편리하게 알 수 있다... (왜 여태까지 몰랐을까...) 

그래서 만들어진 count는 각 substring별로 1회 이상 사용된 것만 filter한 결과물이다. 

이제 가장 쉬운 과정만 남았다. list(count.values())를 출력해보면, 2회 이상 사용된 substring별로 몇번 관측되었는지 결과가 나오는데, 여기서 range(i)를 해주면 가령, 4에 대해서 6(3+2+1+0)으로 mapping 되어야 하는데, 이를 ans += sum(range(4))같은 방식으로 대체할 수 있다. 



<br><br>

<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

