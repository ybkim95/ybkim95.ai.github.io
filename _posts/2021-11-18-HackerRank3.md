---
layout: post
title: HackerRank Interview Preparation Kit-3 (Python3)
year: 2021.11.18
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[Warm-up Challenges](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

<br>

**[원문]**

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

* A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

**Example**

*steps = 8 path = [DDUUUUDD]* 

The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

**Function Description**

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

* int steps: the number of steps on the hike
* string path: a string describing the path

**Returns**

* int: the number of valleys traversed

**Input Format**

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe the path.

**Constraints**

* 2 <= steps <= 10^6
* path[i] \in {UD}

**Sample Input**

```
8
UDDDUDUU
```

**Sample Output**

```
1
```

**Explanation**

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

```
_/\      _
   \    /
    \/\/
```

The hiker enters and leaves one valley.

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
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path):
    # Write your code here
    height = 0
    history = [0]
    count = 0
    for p in path:
        if p == "U":
            height += 1
        else:
            height -= 1
        
        history.append(height)  

    i = 0
    switch = True 
    while True:
        if i > len(history) - 1:
            break
        if history[i] < 0:
            switch = False 
        else:
            if switch == False:
                count += 1
                switch = True
        i += 1
            
    return count
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    steps = int(input().strip())

    path = input()

    result = countingValleys(steps, path)

    fptr.write(str(result) + '\n')

    fptr.close()

```

**Notes**
---

이번 문제의 핵심은 while 문을 기반으로 -, 0+ 의 change가 얼마나 일어나는지 count를 계산하는 것이었다. 이를 위해 height history를 만들었다. <br><br>


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

