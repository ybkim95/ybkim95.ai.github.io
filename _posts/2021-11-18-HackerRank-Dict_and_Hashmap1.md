---
layout: post
title: HackerRank Interview Preparation Kit-Dictionaries and Hashmaps1 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Dictionaries and Hashmaps](https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps)

<br>

**[원문]**

Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

Example
 = "attack at dawn"  = "Attack at dawn"

The magazine has all the right words, but there is a case mismatch. The answer is .

Function Description

Complete the checkMagazine function in the editor below. It must print  if the note can be formed using the magazine, or .

checkMagazine has the following parameters:

string magazine[m]: the words in the magazine
string note[n]: the words in the ransom note
Prints

string: either  or , no return value is expected
Input Format

The first line contains two space-separated integers,  and , the numbers of words in the  and the , respectively.
The second line contains  space-separated strings, each .
The third line contains  space-separated strings, each .

Constraints

.
Each word consists of English alphabetic letters (i.e.,  to  and  to ).
Sample Input 0

6 4
give me one grand today night
give one grand today
Sample Output 0

Yes
Sample Input 1

6 5
two times three is not four
two times two is four
Sample Output 1

No
Explanation 1

'two' only occurs once in the magazine.

Sample Input 2

7 4
ive got a lovely bunch of coconuts
ive got some coconuts
Sample Output 2

No
Explanation 2

Harold's magazine is missing the word .


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
# Complete the 'checkMagazine' function below.
#
# The function accepts following parameters:
#  1. STRING_ARRAY magazine
#  2. STRING_ARRAY note
#

def checkMagazine(magazine, note):
    # print(magazine, note)
    # Write your code here
    dict1 = {}
    dict2 = {}
    for i in magazine:
        if i not in dict1:
            dict1[i] = 1
        else:
            dict1[i] +=1
    for i in note:
        if i not in dict2:
            dict2[i] = 1
        else:
            dict2[i] +=1
    
    for i in note:
        if i in magazine:
            if dict1[i] < dict2[i]:
                print("No")
                return
        elif i not in magazine:
            print("No")
            return
                
    print("Yes")
    return
    

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    m = int(first_multiple_input[0])

    n = int(first_multiple_input[1])

    magazine = input().rstrip().split()

    note = input().rstrip().split()

    checkMagazine(magazine, note)

```

**Notes**
---

본 문제는 dict 자료구조를 적절히 활용하여 문제에서 제시한 조건들을 그대로 구현하면 되는 쉬운 문제였다. 참고로 dictionary 자료구조의 경우 Index 및 Store 연산이 O(1)의 시간 복잡도를 가진다.  <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

