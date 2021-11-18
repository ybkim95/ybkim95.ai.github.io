---
layout: post
title: HackerRank Interview Preparation Kit-2 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Warm-up Challenges](https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

<br>

**[원문]**

There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

**Example**


The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

**Function Description**

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider

**Returns**

int: the frequency of a in the substring
Input Format

The first line contains a single string, .
The second line contains an integer, .

**Constraints**

For  of the test cases, .

**Sample Input**

aba

10

**Sample Output 0**

7

**Explanation 0**

The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

**Sample Input 1**

a

1000000000000

**Sample Output 1**

1000000000000

**Explanation 1**

Because all of the first  letters of the infinite string are a, we return .


**Code**
---

``` python
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'repeatedString' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. STRING s
#  2. LONG_INTEGER n
#

def repeatedString(s, n):
    if len(set(s)) == 1:
        if s[0] == "a":
            return n
        else:
            return 0
    
    check = False
    for i in s:
        if i == "a":
            check = True
    if not check:
        return 0

    _a,_b = divmod(n, len(s))

    # s = s * a + s[:b]

    ans = 0
    for a in s:
        if a == "a":
            ans += 1
    
    ans *= _a
    
    for a in s[:_b]:
        if a == "a":
            ans += 1 

    return ans

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input().strip())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()
```

**Notes**
---

이번 문제의 핵심은 일반적인 상황에서 실행 시간을 줄이기 위해 기본 s에 대해서 "a"의 개수를 알아낸 뒤에 몫을 그 개수에 곱해주고 slicing된 sub-string에서 "a"가 등장하는 횟수를 계산하는 것이었다. (초창기 error들이 모두 run-time error였음.) <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

