var Node = require('./TreeNode')
var ITree = require('./Tree')

var BST = function () {
  this.root = null;
  this.size = 0;
}

BST.prototype = Object.create(ITree.prototype);
BST.prototype.constructor = BST;

BST.prototype.init = function(array) {
  if (!Array.isArray(array)) {
    throw Error('Initialize with Array please');
  }
  for(var i = 0; i < array.length; i++) {
    this.insert(array[i]);
  }
}

BST.prototype.getSize = function() {
  return this.size
}

BST.prototype.clear = function() {
  this.root = null;
  this.size = 0;
}

BST.prototype.insert = function(data) {
  if (typeof data !== 'number'){
    throw Error('insert data should be a Number')
  }
  if (data % 1 !== 0){
    throw Error('insert Integer Number')
  }
  var node = new Node(data);
  if(this.root === null){
    this.root = node;
  }
  this.root.addNode(node)
  this.size++
}

BST.prototype.toArray = function() {

  function toArrayRecurse(node) {
    var array = [];
    if(node.left !== null){
      array.push(...toArrayRecurse(node.left))
    }

    array.push(node.data)

    if(node.right !== null){
      array.push(...toArrayRecurse(node.right))
    }
    return array;
  }
  return toArrayRecurse(this.root);
}

BST.prototype.search = function(value) {
  function searchRecurse(value,node) {
    if(node === null){
      return null
    }
    if (value < node.data) {
      return searchRecurse(value,node.left);
    }
  
    if (value > node.data) {
      return searchRecurse(value,node.right);
    }
    return node;
  }
  return searchRecurse(value, this.root)
}

BST.prototype.height = function () {
  if (this.root === null) {
    return 0;
  }
  function heightRecurse(node,result) {
    
    if (node.left === null && node.right === null) {
      return result
    }

    if (node.left !== null && node.right === null) {
      return heightRecurse(node.left, result+1)
    }

    if (node.left === null && node.right !== null) {
      return heightRecurse(node.right, result+1)
    }
    return Math.max(heightRecurse(node.right, result+1),heightRecurse(node.left,result+1));
  }
  return heightRecurse(this.root,1);
}

BST.prototype.width = function () {

  if (this.root === null) {
    return 0;
  }
  var maxWidth = 0;

  function widthRec(node,level){
    if (node === null) {
      return 0;
    }
    if(level === 1){
      return 1;
    }
    return widthRec(node.left,level - 1) + widthRec(node.right, level - 1);
  }
  for (var i = 1; i < this.height(); i++) {
    var temp = widthRec(this.root, i);
    maxWidth = Math.max(temp, maxWidth)
  }
  return maxWidth;
  
}

BST.prototype.nodes = function () {
  return this.size - this.leaves()
}

BST.prototype.leaves = function () {
  
  function leavesRecurse (node,result){
    var tempRes = 0;
    if (node.left === null && node.right === null) {
      return result + 1;
    }
    if (node.left !== null) {
      tempRes += leavesRecurse(node.left,result);
    }
    if (node.right !== null) {
      tempRes += leavesRecurse(node.right,result);
    }
    return tempRes;
  } 
  if (this.root === null){
    return 0;
  }
  return leavesRecurse(this.root,0);
}

BST.prototype.reverse = function () {

  function reverseRecurse(node){
    var tempNode = node.right;
    node.right = node.left;
    node.left = tempNode;
    if (node.left !== null) {
      reverseRecurse(node.left);
    }
    if (node.right !== null) {
      reverseRecurse(node.right)
    }
  }
  reverseRecurse(this.root);
}

BST.prototype.minNode = function () {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }

  return current;
}

BST.prototype.maxNode = function () {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }

  return current;
}

BST.prototype.remove = function (value) {

  function findMinNode(node) {
    if (node.left === null) {
      return node;
    }

    return findMinNode(node.left);
  }
  
  function removeRecurse(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.data) {
      node.left = removeRecurse(node.left, value);
      return node;
    }
    if (value > node.data) {
      node.right = removeRecurse(node.right, value);
      return node;
    }
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }

    var temp = findMinNode(node.right);
    node.data = temp.data;
    node.right = removeRecurse(node.right, temp.data);
    return node;

  }
  this.root = removeRecurse(this.root,value);
  this.size--;

}
module.exports = BST;
