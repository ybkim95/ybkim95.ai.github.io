---
layout: post
title: HackerRank Interview Preparation Kit-Arrays1 (Python3)
year: 2021.11.21
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Arrays](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays)

<br>

**[원문]**

A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

**Function Description**

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

int a[n]: the array to rotate
int d: the number of rotations

**Returns**

int a'[n]: the rotated array

**Input Format**

The first line contains two space-separated integers  and , the size of  and the number of left rotations.
The second line contains  space-separated integers, each an .

**Constraints**

* 1 <= n <= 10^5
* 1 <= d <= n
* 1 <= a[i] <= 10^6

**Sample Input**

```
5 4
1 2 3 4 5
```

**Sample Output**

```
5 1 2 3 4
```

**Explanation**

When we perform  left rotations, the array undergoes the following sequence of changes:

[1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

**Code**
---

``` python
#!/bin/python3

import math
import os
import random
import re
import sys
    
# Complete the minimumSwaps function below.
def minimumSwaps(arr):
    count = 0
    for i in range(len(arr)):
        while arr[i] != i+1:
            tmp = arr[i]
            arr[i] = arr[tmp-1]
            arr[tmp-1] = tmp
            count +=1

    return count
            

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    res = minimumSwaps(arr)

    fptr.write(str(res) + '\n')

    fptr.close()

```

**Notes**
---

처음에는 주어지는 array가 1,2,3,4, ... 처럼 1부터 시작하는 순차적인 숫자로 이뤄지는지 알지 못했다. 그걸 알고난 뒤의 logic은 간단한 편이다. i번째 원소는 정렬되었을 때 기준으로 i+1인게 자명하기 때문에, 각 array의 원소를 순회하면서 (for문), 이게 될 때까지 (while문)으로 swap을 해주면 되는 것이다. 
<br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

