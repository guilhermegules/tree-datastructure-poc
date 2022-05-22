import Tree from "./Tree.js";

const tree = new Tree(1, "A");

tree.insert(1, 2, "AB");
tree.insert(1, 3, "AC");
tree.insert(1, 12, "AD");
tree.insert(12, 121, "B");

console.log([...tree.preOrderTraversal()].map((x) => x.value));
// ['A', 'AB', 'AC', 'AD', 'B']

console.log(tree.root.value); // 'A'
console.log("Tree has children", tree.root.hasChildren); // true

console.log("key 12 is a leaf", tree.find(12).isLeaf); // true
console.log("key 121 is a leaf", tree.find(121).isLeaf); // false
console.log(`parent value of the key 121 is ${tree.find(121).parent.value}`); // 'AD'

tree.remove(12);

console.log([...tree.postOrderTraversal()].map((x) => x.value));
// ['A']
