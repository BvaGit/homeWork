/* --- Условные операторы --- */

// 1. Если а – четное посчитать а*б, иначе а+б
function aEven(a, b){
	if(a%2 == 0){
		return a * b;
	}else{
		return a + b;
	}
}

// 2. Определить какой четверти принадлежит точка с координатами (х,у)

function decart(x, y){
	if(x===undefined || y===undefined){
		return "Нет данных";
	}

	if(x>0 && y>0){
		return "Точка " + x + ":" + y + " Принадлежит I четверти";
	}else if(x<0 && y>0){
		return "Точка " + x + ":" + y + " Принадлежит II четверти";
	}else if(x<0 && y<0){
		return "Точка " + x + ":" + y + " Принадлежит III четверти";
	}else if(x>0 && y<0){
		return "Точка " + x + ":" + y + " Принадлежит IV четверти";
	}else if(x===0 && y===0){
		return "Точка " + x + ":" + y + " Лежит в начале координат";
	}else if((x===0 && y>0) || (x===0 && y<0)){
		return "Точка " + x + ":" + y + " Лежит в на оси Y";
	}else if((x>0 && y===0) || (x<0 && y===0)){
		return "Точка " + x + ":" + y + " Лежит в на оси X";
	}
}

console.log(decart());

// 3. Найти суммы только положительных из трех чисел

function getPosSum(a,b,c){
	if(typeof (a)==="string" || typeof (b)==="string" || typeof (c)==="string"){
		return "Введите число";
	}
	if(a===undefined || b===undefined || c===undefined){
		return "Введены не все значения!";
	}

	if(a>=0 && b>=0 && c>=0){
		return "Сумма положительных чисел " + (a+b+c);
	}else if(a<0 && b>=0 && c>=0){
		return "Сумма положительных чисел " + (b+c);
	}else if(a>=0 && b<0 && c>=0){
		return "Сумма положительных чисел " + (a+c);
	}else if(a>=0 && b>=0 && c<0){
		return "Сумма положительных чисел " + (a+b);
	}
}

console.log(getPosSum(5,3,2));

// 4. Посчитать выражение (макс(а*б*с, а+б+с))+3

function getExp(a,b,c){
	if(typeof (a)==="string" || typeof (b)==="string" || typeof (c)==="string"){
		return "Введите число";
	}
	if(a===undefined || b===undefined || c===undefined){
		return "Введены не все значения!";
	}

	var umn = a*b*c;
	var sum = a+b+c;

	if(umn>sum){
		return umn + 3;
	}else if(sum>umn){
		return sum + 3;
	}else if(umn === sum){
		return umn;
	}
}

console.log(getExp(0,0,0))

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function study(arg){

	if(arg === undefined){
		return "Введите данные";
	}
	if(typeof arg === "string"){
		return "Введите число";
	}

	if(arg < 0 || arg > 100){
		return false;
	}


	if(arg>=0 && arg<=19){
		return "Рейтинг: " + arg + " Оценка: F"; 
	}else if(arg>=20 && arg<=39){
		return "Рейтинг: " + arg + " Оценка: E"; 
	}else if(arg>=40 && arg<=59){
		return "Рейтинг: " + arg + " Оценка: D"; 
	}else if(arg>=60 && arg<=74){
		return "Рейтинг: " + arg + " Оценка: C"; 
	}else if(arg>=75 && arg<=89){
		return "Рейтинг: " + arg + " Оценка: B"; 
	}else if(arg>=90 && arg<=100){
		return "Рейтинг: " + arg + " Оценка: A"; 
	}
}

console.log(study());


/* --- Циклы --- */

var valid = function(arg){
	if(arg === undefined || typeof arg === "string"){
		return true;
	}
}

// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function getSumEven(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	var sum = 0;
	for(var i = 0; i <= arg; i++){
		if(i % 2 === 0){
			sum += i;
		}
	}
	return sum;
}

console.log(getSumEven(99));

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function getPrimeNumber(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	var count = 0;
	for(var i=1; i<=arg; i++){
		if(arg%i === 0){
			count++;
		}
	}

	if(count>2){
		return "Число " + arg + " не является простым";
	}

	return "Число " + arg + " простое";
}

console.log(getPrimeNumber(7));




// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)


function getSquareNumberLine(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	if(arg<0){
		return "Введены некорректные данные";
	}

	var sq = 1;
	for(var i=1; i<=arg; i++){
		sq = i * i;
		if(sq===arg){
			return i;
		}
	}


	
}

console.log(getSquareNumberLine(64));

function getSquareNumberBin(arg){

	if(valid(arg)){
		return "Введены некорректные данные";
	}

	if(arg<0){
		return "Введены некорректные данные";
	}

	var min = 1;
	var max = arg;
	var prev = 0;
	for (var i = 0; i <= arg; i++)
	{
		var mid = Math.floor((min + max) / 2);
		if (prev == mid){
			return mid;
		}
			
		var q = mid * mid;
		if (arg == q){
			return mid;
		}
		if (arg < q){
			max = mid;
		}else{
			min = mid;
			prev = mid;
		}
	}
}

console.log( getSquareNumberBin(100))


// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function getFact(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	var fact = 1;
	for(var i = 1; i <= arg; i++){
		fact *= i;
	}

	return fact;
}

console.log(getFact(10));

// 5. Посчитать сумму цифр заданного числа

