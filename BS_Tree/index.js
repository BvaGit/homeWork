var BST = require('./BST')

var tree = new BST();
tree.insert(8);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.remove(4);
console.log(tree);


