---
layout: post
title: HackerRank Interview Preparation Kit-Dictionaries and Hashmap2 (Python3)
year: 2021.11.21
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Two Strings](https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps)

<br>

**[원문]**

Given two strings, determine if they share a common substring. A substring may be as small as one character.

Example

s1 = "and"
s2 = "art"

These share the common substring a.

s1 = "be"
s2 = "cat"

These do not share a substring.

**Function Description**

Complete the function twoStrings in the editor below.

twoStrings has the following parameter(s):

string s1: a string
string s2: another string

**Returns**

* string: either YES or NO

**Input Format**

The first line contains a single integer p, the number of test cases.

The following p  pairs of lines are as follows:

* The first line contains string s1.
* The second line contains string s2.

**Constraints**

* s1 and s2 consist of characters in the range ascii[a-z].
* 1 <= p <= 10
* 1 <= \| s1 \|, \| s2 \| <= 10^5

**Output Format**

For each pair of strings, return YES or NO.

**Sample Input**

```
2
hello
world
hi
world
```

**Sample Output**

```
YES
NO
```

**Explanation**

We have p = 2 pairs to check:

s1 = "hello", s2 = "world". The substrings 'o' and '1' are common to both strings.
a = "hi", b = "world". s1 and s2 share no common substrings.


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
# Complete the 'twoStrings' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s1
#  2. STRING s2
#

def twoStrings(s1, s2):
    _s1 = set(s1)
    _s2 = set(s2)
    
    if _s1 & _s2:
        return "YES"
    else:
        return "NO"
    # Write your code here

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        s1 = input()

        s2 = input()

        result = twoStrings(s1, s2)

        fptr.write(result + '\n')

    fptr.close()

```

**Notes**
---

두 string array 간 공통된 원소를 공유하는지 여부를 판단하는 문제이다. 각 list의 고유한 alphabet만 비교하면 되니까 set()을 사용하였고, set의 intersection 연산자인 &을 사용하였다. 참고로 s & t의 시간복잡도는 O(len(s)+len(t))라고 한다. 

<br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

