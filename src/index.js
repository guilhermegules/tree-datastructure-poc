import BinarySearchTree from "./BinarySearchTree.js";
import TreeNode from "./TreeNode.js";

const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

abe.children.push(homer);
homer.children.push(bart, lisa, maggie);

console.log(abe);
console.log(homer);

const bst = new BinarySearchTree();

bst.add(1);
bst.add(2);
bst.add(3);

console.log(bst.find(2));
