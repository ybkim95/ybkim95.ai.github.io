---
layout: post
title: HackerRank Interview Preparation Kit-Recursion and Backtracking2 (Python3)
year: 2021.11.19
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking)

<br>

**[원문]**

We define super digit of an integer  using the following rules:

Given an integer, we need to find the super digit of the integer.

If  has only  digit, then its super digit is .
Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .
For example, the super digit of  will be calculated as:

	super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2  
Example


The number  is created by concatenating the string   times so the initial .

    superDigit(p) = superDigit(9875987598759875)
                  9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
    superDigit(p) = superDigit(116)
                  1+1+6 = 8
    superDigit(p) = superDigit(8)
All of the digits of  sum to . The digits of  sum to .  is only one digit, so it is the super digit.

Function Description

Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

superDigit has the following parameter(s):

string n: a string representation of an integer
int k: the times to concatenate  to make 
Returns

int: the super digit of  repeated  times
Input Format

The first line contains two space separated integers,  and .

Constraints

Sample Input 0

148 3
Sample Output 0

3
Explanation 0

Here  and , so .

super_digit(P) = super_digit(148148148) 
               = super_digit(1+4+8+1+4+8+1+4+8)
               = super_digit(39)
               = super_digit(3+9)
               = super_digit(12)
               = super_digit(1+2)
               = super_digit(3)
               = 3
Sample Input 1

9875 4
Sample Output 1

8
Sample Input 2

123 3
Sample Output 2

9
Explanation 2

Here  and , so .

super_digit(P) = super_digit(123123123) 
               = super_digit(1+2+3+1+2+3+1+2+3)
               = super_digit(18)
               = super_digit(1+8)
               = super_digit(9)
               = 9

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
# Complete the 'superDigit' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING n
#  2. INTEGER k
#

def superDigit(n, k):
    if len(n) == 1:
        return int(n)*k

    decomposed = [int(i) for i in n]
    
    return superDigit(str(sum(decomposed)*k), 1)
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = first_multiple_input[0]

    k = int(first_multiple_input[1])

    result = superDigit(n, k)

    fptr.write(str(result) + '\n')

    fptr.close()

```

**Notes**
---

처음에 조금 삽질을 하긴 했는데, logic은 굉장히 명료하다. input으로 들어온 string의 길이가 1이면 바로 return되고, 그게 아니라면 각 자리수 int로 변환해 합한 결과를 string으로 변환해 return하는데, 이때 trick이 k번 반복한 string에 대해서 하는게 아니라 기본 string을 통해 계산된 숫자에 k를 곱하면 되는 것이다. 주의 해야할 것이 있다면, 그 어느 과정에서도 n*k라는 연산을 직접적으로 하면 바로 runtime error가 난다는 것이다. <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

