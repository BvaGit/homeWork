function Calculator(){


};

Calculator.prototype.getSimpleExp = function(values){
    return eval(values);
};

Calculator.prototype.fact = function(value){
    if(value === undefined){
        return false;
    }

    var res = 0;
    for(var i = 0; i <= +value; i++){
        res += i;
    }
    return res;
};

Calculator.prototype.pi = function(){
    return '3.14159';
};

Calculator.prototype.e = function(){
    return '2.71828';
};

Calculator.prototype.delOneSymbol = function(value){
    return value.substring(0, value.length - 1);
};

Calculator.prototype.sq = function(value){
    var x = +value;
    return x * x;
};

Calculator.prototype.oneDivX = function(value){
    return 1 / +value;
};

Calculator.prototype.abs = function(value){
    return Math.abs(+value);
};

Calculator.prototype.exp = function(value){
    return Math.exp(+value);
};

Calculator.prototype.mod = function(arg1, arg2){
    var res = arg1 % arg2;
    return res;
};

Calculator.prototype.cube = function(value){
    var x = +value;
    return x * x * x;
};

Calculator.prototype.xDegY = function(arg1, arg2){
    var res = 1;
    for(var i = 1; i <= arg2; i++){
        res *= arg1;
    }

    return res;
};

Calculator.prototype.tenDegX = function (value){
    return 10 * +value;
}








