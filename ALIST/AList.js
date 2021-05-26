var IList = require("./IList");

var AList = function (capacity) {
    IList.call(this, capacity); 
    this.size = 0;
    this.offset = 0;
    this.DEFAULT_CAPACITY = 10;
    this.array = (() => {
        if (!this.capacity) {
            return new Array(this.DEFAULT_CAPACITY);
        } else if (typeof this.capacity === "number") {
            return new Array(this.capacity);
        } else if (Array.isArray(this.capacity)) {
            this.size = this.capacity.length;
            return this.capacity;
        } else {
            throw new Error("Exception message");
        }
    })();

    this.ensureCapacity = function() {
        var newArray = new Array(this.array.length + Math.floor(this.array.length * 1.5));
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    };

    this.addValue = function(value) {
        this.array[this.offset++] = value;
        this.size++;
    };
};


AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.getSize = function() {
    return this.size;
};

AList.prototype.add = function(value) {
    if (this.size === this.array.length) {
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.offset]) {
            this.offset++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
};

AList.prototype.set = function(value, index) { //
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("ArrayIndexOutBoundsException");
    }
    
    if (!this.array[index]) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
};

AList.prototype.toArray = function(){
    var newArr = [];
    var index = 0;
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] !== undefined){
            newArr[index] = this.array[i];
            index++;
        }
    }
    return newArr;
};

AList.prototype.toString = function(){
    if(this.size === 0){
        throw new Error ("array is empty");
    }
    var str = "";
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] !== undefined){
            str += this.array[i];
        }
    }
    return str;
};

AList.prototype.get = function(value){
    for(var i = 0; i < this.length; i++){
        if(this.array[i] === value){
            return this.array[i];
        }
    }
    return false;
};

AList.prototype.remove = function(value){
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] === value){
            var arr = this.array[i];
            this.array[i] = undefined;
            this.size--;
            return arr;
        }
    }
};

AList.prototype.contains = function(value){
    if(this.size === 0) throw new Error ("array is empty");
    if(value === undefined) throw new Error ("value is empty");
    if(typeof value !== "number") throw new Error ("value is not number");

    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] === value){
            return true;
        }
    }
    return false;
};

AList.prototype.minValue = function(){
    if(this.size === 0) throw new Error ("array is empty");

    var min = this.array[0];
    for(var i = 0; i < this.array.length; i++){
        for(var y = 0; y < this.array.length; y++){
            if(min > this.array[y]){
                min = this.array[y];
            }
        }
    }
    return min;

};

AList.prototype.maxValue = function(){
    if(this.size === 0) throw new Error ("array is empty");

    var max = this.array[0];
    for(var i = 0; i < this.array.length; i++){
        for(var y = 0; y < this.array.length; y++){
            if(max < this.array[y]){
                max = this.array[y];
            }
        }

       
    }
    return max;

};

AList.prototype.minIndex = function(){
    if(this.size === 0) throw new Error ("array is empty");

    var min = this.array[0];
    var index = 0;
    for(var i = 0; i < this.array.length; i++){
        for(var y = 0; y < this.array.length; y++){
            if(min > this.array[y]){
                index = y;
                min = this.array[y];
                
            }
        }
    }
    return index;

};

AList.prototype.maxIndex = function(){
    if(this.size === 0) throw new Error ("array is empty");

    var max = this.array[0];
    var index = 0;
    for(var i = 0; i < this.array.length; i++){
        for(var y = 0; y < this.array.length; y++){
            if(max < this.array[y]){
                max = this.array[y];
                index = y;
            }
        }

       
    }
    return index;
};

AList.prototype.reverse = function(){
    if(this.size === 0) throw new Error ("array is empty");

    var arr = [];
    var index = 0;
    for(var i = this.array.length; i >= 0; i--){
        arr[index] = this.array[i];
        index++;
    }
    
    this.array = arr;
};


AList.prototype.halfReverse = function(){
    if(this.size === 0) throw new Error ("array is empty");
    var mid = Math.floor(this.array.length / 2);
    var arr = [];
    var index = 0;
    for(var i = mid; i < this.array.length; i++){
        arr[index] = this.array[i];
        index++;
    }
    for(var y = 0; y < mid; y++){
        arr[index] = this.array[y];
        index++;
    }
    this.array = arr;

};

AList.prototype.retainAll = function(arr){ // [ 0, 2, -1, 10, 5, -3, 10]  [2,10,-3]

    if(!Array.isArray(arr) || arr.length === 0){
        throw new Error ("No array and array is empty");
    }

    this.size = 0;
    var arrNew = [];
    var index = 0;
    for(var i = 0; i < arr.length; i++){
        for(var y = 0; y < this.array.length; y++){
            if(this.array[y] === arr[i]){
                arrNew[index] = this.array[y];
                index++;
                this.size++;
            }
        }
    }
    this.array = arrNew;

};

AList.prototype.removeAll = function(arr){ // [ 0, 2, -1, 10, 5, -3, 10]  [2,10,-3]

    if(!Array.isArray(arr) || arr.length === 0){
        throw new Error ("No array and array is empty");
    }

    
    for(var i = 0; i < arr.length; i++){
        for(var y = 0; y < this.array.length; y++){
            if(arr[i] === this.array[y]){
                this.array[y] = undefined;
                this.size--;
            }
        }
    }

};

AList.prototype.sort = function(){

    function quickSort(arr) {
        if (arr.length < 2) return arr;
        var pivot = arr[0];
        var left = [];
        var right = [];
          
        for (var i = 1; i < arr.length; i++) {
          if (pivot > arr[i]) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return quickSort(left).concat(pivot, quickSort(right));
      }

      this.array = quickSort(this.array);
};

AList.prototype.print = function(){
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i]){
            console.log(this.array[i]);
        }
    }
};


var list = new AList();
list.add(0);
list.add(5);
list.add(-1);
list.add(10);
list.add(5);
list.add(-3);
list.add(10);
list.set(2, 1);
console.log(list.toArray());
console.log(list.remove(9));
console.log(list.get(9));
console.log(list.toArray());
console.log(list.toString());
console.log("contains - ", list.contains(-1));
console.log("minValue - ", list.minValue());
console.log("maxValue - ", list.maxValue());
console.log("minIndex - ", list.minIndex());
console.log("maxIndex - ", list.maxIndex());
//list.reverse();
list.set(2, 1);
//list.halfReverse();
//list.retainAll([2,10,-3]);
//list.removeAll([2,10,-3]);
list.sort();
console.log(list.toArray());
console.log(list.getSize());
list.print();



module.exports = AList;