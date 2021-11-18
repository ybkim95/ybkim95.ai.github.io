---
layout: post
title: HackerRank Interview Preparation Kit-1 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Warm-up Challenges](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

<br>

**[원문]**

There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.<br>

For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

**Example**

Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

**Function Description**

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

int c[n]: an array of binary integers

**Returns**

int: the minimum number of jumps required

**Input Format**

The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

**Constraints**

* 2 <= n <= 100
* c[i] \in {0,1}
* c[0] = c[n-1] = 0

**Output Format**

Print the minimum number of jumps needed to win the game.

**Sample Input 0**

7

0 0 1 0 0 1 0

**Sample Output 0**

4

**Explanation 0:**

The player must avoid  and . The game can be won with a minimum of  jumps:

<div style="text-align: center;">
     <img src="https://s3.amazonaws.com/hr-challenge-images/20832/1461134731-c258160d15-jump2.png">
     <br>
</div>

**Sample Input 1**

6

0 0 0 0 1 0

**Sample Output 1**

3

**Explanation 1:**

The only thundercloud to avoid is . The game can be won in  jumps:

<div style="text-align: center;">
     <img src="https://s3.amazonaws.com/hr-challenge-images/20832/1461136358-764298d363-jump5.png">
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
# Complete the 'jumpingOnClouds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY c as parameter.
#

def jumpingOnClouds(arr):
    ans = 0
    if len(arr) == 2:
        return 1
    else:
        i = 0
        while True:
            if i > len(arr) - 1:
                break
            if arr[i] == 0:
                if i == len(arr) - 1:
                    break
                if arr[i+1] == 0:
                    if i+1 == len(arr) - 1:
                        i += 1
                        ans += 1
                        break
                    if arr[i+2] == 0:
                        i += 2
                        ans += 1
                    else:
                        i += 1
                        ans += 1 
                else:
                    i += 2
                    ans += 1 
            else:
                i += 2
                ans += 1

            print()
    
    return ans
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c)

    fptr.write(str(result) + '\n')

    fptr.close()
```

**Notes**
---

이번 문제의 핵심 한 칸을 뛰냐 두 칸을 넘어 뛰냐를 case by case로 잘 simulate하냐이다. code를 조리있게 잘짜지는 못했지만, corner case를 고려하면 쉽게 풀리는 문제인거 같았다.<br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

