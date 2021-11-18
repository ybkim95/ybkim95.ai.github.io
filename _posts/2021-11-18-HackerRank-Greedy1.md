---
layout: post
title: HackerRank Interview Preparation Kit-Greedy Algoritm1 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Greedy Algorithm](https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms)

<br>

**[원문]**

The absolute difference is the positive difference between two values  and , is written  or  and they are equal. If  and , . Given an array of integers, find the minimum absolute difference between any two elements in the array.

**Example.**  *arr = [-2,2,4]*

There are 3 pairs of numbers: [-2,2], [-2,4] and [2,4]. The absolute differences for these pairs are \|(-2) - 2\| = 4, \|(-2) - 4\| = 6 and \|2 - 4\| = 2. The minimum absolute difference is 2.

**Function Description**

Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

minimumAbsoluteDifference has the following parameter(s):

* int arr[n]: an array of integers

**Returns**

* int: the minimum absolute difference found

**Input Format**

The first line contains a single integer *n*, the size of *arr*.
The second line contains  space-separated integers, *arr[i]*.

**Constraints**

* 2 <= n <= 10^5
* -10^9 <= *arr[i]* <= 10^9


**Sample Input 0**

```
3
3 -7 0
```

**Sample Output 0**

```
3
```

**Explanation 0**

The first line of input is the number of array elements. The array, *arr*=[3,-7,0] There are three pairs to test: (3,-7), (3,0), and (-7,0). The absolute differences are:

* \|3 - -7\| = 10
* \|3 - 0\| = 3
* \| -7 - 0 \| = 7


Remember that the order of values in the subtraction does not influence the result. The smallest of these absolute differences is .

**Sample Input 1**

```
10
-59 -36 -13 1 -53 -92 -2 -96 -54 75
```

**Sample Output 1**

```
1
```

**Explanation 1**

The smallest absolute difference is \|-54 --53\| = 1.

**Sample Input 2**

```
5
1 -3 71 68 17
```

**Sample Output 2**

```
3
```

**Explanation 2**

The minimum absolute difference is \|71-68\|.



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
# Complete the 'minimumAbsoluteDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def minimumAbsoluteDifference(arr):
    if len(set(arr)) != len(arr):
        return 0
    
    arr = sorted(arr)
    ans = min(abs(x-y) for x,y in zip(arr, arr[1:]))

    return ans
            
            
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = minimumAbsoluteDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()

```

**Notes**
---

이번 문제의 핵심은 최초에 arr을 sort한 뒤 시작하는 것일 것이다. 아무래도 두 숫자의 차의 절대값을 최소화하기 위해서는 같은 부호 내에서 차이가 작아야할 것이기 때문이다.
그 외에 이번 기회에 zip()을 사용할때 두 sequence의 길이가 달라도 된다는 것을 알게 되었다. <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

