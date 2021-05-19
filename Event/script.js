const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000", false);
xhr.send();
const imgJson = JSON.parse(xhr.response);
console.log(imgJson);




function render(){
    const slHeader = document.querySelector('.sliders__header');
    const slItems = document.querySelector('.sliders__items');
    for(let i = 0; i < imgJson.length; i++){
        const img = document.createElement('img');

        if(i == 0){
            img.setAttribute('src', imgJson[i].url);
            img.classList.add('sliders__header__img');
            slHeader.append(img);
        } else {
            img.classList.add('sliders__img');
            img.setAttribute('src', imgJson[i].url);
            slItems.append(img);
        }


    }
}

render();

const imgMini = document.querySelectorAll(".sliders__img");
const imgMax = document.querySelector('.sliders__header__img');
const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const mClose = modal.querySelector('.modal__close');
const mSlide = modal.querySelector('.modal__slide');
const mPause = modal.querySelector('.modal__pause');
const mImg = modal.querySelector('.modal__img');



imgMini.forEach((item, i) => {
    item.addEventListener("click", ()=>{
        imgMax.setAttribute("src", imgJson[i+1].url);
    });
});


let i = 1;
function interval(){
    
    let slInterval = setInterval(()=>{
    if(i < imgJson.length){
        mImg.setAttribute('src', imgJson[i].url);
        i++;
    }else {
        i = 1;
    }
    },800);
    return slInterval;
}


let setImgModal = function (){
    modal.classList.toggle('show');
    mImg.setAttribute('src', imgJson[0].url);
    sliderInterval = interval();
};

let sliderInterval;
btn.addEventListener("click", setImgModal);

mPause.addEventListener('click', ()=>{
    if(mPause.innerHTML === "Pause"){
        clearInterval(sliderInterval);
        mPause.innerHTML = "Play";
    }else{
        sliderInterval = interval();
        mPause.innerHTML = "Pause";
    }
});

mClose.addEventListener("click", ()=>{
    modal.classList.toggle('show');
    clearInterval(sliderInterval);
    mPause.innerHTML = "Pause";
});


module.exports = {render, setImgModal, interval};

