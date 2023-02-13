
// Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.

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
    "document.location='/pages/taskFifth/taskFifth.html'"
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
    "document.location='/pages/taskSeventh/taskSeventh.html'"
);
navButtons.append(buttonNext);
buttonNext.style.margin = "10px auto";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Sixth task:";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText =
    "Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.";
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

let divBreak = document.createElement("div");
divBreak.classList.add("div");
divButtons.append(divBreak);
divBreak.style.flexBasis = "100%";
divBreak.style.height = "0";

let buttonAllEn = document.createElement("button");
buttonAllEn.classList.add("button");
divButtons.append(buttonAllEn);
buttonAllEn.innerText = "EN";
buttonAllEn.style.margin = "20px";
buttonAllEn.style.width = "60px";
buttonAllEn.style.backgroundColor = "#b2ffff";
buttonAllEn.style.borderRadius = "5px";

let buttonAllRu = document.createElement("button");
buttonAllRu.classList.add("button");
divButtons.append(buttonAllRu);
buttonAllRu.innerText = "RU";
buttonAllRu.style.margin = "20px";
buttonAllRu.style.width = "60px";
buttonAllRu.style.backgroundColor = "#fffdd0";
buttonAllRu.style.borderRadius = "5px";

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

const arrWords = [
    { en: "serendipity", ru: "случайная удача" },
    { en: "luminous", ru: "светящийся, яркий" },
    { en: "mellifluous", ru: "медовый, нежный" },
    { en: "effervescent", ru: "искрящийся, бодрящий" },
    { en: "ethereal", ru: "эфирный, неземной" },
    { en: "ephemeral", ru: "кратковременный, временный" },
    { en: "enamored", ru: "влюбленный, завороженный" },
    { en: "whimsical", ru: "вдохновленный, фантастический" },
    { en: "mellifluent", ru: "распутный, гладкий" },
    { en: "radiant", ru: "сияющий, испускающий свет" },
    { en: "enraptured", ru: "восхищенный, очарованный" },
    { en: "resplendent", ru: "великолепный, блестящий" },
];

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
    "#142F63",
    "#DFA392",
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
    "#ED6E02",
    "#744683",
];

function create() {
    for (let i = 0; i < arrWords.length; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = arrWords[i].en;
        cardDiv.style.width = "23%";
        cardDiv.style.height = "75px";
        cardDiv.style.margin = "5px auto";
        cardDiv.style.padding = "5px";
        cardDiv.style.textAlign = "center";
        cardDiv.style.fontFamily = "Gilroy";
        cardDiv.style.fontWeight = "bold";
        cardDiv.style.fontSize = "23px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.border = "2px solid #553f2d";
        cardDiv.style.borderRadius = "5px";
        cardDiv.style.color = arrColor[i];
        cardDiv.style.backgroundColor = arrBackColor[i];
        cardDiv.addEventListener("click", function () {
            if (cardDiv.innerText === arrWords[i].en) {
                cardDiv.innerText = arrWords[i].ru;
                cardDiv.style.color = arrBackColor[i];
                cardDiv.style.borderColor = arrBackColor[i];
                cardDiv.style.backgroundColor = arrColor[i];
                cardDiv.style.overflow = "hidden";
            } else {
                cardDiv.innerText = arrWords[i].en;
                cardDiv.style.color = arrColor[i];
                cardDiv.style.borderColor = arrColor[i];
                cardDiv.style.backgroundColor = arrBackColor[i];
            }
        });
        divElements.append(cardDiv);

        buttonAllEn.addEventListener("click", function () {
            cardDiv.innerText = arrWords[i].en;
            cardDiv.style.color = arrColor[i];
            cardDiv.style.borderColor = arrColor[i];
            cardDiv.style.backgroundColor = arrBackColor[i];
        });

        buttonAllRu.addEventListener("click", function () {
            cardDiv.innerText = arrWords[i].ru;
            cardDiv.style.color = arrBackColor[i];
            cardDiv.style.backgroundColor = arrColor[i];
            cardDiv.style.borderColor = arrBackColor[i];
            cardDiv.style.overflow = "hidden";
        });
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}

function upScroll(){
    document.body.scrollIntoView({ block: "start", behavior: "smooth" });
}

buttonCreate.addEventListener("click", create, { once: true });
buttonUp.addEventListener("click", upScroll);

