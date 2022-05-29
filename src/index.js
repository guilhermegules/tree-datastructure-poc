import Tree from "./Tree.js";

const tree = new Tree({ key: 1, value: "A", left: 2, right: 3 });

tree.insert({ parentNodeKey: 1, key: 2, value: "AB", left: 4, right: 5 });
tree.insert({ parentNodeKey: 1, key: 3, value: "AC", left: 6, right: 7 });

console.log(tree.breadthFirstTraversal());

tree.remove(2);

console.log(tree.breadthFirstTraversal());
