const URL = 'http://localhost:3000/';
let dbJson = null;

const btn = document.querySelectorAll(".btn");
const answer = document.querySelectorAll(".answer");

function getReq(url, select = null){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url + select, false);
    xhr.send();
    dbJson = JSON.parse(xhr.response);
}

btn.forEach((item, i) => {
    item.addEventListener("click", () => {
        getReq(URL, i+1);
        answer[i].innerHTML = JSON.stringify(dbJson);
    });
});




