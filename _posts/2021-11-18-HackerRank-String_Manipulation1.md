---
layout: post
title: HackerRank Interview Preparation Kit-String Manipulation1 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[String Manipulation](https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings)

<br>

**[원문]**

A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

Example


Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.

Function Description

Complete the makeAnagram function in the editor below.

makeAnagram has the following parameter(s):

string a: a string
string b: another string
Returns

int: the minimum total characters that must be deleted
Input Format

The first line contains a single string, .
The second line contains a single string, .

Constraints

The strings  and  consist of lowercase English alphabetic letters, ascii[a-z].
Sample Input

cde
abc
Sample Output

4
Explanation

Delete the following characters from the strings make them anagrams:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
It takes  deletions to make both strings anagrams.


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
# Complete the 'makeAnagram' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING a
#  2. STRING b
#

def makeAnagram(a, b):
    ans = 0
    
    # freq dict
    dict_a = {i:0 for i in a}
    dict_b = {i:0 for i in b}
    for _a in a:
        if _a in a:
            dict_a[_a] += 1
        
    for _b in b:
        if _b in b:
            dict_b[_b] += 1
    
    # not included words count
    for _a in list(dict_a.keys()):
        if _a not in dict_b:
            ans += dict_a[_a]
            del dict_a[_a]
    for _b in list(dict_b.keys()):
        if _b not in dict_a:
            ans += dict_b[_b] 
            del dict_b[_b]
    
    # same words but diff freq
    for i in dict_a:
        ans += abs(dict_a[i] - dict_b[i])
    
    return ans      
        
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    a = input()

    b = input()

    res = makeAnagram(a, b)

    fptr.write(str(res) + '\n')

    fptr.close()

```

**Notes**
---

본 문제는 두 string에 대해서 각 sub-string들이 서로 anagram 관계에 있는 경우, 이를 만들기 위해 각 string에서 제거해야하는 문자의 수의 합을 반홚하는 것이 목표였다.
일단 먼저 헷갈렸던건, 내가 아는 anagram과 다르게, 여기서의 anagram은 각 string의 구성 문자와 그 빈도수가 같은 것으로 정의되었다. 이를 토대로, 일단 각 string에 없는 문자들을 제거하고, 빈도수가 다른 애들을 ans에 더해주는 식으로 문제를 풀었다.  <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

