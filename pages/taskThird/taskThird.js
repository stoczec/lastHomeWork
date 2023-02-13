// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.

document.body.style.position = "relative";
document.body.style.backgroundColor = "#f5fffa";

let buttonUp = document.createElement("button");
buttonUp.classList.add("buttonUp");
document.body.append(buttonUp);
buttonUp.innerText = "UP";
buttonUp.style.position = "fixed";
buttonUp.style.left = "95%";
buttonUp.style.top = "90%";
buttonUp.style.borderRadius = "50%";

let navButtons = document.createElement("div");
navButtons.classList.add("navButtons");
document.body.append(navButtons);
navButtons.style.display = "flex";
navButtons.style.justifyContent = "center";

let buttonPrevious = document.createElement("button");
buttonPrevious.classList.add("button");
buttonPrevious.innerText = "previous page";
buttonPrevious.setAttribute(
    "onclick",
    "document.location='/pages/taskSecond/taskSecond.html'"
);
navButtons.append(buttonPrevious);
buttonPrevious.style.margin = "10px auto";

let buttonHome = document.createElement("button");
buttonHome.classList.add("button");
buttonHome.innerText = "home page";
buttonHome.setAttribute("onclick", "document.location='/index.html'");
navButtons.append(buttonHome);
buttonHome.style.margin = "10px auto";

let buttonNext = document.createElement("button");
buttonNext.classList.add("button");
buttonNext.innerText = "next page";
buttonNext.setAttribute(
    "onclick",
    "document.location='/pages/taskFourth/taskFourth.html'"
);
navButtons.append(buttonNext);
buttonNext.style.margin = "10px auto";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Third task:";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText =
    "Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.";
document.body.append(paragraphTask);
paragraphTask.style.width = "75%";
paragraphTask.style.margin = "10px auto";
paragraphTask.style.backgroundColor = "#f7f6f4";
paragraphTask.style.border = "1px solid #c9c0b1";
paragraphTask.style.borderRadius = "5px";
paragraphTask.style.textAlign = "center";
paragraphTask.style.fontFamily = "Gilroy";

let divButtons = document.createElement("div");
divButtons.classList.add("divButtons");
document.body.append(divButtons);
divButtons.style.display = "flex";
divButtons.style.justifyContent = "center";

let buttonCreate = document.createElement("button");
buttonCreate.classList.add("button");
divButtons.append(buttonCreate);
buttonCreate.innerText = "Create!";
buttonCreate.style.margin = "20px";
buttonCreate.style.backgroundColor = "mediumseagreen";
buttonCreate.style.borderRadius = "5px";

let buttonReset = document.createElement("button");
buttonReset.classList.add("button");
divButtons.append(buttonReset);
buttonReset.innerText = "Reset!";
buttonReset.style.margin = "20px";
buttonReset.style.backgroundColor = "mediumvioletred";
buttonReset.style.borderRadius = "5px";

let buttonKill = document.createElement("button");
buttonKill.classList.add("buttonKill");
divButtons.append(buttonKill);
buttonKill.innerText = "Kill all!";
buttonKill.style.margin = "20px";
buttonKill.style.backgroundColor = "red";
buttonKill.style.borderRadius = "5px";

let divElements = document.createElement("div");
divElements.classList.add("divElements");
document.body.append(divElements);
divElements.style.border = "2px solid black";
divElements.style.margin = "10px auto";
divElements.style.width = "75%";
divElements.style.borderRadius = "5px";
divElements.style.display = "flex";
divElements.style.justifyContent = "space-evenly";
divElements.style.flexWrap = "wrap";
divElements.style.alignContent = "space-around";

let arrBackColor = [
    "#9B4ABF",
    "#09017A",
    "#8AD53A",
    "#E4DE41",
    "#88E0C8",
    "#C28FB7",
    "#F8C8B6",
    "#0B30EF",
    "#98F050",
    "#0C3D4A",
];

let arrColor = [
    "#69FAFC",
    "#97A7A9",
    "#242DF8",
    "#A36366",
    "#8208E0",
    "#6F030F",
    "#8107EA",
    "#21F020",
    "#0F3782",
    "#72D00E",
];

function create() {
    for (let i = 0; i < 10; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = i;
        cardDiv.style.width = "15%";
        cardDiv.style.height = "75px";
        cardDiv.style.margin = "10px auto";
        cardDiv.style.padding = "10px";
        cardDiv.style.textAlign = "center";
        cardDiv.style.fontFamily = "Gilroy";
        cardDiv.style.fontWeight = "bold";
        cardDiv.style.fontSize = "30px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.color = arrColor[i];
        cardDiv.style.backgroundColor = arrBackColor[i];
        cardDiv.style.border = "2px solid";
        cardDiv.style.borderColor = arrColor[i];
        cardDiv.style.borderRadius = "5px";
        cardDiv.addEventListener("click", function () {
            if (cardDiv.classList.contains("active")) {
                cardDiv.classList.remove("active");
                cardDiv.style.color = arrColor[i];
                cardDiv.style.backgroundColor = arrBackColor[i];
                cardDiv.style.borderColor = arrColor[i];
            } else {
                cardDiv.classList.add("active");
                cardDiv.style.color = arrBackColor[i];
                cardDiv.style.backgroundColor = arrColor[i];
                cardDiv.style.borderColor = arrBackColor[i];
            }
        });
        divElements.append(cardDiv);
    }
    divElements.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function reset() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].classList = "";
        x[i].style.color = arrColor[i];
        x[i].style.backgroundColor = arrBackColor[i];
        x[i].style.borderColor = arrColor[i];
    }
}

function kill() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].remove(i);
    }
}

function upScroll() {
    document.body.scrollIntoView({ block: "start", behavior: "smooth" });
}

buttonCreate.addEventListener("click", create, { once: true });
buttonReset.addEventListener("click", reset);
buttonKill.addEventListener("click", kill);
buttonUp.addEventListener("click", upScroll);
