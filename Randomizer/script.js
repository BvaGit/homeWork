
var btnGenerate = document.querySelector(".btnGenerate");
var btnReset = document.querySelector(".btnReset");
var minInputText = document.querySelector(".random__min");
var maxInputText = document.querySelector(".random__max");
var randomTitle = document.querySelector(".random__title");
var randomNumber = document.querySelector(".random__number");
var fin = document.querySelector(".random__fin");
var label = true;
var rand;
var addNumber;
var range = 1;
var count = 1;
var arr = [];

function isValid(min, max){
	if (min <= 0 || max <= 0){
		return false;
	}

	if(min % 1 !== 0 || max % 1 !== 0){
		return false;
	}

	return true; 
}

function generateRandom(min, max){
	var random =Math.floor(min + Math.random() * (max + 1 - min)); 
	return random;
}





btnGenerate.addEventListener("click", function(e){
	e.preventDefault();
	if(label){
		var min = +minInputText.value;
		var max = +maxInputText.value;
		if(isValid(min, max)){
			rand = generateRandom(min, max);
			arr.push(rand);
			range = max - min + 1;
			label = false;
			minInputText.disabled = true;
			maxInputText.disabled = true;
		}else{
			alert("Введены некорректные данные");
		}
	}else if(count < range){
		min = +minInputText.value;
		max = +maxInputText.value;
		addNumber = generateRandom(min, max);
		if(arr.indexOf(addNumber) === -1){
			arr.push(addNumber);
			randomNumber.innerHTML += addNumber + " ";
			count++;
			console.log(arr);
		}

	}else if(count === range){
		fin.innerHTML = "Elements are over";
		btnGenerate.disabled = true;

	}
	
});


