let body = document.querySelector("body");
let home = document.querySelector(".home");
let backbtn = document.querySelector(".back");
let x = window.matchMedia("(max-width: 560px)");
const homepg = "file:///Y:/%D8%AA%D8%AF%D8%B1%D8%A8%20%D8%B9%D9%84%D9%89%20%D8%B5%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9/%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA/%D8%AA%D8%B9%D9%84%D9%85%20%D8%AC%D8%A7%D9%81%D8%A7%20%D8%B3%D9%83%D8%B1%D8%A8%D8%AA/index.html";

function myFunction(x) {
    backbtn = document.querySelector(".back");

    if (location != homepg) {
        home = document.querySelector(".home");
    } else {
        if (x.matches) {
            backbtn.innerText = "▶";
        } else {
            backbtn.innerText = "<-- العودة إلى الصفحة السابقة";
        }
    }
}

function homefx() {
    location = homepg;
}

function backfx() {
    if (localStorage.getItem("LastWindow") == null || localStorage.getItem("LastWindow") == "") {
        localStorage.setItem("LastWindow","المشروع 1/مشروع.html");
    }

    location = localStorage.getItem("LastWindow");
    console.log(localStorage.getItem("LastWindow"));
}

if (location.href != homepg) {
    body = document.querySelector("body");
    
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task-bar");
    body.prepend(taskdiv);

    const taskhome = document.createElement("button");
    taskhome.classList.add("bar","home");
    taskhome.innerText = "العودة إلى الصفحة الرئيسية -->";
    taskdiv.append(taskhome);

    const taskh1 = document.createElement("h1");
    taskh1.classList.add("name");
    taskh1.innerText = "يوسف عجيبة";
    taskdiv.append(taskh1);

    setTimeout(() => {
        home = document.querySelector(".home");
        home.onclick = function() {homefx();};
    });
    
} else {
    body = document.querySelector("body");


    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task-bar");
    body.prepend(taskdiv);

    const taskh1 = document.createElement("h1");
    taskh1.classList.add("name");
    taskh1.innerText = "يوسف عجيبة";
    taskdiv.append(taskh1);

    const taskback = document.createElement("button");
    taskback.classList.add("bar" , "back");
    taskback.innerText = "<-- العودة إلى الصفحة السابقة";
    taskdiv.append(taskback);

    setTimeout(() => {
        backbtn = document.querySelector(".back");
        backbtn.onclick = function() {backfx();};
    });
}

myFunction(x);