function getSum(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	var sum = 0;
	for(var i = 1; i <= arg; i++){
		sum += i;
	}

	return sum;
}

console.log(getSum(5));

// 6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.


function getMirrorNumber(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	var numbStr = String(arg);
	var mirror = "";
	for(var i = numbStr.length - 1; i >= 0; i--){
		mirror += numbStr[i];
	}

	return +mirror;
}



/* --- Одномерные массивы ---*/

function validArr(arr){
	if(!Array.isArray(arr) || arr.length === 0 || arr === undefined){
		return true;
	}
}

// 1. Найти минимальный элемент массива; 2. Найти максимальный элемент массива
// 3. Найти индекс минимального элемента массива;  4. Найти индекс максимального элемента массива

function arrMinMax(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	var resultMin = arr[0];
	var resultMax = arr[0];
	var resultMinIndex = 0;
	var resultMaxIndex = 0;
	for(var i = 0; i < arr.length; i++){
		for(var y = 0; y <arr.length; y++){
			
			if(resultMin >= arr[y]){
				resultMin = arr[y];
				resultMinIndex = y;
			}

			if(resultMax <= arr[y]){
				resultMax = arr[y];
				resultMaxIndex = y;
			}
		}
	}

	return {
		arr: arr,
		elemMin: resultMin,
		indexMin: resultMinIndex,
		elemMax: resultMax,
		indexMax: resultMaxIndex
	};
	
	
	

}

var arr = [-5,3,-10,8,-1,7,-5];
console.log(arrMinMax(arr));


//  5. Посчитать сумму элементов массива с нечетными индексами 7. Посчитать количество нечетных элементов массива

function getOddSumIndexElem(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	var sum = 0;
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(i % 2 !== 0){
			sum += arr[i];
			count++;
		}
	}
	return {
		arr: arr,
		oddElem: sum,
		oddCount: count
	};
	
	
}

console.log(getOddSumIndexElem(arr));

// 6 Сделать реверс массива (массив в обратном направлении)

function getArrReverse(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	var arrRev = [];
	var index = 0;
	for(var i = arr.length - 1 ; i >= 0; i--){
		arrRev[index] = arr[i];
		index++;
	}

	return arrRev;
}

console.log(getArrReverse(arr));

// 8 Поменять местами первую и вторую половину массива, например, для массива 

function getSwap(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	var label = Math.floor(arr.length / 2);
	console.log(label);
	var arrRes = [];
	for(var i = 0; i < arr.length; i++){
		if(i < label){
			arrRes[i] = arr[i + label];
		}else{
			arrRes[i] = arr[i - label];
		}
	}

	return arrRes;
}

console.log(getSwap([1,2,3,4]));

// 9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

// Bubble

let arrBub = [15,14,13,12,-1,5,18,1,1,0];

function bubbleSort(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	var arrRes = [];

	for(let i = 0; i<=arr.length; i++){

		for(let y=0; y<=arr.length; y++){
	
			if(arr[y]>arr[y+1]){
				let swap = arr[y];
				arr[y] = arr[y+1];
				arr[y+1] = swap;
			}
			
		}
	
	}

	return arr;
}

console.log(bubbleSort(arrBub));

//select

function sortSelect(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	for(var i = 0; i < arr.length; i++){
		var min = arr[i];
		var index = i;
		for(var y = i + 1; y < arr.length; y++){
			if(min > arr[y]){
				min = arr[y];
				index = y;
			}
		}
		arr[index] = arr[i];
		arr[i] = min;
	}
	return arr;
}

console.log(sortSelect(arrBub));

// insert

function sortInsert(arr){
	if(validArr(arr)){
		return "Введены некорректные данные";
	}

	for(var i = 1; i < arr.length; i++){
		var cur = arr[i];
		for(var y = i; y > 0 && arr[y - 1] > cur; k--){
			arr[y] = arr[k - 1];
		}
		arr[y] = cur;
	}

	return arr;

}

console.log(sortInsert(arrBub));

/* --- Функции --- */

// 1. Получить строковое название дня недели по номеру дня. 

function getDay(arg){
	if(valid(arg)){
		return "Введены некорректные данные";
	}

	var arrDay = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
	return arrDay[arg - 1];
}

console.log(getDay(7));

//

function word(arg){
	var x = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
	var y = ["сто", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
	var z = ["тысяча", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
	
	if(arg > 100 && arg < 1000){

		var arg1 = (arg - (arg % 100)) / 100,
			arg2 = ((arg % 100) - arg%10) / 10,
			arg3 = arg % 10;
		return z[arg1] + " " + y[arg2] + " " + x[arg3];

	} else if(arg >= 0 && arg < 20){

		return x[arg];

	} else if(arg > 20 && arg < 100){

		var arg2 = ((arg % 100) - arg % 10) / 10;
		var	arg3 = arg % 10;
		return y[arg2] + " " + x[arg3];

	} else if(arg == 10){
		return y[1];

	} else if (arg == 100){
		return z[1];
	}
}

var w = 559;
console.log(`Число ${w} прописью - ${word(w)}`);



module.exports = {aEven, decart, getPosSum, 
getExp, study, valid, getSumEven, getPrimeNumber,
getSquareNumberLine, getSquareNumberBin,
getFact, getSum, getMirrorNumber, validArr,
arrMinMax, getOddSumIndexElem, getArrReverse,
getSwap, bubbleSort};