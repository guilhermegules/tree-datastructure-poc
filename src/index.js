import Tree from "./Tree.js";

const tree = new Tree({ key: 1, value: "A", left: 2, right: 3 });

tree.insert(1, 2, "AB", 4, 5);
tree.insert(1, 3, "AC", 6, 7);

console.log(tree.breadthFirstTraversal());
