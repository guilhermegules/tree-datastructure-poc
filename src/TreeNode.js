export default class TreeNode {
  constructor({ key, value = key, parent = null, left = null, right = null }) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = parent?.children ?? [];
    this.left = left;
    this.right = right;
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}
