export default class TreeNode {
  #LEFT = 0;
  #RIGHT = 1;

  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  get left() {
    return this.children[this.#LEFT];
  }

  get right() {
    return this.children[this.#RIGHT];
  }

  set left(node) {
    this.children[this.#LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  set right(node) {
    this.children[this.#RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }
}
