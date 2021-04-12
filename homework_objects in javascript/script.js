/* 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц. 
Правила:
-Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно
*/

function getCookingTime(arg){
    var res = Math.ceil(arg / 5);
    return arg + " яиц нужно варить " +  res * 5 + " минут";
}

console.log(getCookingTime(9));


/* 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.*/

function getNumber(arr){
    var countEven = 0;
    var count = 0;
    var resultEven;
    var result;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            countEven++;
            resultEven = arr[i];
        }else{
            count++;
            result = arr[i];
        }
    }

    if(countEven === 1){
        return resultEven;
    }
    if(count === 1){
        return result;
    }
}

console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); //returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])); //returns 13

// 3

function findTitle(arr, str){
    var arrResult = [];
    for(var i = 0; i < arr.length; i++){
        if(String(arr[i].title).toUpperCase().includes(str.toUpperCase())){
            arrResult.push(arr[i]);
        } 
    }

    return arrResult;
}

let arr = [{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn\’t have key title js'}, {title: 'Js - is the best!'}];
    
console.log(findTitle(arr, "js"));


/* 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке */

function countCharacters(str){
    var obj = {};
    var count = 0;
    for(var i = 0; i < str.length; i++){
        var up = str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90;
        var low = str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122;
        var numb  = str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57;
        for(var y = 0; y < str.length; y++){
            if(str[i] === str[y]){
               count++;
            }
        }
        if(up || low || numb) obj[str[i]] = count;
        count = 0;
    }
    return obj;
}

console.log(countCharacters("sparrow")); // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters("aabcddeffge")); // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters("a 2ab !d")); // should return {a: 2, b:1, d:1, 2:1}


/* 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера. */

function getNextPalindrome(number){ //789 
    if(number === undefined || isNaN(number) || number === ""){
        return "noValid";
    }
    var label = true;
    var numbStr = String(++number);
    var str = "";
    while(label){
        for(var i = numbStr.length-1; i >= 0; i--){
            str += numbStr[i];
        }
        if(numbStr === str){
            return numbStr;
        }else{
            str = "";
            ++numbStr;
            numbStr = String(numbStr);
        }
    }
}

console.log(getNextPalindrome(""));