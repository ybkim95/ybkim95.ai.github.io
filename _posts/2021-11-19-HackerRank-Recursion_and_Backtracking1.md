---
layout: post
title: HackerRank Interview Preparation Kit-Recursion and Backtracking1 (Python3)
year: 2021.11.19
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[The Fibonacci Sequence](https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking)

<br>

**[원문]**

The Fibonacci Sequence

The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.

The Fibonacci sequence begins with  and  as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:

* *fibonacci*(0) = 0
* *fibonacci*(1) = 1
* *fibonacci*(n) = *fibonacci*(n-1) + *fibonacci*(n-2)

Given *n*, return the *n*th number in the sequence.

**Example**

The Fibonacci sequence to 6 is *f*_s = [0, 1, 1, 2, 3, 5, 8]. With zero-based indexing, *f*_s[5] = 5.

**Function Description**

Complete the recursive function  in the editor below.

fibonacci has the following parameter(s):

* int n: the index of the sequence to return

**Returns**

\- int n: the  element in the Fibonacci sequence

**Input Format**

The integer *n*.

**Constraints**

0 < *n* <= 30

Sample Input

```
STDIN   Function
-----   --------
3       n = 3
Sample Output
```

2

**Explanation**

The Fibonacci sequence begins as follows:

*fibonacci*(0) = 0 <br>
*fibonacci*(1) = 1 <br>
*fibonacci*(2) = 0 + 1 = 1 <br>
*fibonacci*(3) = 1 + 1 = 2 <br>
*fibonacci*(4) = 2 + 1 = 3 <br>
*fibonacci*(5) = 3 + 2 = 5 <br>
*fibonacci*(6) = 5 + 3 = 8 <br>


...

In the sequence above, *fibonacci*(3) is 2.

**Code**
---

``` python
def fibonacci(n):

    if n == 0:
        return 0
    elif n in [1,2]:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

n = int(input())
print(fibonacci(n))

```

**Notes**
---

너무나도 많이 풀어본 피보나치 수열 문제이다. <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

