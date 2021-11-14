---
layout: post
title: LeetCode 94. Binary Tree Inorder Traversal
year: 2021.11.14
description: >
author: Y.B.KIM
noindex: false
category: study
---
**Problem**
---
[LeetCode #94](https://leetcode.com/problems/binary-tree-inorder-traversal/)

<br>

**[원문]**

Given the root of a binary tree, return the inorder traversal of its nodes' values.

<br>

**Example 1:**
``` 
Input: root = [1,null,2,3]
Output: [1,3,2]
 ```


**Example 2:**
``` 
Input: root = []
Output: []
``` 


**Example 3:**
``` 
Input: root = [1]
Output: [1]
``` 


**Example 4:**
``` 
Input: root = [1,2]
Output: [2,1]
``` 


**Constraints:**

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100


**Code**
---

``` python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.traversal = []
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        
        self.inorderTraversal(root.left)
        self.traversal.append(root.val)
        self.inorderTraversal(root.right)
        
        return self.traversal 
``` 

**Notes**
---

Inorder Traversal은 트리에서 중위 순회를 말한다. 이는 먼저 왼쪽 서브 트리를 중위 순회하고, 노드를 방문한 뒤, 오른쪽 서브 트리를 중위 순회하는 것이다. 
위키피디안의 Pseudo Code를 참조하면 아래와 같다. 

``` 
inorder(node)
  if node.left  ≠ null then inorder(node.left)
  print node.value
  if node.right ≠ null then inorder(node.right)
``` 

<br>

<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="ybkim95" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>