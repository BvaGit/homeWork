var rangeMin = document.querySelector("#rangeMin");
var rangeMax = document.querySelector("#rangeMax");
var rangeCount = document.querySelector("#rangeCount");
var start = document.querySelector(".start_game");
var modalWin = document.querySelector(".modal__window");
var btnYes = document.querySelector(".generate");
var countX = document.querySelector(".count_x");
var levelX = document.querySelector(".level_x");
var modalVic = document.querySelector(".modal_bg_vic");
var modalEnd = document.querySelector(".modal_bg_end");
var contin = document.querySelectorAll(".continue");
var exit = document.querySelector(".exit");
var vicTry = document.querySelector(".vic_try");
var countAtt = 0;
var countTry = 1;
var objRange = {};



function volidStart(min, max, count){
    if(min<=0 || max<=0 || count<=0){
        return false;
    }

    if(min % 1 !==0 || max % 1 !==0 || count % 1 !==0){
        return false;
    }    
    
    if(max>200){
        return false;
    }
       
    if(count>15){
        return false;
    }

    if(min>=max){
            return false;
    }

    if(min==="" || max==="" || count===""){
        return false;
    }

        return true;
    
}

var modalBg = function(){
    var modalBg = document.querySelector(".modal__bg");
    modalBg.classList.toggle("hide");
};

var random = function(min, max){
    var r = Math.random() * (max - min + 1) + min;
     return Math.floor(r);
};


start.addEventListener("click", (e)=>{
    e.preventDefault();
    var rMin = +rangeMin.value;
    var rMax = +rangeMax.value;
    var rCount = +rangeCount.value;


    if(volidStart(rMin, rMax, rCount)){
        objRange = {
            min: rMin,
            max: rMax,
            count: rCount
        };
        modalWin.classList.toggle("modal__window-hide");
        setTimeout(modalBg, 200);
        objRange.r = random(objRange.min, objRange.max);
        document.querySelector(".min_span").innerHTML = objRange.min;
        document.querySelector(".max_span").innerHTML = objRange.max;
        document.querySelector(".count_span").innerHTML = objRange.count;
        countX.innerHTML = objRange.count;
        countAtt = objRange.count;
    }else{
        alert("Некоректно введены данные");
    }


});

var enterNumb = document.querySelector(".game__number");

btnYes.addEventListener("click", function(e){
    e.preventDefault();
    var gameNumb = +enterNumb.value;
    // Вычесляем процентное соотношения
    if(gameNumb > objRange.max){
        document.querySelector(".max_span").classList.toggle("span_warning");
        enterNumb.value = "";
        setTimeout(function(){
            document.querySelector(".max_span").classList.toggle("span_warning");
        }, 1000);
    }else if(gameNumb < objRange.min){
        document.querySelector(".min_span").classList.toggle("span_warning");
        enterNumb.value = "";
        setTimeout(function(){
            document.querySelector(".min_span").classList.toggle("span_warning");
        }, 1000);
    }else if(gameNumb >= objRange.r){
        var edge = Math.floor((objRange.r / gameNumb) * 100);
    }else if(gameNumb < objRange.r){
        var edge = Math.floor((gameNumb / objRange.r) * 100);
    }

    console.log(gameNumb);
    if(gameNumb !== objRange.r){
        if(countAtt > 1){
            countX.innerHTML = --countAtt;
            ++countTry;
            if(objRange.r <=6){
                if(edge>=50 && edge<=99){
                    levelX.style.backgroundColor = "#fe5a00";
                    levelX.innerHTML = "Жарко";
                }else if(edge>=25 && edge<50){
                    levelX.style.backgroundColor = "#fea700";
                    levelX.innerHTML = "Тепло";
                }else if(edge<25){
                    levelX.style.backgroundColor = "#00a7fe";
                    levelX.innerHTML = "Холодно";
                }
            }else if(objRange.r > 6 && objRange.r <=99){
                if(edge>=70 && edge<85){
                    levelX.style.backgroundColor = "#fea700";
                    levelX.innerHTML = "Тепло";
                }else if(edge>=85 && edge<=99){
                    levelX.style.backgroundColor = "#fe5a00";
                    levelX.innerHTML = "Жарко";
                }else{
                    levelX.style.backgroundColor = "#00a7fe";
                    levelX.innerHTML = "Холодно";
                }
            }else if(objRange.r >= 100){
                if(edge>=85 && edge<=89){
                    levelX.style.backgroundColor = "#fea700";
                    levelX.innerHTML = "Тепло";
                }else if(edge>=90 && edge<=99){
                    levelX.style.backgroundColor = "#fe5a00";
                    levelX.innerHTML = "Жарко";
                }else{
                    levelX.style.backgroundColor = "#00a7fe";
                    levelX.innerHTML = "Холодно";
                }
            }
            
        }else if(countAtt === 1){
            modalEnd.classList.toggle("show");
            enterNumb.value = "";
            levelX.style.backgroundColor = "#00a7fe";
            levelX.innerHTML = "Холодно";
            countTry = 1;
        }
    

    }else if(gameNumb === objRange.r){
        vicTry.innerHTML = countTry;
        modalVic.classList.toggle("show");
        enterNumb.value = "";
        levelX.style.backgroundColor = "#00a7fe";
        levelX.innerHTML = "Холодно";
        countTry = 1;
    }

});

contin[0].addEventListener("click", function(e){
    e.preventDefault();
    modalVic.classList.toggle("show");
    modalBg();
    setTimeout(function(){
        modalWin.classList.toggle("modal__window-hide");
    }, 50);

});
contin[1].addEventListener("click", function(e){
    e.preventDefault();
    modalEnd.classList.toggle("show");
    modalBg();
    setTimeout(function(){
        modalWin.classList.toggle("modal__window-hide");
    }, 50);

});

exit.addEventListener("click", function(e){
    e.preventDefault();
    rangeMin.value = "";
    rangeMax.value = "";
    rangeCount.value = "";
    modalBg();
    setTimeout(function(){
        modalWin.classList.toggle("modal__window-hide");
    }, 50);
});




