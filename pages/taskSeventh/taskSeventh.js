// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

document.body.style.position = "relative";
document.body.style.backgroundColor = "#f5fffa";

let buttonUp = document.createElement("button");
buttonUp.classList.add("buttonUp");
document.body.append(buttonUp);
buttonUp.innerText = "UP";
buttonUp.style.position = "fixed";
buttonUp.style.zIndex = "10";
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
    "document.location='/pages/taskSixth/taskSixth.html'"
);
navButtons.append(buttonPrevious);
buttonPrevious.style.margin = "10px auto";

let buttonHome = document.createElement("button");
buttonHome.classList.add("button");
buttonHome.innerText = "home page";
buttonHome.setAttribute("onclick", "document.location='/index.html'");
navButtons.append(buttonHome);
buttonHome.style.margin = "10px auto";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Seventh task:";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText =
    "Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.";
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
divButtons.style.flexWrap = "wrap";

let buttonCreate = document.createElement("button");
buttonCreate.classList.add("button");
divButtons.append(buttonCreate);
buttonCreate.innerText = "Create!";
buttonCreate.style.margin = "20px";
buttonCreate.style.backgroundColor = "mediumseagreen";
buttonCreate.style.borderRadius = "5px";

let divElements = document.createElement("div");
divElements.classList.add("divElements");
document.body.append(divElements);
divElements.style.border = "2px solid black";
divElements.style.margin = "10px auto";
divElements.style.borderRadius = "5px";
divElements.style.display = "flex";
divElements.style.justifyContent = "space-evenly";
divElements.style.flexWrap = "wrap";
divElements.style.alignContent = "space-around";
divElements.style.position = "relative";

let divPseudo = document.createElement("div");
divPseudo.classList.add("divPseudo");
document.body.append(divPseudo);
divPseudo.style.margin = "10px auto";
divPseudo.style.height = "60px";

function create() {
    for (let i = 0; i <= 255; i += 5) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = i;
        cardDiv.style.color = "rgb(" + i + ",128,128)";
        cardDiv.style.width = "6%";
        cardDiv.style.height = "20px";
        cardDiv.style.margin = "5px auto";
        cardDiv.style.padding = "5px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.border = "2px solid";
        cardDiv.style.borderColor = "rgb(128," + i + ",128)";
        cardDiv.style.borderRadius = "5px";
        cardDiv.style.backgroundColor = "rgb(128,128," + i + ")";
        divElements.append(cardDiv);
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}

function upScroll() {
    document.body.scrollIntoView({ block: "start", behavior: "smooth" });
}

buttonCreate.addEventListener("click", create, { once: true });
buttonUp.addEventListener("click", upScroll);
