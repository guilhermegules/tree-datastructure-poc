import TreeNode from "./TreeNode.js";

export default class Tree {
  constructor(key, value = key) {
    this.root = new TreeNode(key, value);
  }

  preOrderTraversal(node = this.root) {
    if (node === null) return;

    if (node.left) this.preOrderTraversal(root.left);

    if (node.right) this.preOrderTraversal(root.right);
  }

  *preOrderTraversalIterative(node = this.root) {
    if (node === null) return;

    const stack = [node];

    while (stack.length) {
      const item = stack.pop();

      yield item;
      // Left child is pushed after right one,
      // since we want to print left child first
      // hence it must be above right child in the stack
      if (item.right) {
        stack.push(item.right);
      }

      if (item.left) {
        stack.push(item.left);
      }
    }
  }

  postOrderTraversal(node = this.root) {
    if (node === null) return;

    if (node.left) this.postOrderTraversal(node.left);

    if (node.right) this.postOrderTraversal(node.right);
  }

  postOrderTraversalIterative(node = this.root) {
    if (node === null) return;

    const stack = [node];
    const result = [];

    while (stack.length) {
      const last = stack.pop();

      result.push(last);

      if (last.left) stack.push(last.left);

      if (last.right) stack.push(last.right);
    }

    return result;
  }

  inOrderTraversal(node = this.root) {
    if (node === null) return;

    if (node.left) {
      this.inOrderTraversal(node.left);
    }

    if (node.right) {
      this.inOrderTraversal(node.right);
    }
  }

  inOrderTraversalIterative(node = this.root) {
    if (node === null) return;

    const stack = [];
    let current = node;

    while (stack.length || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      const last = stack.pop();

      current = last.right;
    }
  }

  breadthFirstTraversal(node = this.root) {
    if (node === null) return;

    const queue = [node];

    while (queue.length) {
      const item = queue.shift();

      console.log(item);

      if (item.left) {
        queue.push(item.left);
      }

      if (item.right) {
        queue.push(item.right);
      }
    }

    return queue;
  }

  breadthFirstTraversalWithMatrix(node = this.root) {
    if (node === null) return;

    const queue = [node];
    const tree = [];

    while (queue.length) {
      const length = queue.length;
      const level = [];
      for (let i = 0; i < length; i++) {
        const item = queue.shift();

        level.push(item);

        if (item.left) {
          queue.push(item.left);
        }

        if (item.right) {
          queue.push(item.right);
        }
      }

      tree.push(level);
    }

    return tree;
  }

  insert({ parentNodeKey, key, value = key, left = null, right = null }) {
    for (const node of this.preOrderTraversalIterative()) {
      if (node.key === parentNodeKey) {
        node.children?.push(
          new TreeNode({ key, value, parent: node, left, right })
        );
      }
    }
  }

  remove(key) {
    for (const node of this.preOrderTraversalIterative()) {
      const filtered = node.children.filter((child) => child.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;

        return node.children;
      }
    }

    return null;
  }

  find(key) {
    for (const node of this.preOrderTraversalIterative()) {
      if (node.key === key) return node;

      const child = node.children.find((child) => child.key === key);

      return child ?? null;
    }

    return null;
  }
}
