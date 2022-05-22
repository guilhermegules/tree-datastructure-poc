# Tree Data Structure

## To start

```bash
npm install # for install all dependencies
```

```bash
npm start # for start the application
```

## Basic Concepts

A tree is a data structure where a node can have zero or more children and each node has a value

The naming of three is because the data structure resembles a real tree. Starting with a root, node, branch with its descendants and finally leaves.

![](https://adrianmejia.com/images/tree-parts.jpg)

- The most top node is called **root**
- A node without children is called **leaf** node or terminal node
- **Height** of the tree is the distance between the farthest leaf to the root
- **Deep** or **level** of a node is the distance between the root and the node in question

## Full, Complete and Perfect binary trees

Depending on how nodes are arranged in a binary tree, it can be full, complete or perfect:

- **Full binary tree**: each node has exactly 0 or 2 children but never 1
- **Complete binary tree**: when all levels except the last one are full with nodes
- **Perfect binary tree**: when all the levels (including the last one) are full of nodes

![](https://adrianmejia.com/images/full-complete-perfect-binary-tree.jpg)

> These properties aren't always mutually exclusive

- A perfect tree is always complete and full
  - Perfect binary trees have precisely 2k − 1 nodes, where `k` is the last level of the tree (starting with 1).
- A complete tree is not always full
  - Like in the image above our “complete” example, since it has a parent with only one child. If we remove the rightmost gray node, then we would have a complete and full tree but not perfect.
- A full tree is not always complete and perfect.
