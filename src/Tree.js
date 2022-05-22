import TreeNode from "./TreeNode.js";

export default class Tree {
  constructor(key, value = key) {
    this.root = new TreeNode(key, value);
  }

  *preOrderTraversal(node = this.root) {
    yield node;

    if (!node.children.length) return [];

    for (const child of node.children) {
      yield* this.preOrderTraversal(child);
    }
  }

  *postOrderTraversal(node = this.root) {
    if (!node.children.length) return [];

    for (let child of node.children) {
      yield* this.postOrderTraversal(child);
    }

    yield node;
  }

  insert(parentNodeKey, key, value = key) {
    for (const node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));

        return true;
      }
    }

    return false;
  }

  remove(key) {
    for (const node of this.preOrderTraversal()) {
      const filtered = node.children.filter((child) => child.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }

    return undefined;
  }
}
