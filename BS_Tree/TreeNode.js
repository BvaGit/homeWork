var Node = function (data){
  this.data = data; 
  this.left = null;
  this.right = null;
}
Node.prototype.addNode = function(node){
  if (node.data > this.data) {
    if(this.right === null){
      this.right = node;
    } else {
      this.right.addNode(node);
    }
  } else if(node.data < this.data){
    if (this.left === null){
      this.left = node;
    } else {
      this.left.addNode(node);
    }
  }
}

module.exports = Node;