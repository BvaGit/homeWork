
var IList = require('./IList');

var LList = function(){
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.Node = function (value, next = null) {
        this.value = value;
        this.next = next;
    };
};

LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.getSize = function(){
    return this.size;
}

LList.prototype.add = function(value){
    var newNode = new this.Node(value);
    this.size++;

    if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
    
        return this.head;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  
    return this.head;
};

LList.prototype.set = function(value, index){

var currentNode = this.head;
var i = 1;
while(currentNode){
    if(i === index){
        return currentNode.value = value;
    }
    i++;
    currentNode = currentNode.next;
}

};

LList.prototype.get = function(value){
    var currentNode = this.head;
    while(currentNode){
       if(currentNode.value === value){
           return currentNode.value;
       }

       currentNode = currentNode.next;
    }
};

LList.prototype.remove = function(value){

    var removeNode = null;

    while(this.head && this.head.value === value){
        removeNode = this.head;
        this.head = this.head.next;
        this.size--;
    }

    var currentNode = this.head;

    while(currentNode.next){
        if(currentNode.next.value === value){
            removeNode = currentNode.value;
            currentNode.next = currentNode.next.next;
            this.size--;
            
        }else{
            currentNode = currentNode.next;
        }
        
    }
};

LList.prototype.toArray = function(){

    var currentNode = this.head;
    var arr = [];
    var i = 0;
    while(i < this.size){
        arr[i] = currentNode.value;
        i++;
        currentNode = currentNode.next;
    }

    return arr;
};

LList.prototype.toString = function(){
    var currentNode = this.head;
    var str = "";
    var i = 0;
    while(i < this.size){
        str += currentNode.value;
        i++;
        currentNode = currentNode.next;
    }

    return str;
};

LList.prototype.contains = function(value){

    var currentNode = this.head;
    while(currentNode){
        
        if(currentNode.value === value){
            return true
        }

        currentNode = currentNode.next;
    }

    return false;
};

LList.prototype.minValue = function(){
    var arrList = this.toArray();
    var min = arrList[0];
    for(var i = 0; i < arrList.length; i++){
        if(min > arrList[i]){
            min = arrList[i];
        }
    }
    return min;
};

LList.prototype.maxValue = function(){
    var currentNode = this.head;
    var max = currentNode.value;
    
    while(currentNode){
        if(max < currentNode.value){
            max = currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return max;
};

LList.prototype.minIndex = function(){

    var currentNode = this.head;
    var min = currentNode.value;
    var index = 0;
    var i = 0;

    while(currentNode){
        
        if(min > currentNode.value){
            min = currentNode.value;
            i = index;
        }
        currentNode = currentNode.next;
        index++;
    }
    return i;
};

LList.prototype.maxIndex = function(){

    var currentNode = this.head;
    var max = currentNode.value;
    var index = 0;
    var i = 0;

    while(currentNode){
        
        if(max < currentNode.value){
            max = currentNode.value;
            i = index;
        }
        currentNode = currentNode.next;
        index++;
    }
    return i;
};

LList.prototype.reverse = function(){
    var currentNode = this.head;
    var prevNode = null;
    var nextNode = null;

    while(currentNode){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;

};

LList.prototype.retainAll = function(arr){ //[1,4,20]
    var removeNode = null;

    while(this.head && this.head.value !== arr[0]){
        removeNode = this.head;
        this.head = this.head.next;
        this.size--;
    }
    var currentNode = this.head;

    while(currentNode){
       
        for(var i = 0; i < arr.length; i++){
            if(currentNode.next === null){
                break;
            }
            if(currentNode.next.value !== arr[i]){
                removeNode = currentNode.value;
                currentNode.next = currentNode.next.next;
                this.size--;
               
            }
        }
        currentNode = currentNode.next;
    }

};

LList.prototype.removeAll = function(arr){ //[1,4,20]

   
    var removeNode = null;

    while(this.head && this.head.value === arr[0]){
        removeNode = this.head;
        this.head = this.head.next;
        this.size--;
    }

    var currentNode = this.head;

    while(currentNode){
        
        for(var i = 0; i < arr.length; i++){
            
            if(currentNode.next.value === arr[i]){
                removeNode = currentNode.value;
                currentNode.next = currentNode.next.next;
                this.size--;
            }
        }
        currentNode = currentNode.next;
    }
};


var llist = new LList();

llist.add(1);
llist.add(2);
llist.add(4);
llist.set(51, 2);
llist.add(8);
llist.add(-10);
console.log(llist.add(20));
//console.log(llist.get(8));
//llist.remove(1);
//console.log("toArray - ",llist.toArray());
//console.log("getSize - ",llist.getSize());
//console.log("toString - ",llist.toString());
//console.log("contains - ",llist.contains(9));
//console.log("minValue - ",llist.minValue());
//console.log("maxValue - ",llist.maxValue());
//console.log("minIndex - ",llist.minIndex());
//console.log("maxIndex - ",llist.maxIndex());
//llist.reverse();
//console.log("toArray - ",llist.toArray());
console.log("toArray - ",llist.toArray());
//llist.removeAll([1,4,20]);
llist.retainAll([1,4,20]);
console.log("toArray - ",llist.toArray());







