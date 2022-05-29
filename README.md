# :deciduous_tree: Tree Data Structure

## :bicyclist: To start

```bash
npm install # for install all dependencies
```

```bash
npm start # for start the application
```

## :toolbox: Basic Concepts

A tree is a data structure where a node can have zero or more children and each node has a value

The naming of three is because the data structure resembles a real tree. Starting with a root, node, branch with its descendants and finally leaves.

![](https://adrianmejia.com/images/tree-parts.jpg)

- The most top node is called **root**
- A node without children is called **leaf** node or terminal node
- **Height** of the tree is the distance between the farthest leaf to the root
- **Deep** or **level** of a node is the distance between the root and the node in question

## :atom_symbol: Full, Complete and Perfect binary trees

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

## Traversal

### Breadth first traversal

o achieve this form of traversal we can use a queue (First In First Out) data structure. Here's how the overall algorithm would look like:

- Initiate a queue with root in it
- Remove the first item out of queue
- Push the left and right children of popped item into the queue
- Repeat steps 2 and 3 until the queue is empty

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066197622/MEa_jdswt.png?auto=compress,format&format=webp)

### Depth First Search/Traversal (DFS)

In DFS, we take one node and keep exploring it's children until the depth the fully exhausted. Like:

```
root node -> left node -> right node // pre-order traversal
left node -> root node -> right node // in-order traversal
left node -> right node -> root node // post-order traversal
```

#### Pre-order traversal

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066335323/uu_rnMwc2.png?auto=compress,format&format=webp)

**Trick:** We can use this simple trick to find out the pre order traversal af any tree manually: traverse the entire tree starting from the root node keeping yourself to the left

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066309451/tKaff2RAo0.png?auto=compress,format&format=webp)

#### In-order traversal

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066398214/_S82oVUdj.png?auto=compress,format&format=webp)

**Trick:** We can use this simple trick to find out in order traversal of any tree manually: keep a plane mirror horizontally at the bottom of the tree and take the projection of all the nodes.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066383550/7fxAFVhV1.png?auto=compress,format&format=webp)

#### Post-order traversal

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066468275/aXvp4kZ-V.png?auto=compress,format&format=webp)

**Trick:** Form quick manual post order traversal any tree: pluck all the leftmost leaf nodes one by one

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1630066456516/oWu_cm681.png?auto=compress,format&format=webp)
