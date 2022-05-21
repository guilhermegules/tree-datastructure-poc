import TreeNode from "./TreeNode.js";

export default class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new TreeNode(value);

    this.size++;

    if (this.root) {
      const { node, parent } = this.#findNodeAndParent(value);

      if (node) {
        node.meta.multiplicity = (node.meta.multiplicity ?? 1) + 1;
        return newNode;
      }

      if (value < parent.value) {
        parent.left = newNode;
        return newNode;
      }

      if (value > parent.value) {
        parent.right = newNode;
        return newNode;
      }
    }

    this.root = newNode;
    return newNode;
  }

  find(value) {
    return this.#findNodeAndParent(value).node;
  }

  #findNodeAndParent(value) {
    let node = this.root;
    let parent = null;

    while (node) {
      if (node.value === value) break;

      parent = node;
      node = value >= node.value ? node.right : node.left;
    }

    return {
      node,
      parent,
    };
  }
}
