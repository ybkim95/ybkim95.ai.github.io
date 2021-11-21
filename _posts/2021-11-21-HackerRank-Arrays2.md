---
layout: post
title: HackerRank Interview Preparation Kit-Arrays2 (Python3)
year: 2021.11.21
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Minimum Swaps 2](https://www.hackerrank.com/challenges/minimum-swaps-2/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays)

<br>

**[원문]**

You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

**Example**

Perform the following steps:

```
i           arr           swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
```

It took 5 swaps to sort the array.

**Function Description**

Complete the function minimumSwaps in the editor below.

minimumSwaps has the following parameter(s):

int arr[n]: an unordered array of integers

**Returns**

int: the minimum number of swaps to sort the array

**Input Format**

The first line contains an integer, , the size of .
The second line contains  space-separated integers .

**Constraints**


**Sample Input 0**

```
4
4 3 1 2
```

**Sample Output 0**

```
3
```

**Explanation 0**

Given array *arr:* [4,3,1,2] <br>
After swapping (0,2) we get *arr*: [1,3,4,2] <br>
After swapping (1,2) we get *arr*: [1,4,3,2] <br>
After swapping (1,3) we get *arr*: [1,2,3,4] <br>

So, we need a minimum of 3 swaps to sort the array in ascending order.

**Sample Input 1**

```
5
2 3 4 1 5
```

**Sample Output 1**

```
3
```

**Explanation 1**

Given array *arr:* [2,3,4,1,5] <br>
After swapping (2,3) we get *arr*: [2,3,1,4,5] <br>
After swapping (0,1) we get *arr*: [3,2,1,4,5] <br>
After swapping (0,2) we get *arr*: [1,2,3,4,5] <br>
So, we need a minimum of 3 swaps to sort the array in ascending order.

**Sample Input 2**

```
7
1 3 5 2 4 6 7
```

**Sample Output 2**

```
3
```

**Explanation 2**

Given array *arr:* [1,3,5,2,4,6,7] <br>
After swapping (1,3) we get *arr:* [1,2,5,3,4,6,7] <br>
After swapping (2,3) we get *arr:* [1,2,3,5,4,6,7] <br>
After swapping (3,4) we get *arr:* [1,2,3,4,5,6,7] <br>
So, we need a minimum of 3 swaps to sort the array in ascending order.

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
# Complete the 'rotLeft' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER d
#

def rotLeft(a, d):
    return a[d:] + a[:d]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    d = int(first_multiple_input[1])

    a = list(map(int, input().rstrip().split()))

    result = rotLeft(a, d)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()

```

**Notes**
---

이번 문제는 간단한 array slicing 문제로 간단하게 해결가능하였다. 이를 응용한 문제중 기억에 남는 것은 주어진 크기의 window를 slide하면서 그 list의 원소의 합이 최대가 되는 경우를 찾는 문제였다. <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

