---
layout: post
title: HackerRank Interview Preparation Kit-String Manipulation2 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[String Manipulation](https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings)

<br>

**[원문]**

You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

Example

Remove an  at positions  and  to make  in  deletions.

Function Description

Complete the alternatingCharacters function in the editor below.

alternatingCharacters has the following parameter(s):

string s: a string
Returns

int: the minimum number of deletions required
Input Format

The first line contains an integer , the number of queries.
The next  lines each contain a string  to analyze.

Constraints

Each string  will consist only of characters  and .
Sample Input

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB
Sample Output

3
4
0
0
4
Explanation

The characters marked red are the ones that can be deleted so that the string does not have matching adjacent characters.

<div style="text-align: center;">
     <img src="https://s3.amazonaws.com/hr-assets/0/1502450721-a0a2e9b5bd-alternatingCharacter2.png">
     <br>
</div>




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
# Complete the 'alternatingCharacters' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING s as parameter.
#

def alternatingCharacters(s):
    # ex. AAAAA, BBBBB
    if len(set(s)) == 1:
        return len(s)-1
    
    i = 0
    count = 0
    while True:
        if i == len(s) - 1:
            break
        if s[i] == s[i+1]:
            count += 1
            s = s[:i] + s[i+1:]
        else:
            i += 1

    return count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        s = input()

        result = alternatingCharacters(s)

        fptr.write(str(result) + '\n')

    fptr.close()

```

**Notes**
---

본 문제는 두 개의 문자 'A', 'B'가 각각 연속되어 나오지 않도록 문자를 제거해 그 제거한 횟수를 반환하는 문제였다. 딱히 고려할 사항이 많은 문제는 아니었다. "AAAA", "BBBBB" 이런 경우만 예외처리해준 뒤에 일반적인 방법론으로 해결하면 되는 문제였다. 
<br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

