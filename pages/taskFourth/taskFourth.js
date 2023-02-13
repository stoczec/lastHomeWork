// В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса.
//  При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.
//  Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере.

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
    "document.location='/pages/taskThird/taskThird.html'"
);
navButtons.append(buttonPrevious);
buttonPrevious.style.margin = "10px auto";

let buttonHome = document.createElement("button");
buttonHome.classList.add("button");
buttonHome.innerText = "home page";
buttonHome.setAttribute("onclick","document.location='/index.html'");
navButtons.append(buttonHome);
buttonHome.style.margin = "10px auto";

let buttonNext = document.createElement("button");
buttonNext.classList.add("button");
buttonNext.innerText = "next page";
buttonNext.setAttribute(
    "onclick",
    "document.location='/pages/taskFifth/taskFifth.html'"
);
navButtons.append(buttonNext);
buttonNext.style.margin = "10px auto";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "Fourth task:";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText =
    "В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере.";
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

let divElements = document.createElement("div");
divElements.classList.add("divElements");
document.body.append(divElements);
divElements.style.border = "2px solid black";
divElements.style.margin = "10px auto";
divElements.style.width = "95%";
divElements.style.borderRadius = "5px";
divElements.style.display = "flex";
divElements.style.justifyContent = "space-evenly";
divElements.style.flexWrap = "wrap";
divElements.style.alignContent = "space-around";
divElements.style.position = "relative";

const arrImage = [
    "https://picsum.photos/id/10/1920/1080",
    "https://picsum.photos/id/20/1920/1080",
    "https://picsum.photos/id/30/1920/1080",
    "https://picsum.photos/id/40/1920/1080",
    "https://picsum.photos/id/50/1920/1080",
    "https://picsum.photos/id/60/1920/1080",
    "https://picsum.photos/id/70/1920/1080",
    "https://picsum.photos/id/80/1920/1080",
    "https://picsum.photos/id/90/1920/1080",
    "https://picsum.photos/id/100/1920/1080",
];

function create() {
    for (let i = 0; i < arrImage.length; i++) {
        let elemImg = document.createElement("img");
        elemImg.setAttribute("src", arrImage[i]);
        elemImg.style.width = "8%";
        elemImg.style.margin = "10px auto";
        elemImg.style.display = "flex";
        elemImg.style.alignItems = "center";
        elemImg.style.justifyContent = "center";
        elemImg.style.border = "2px solid #553f2d";
        elemImg.style.borderRadius = "5px";
        elemImg.addEventListener("click", function () {
            if (elemImg.style.width === "8%") {
                elemImg.style.width = "70%";
                elemImg.style.position = "absolute";
                elemImg.style.top = "-400%";
                elemImg.style.margin = "auto";
                elemImg.style.zIndex = "9";
                elemImg.style.border = "2px solid";
                elemImg.style.borderImage =
                    "linear-gradient(to right, #c6f50f 20%, #ffa500 40%, #66cdaa 60%, #00ced1 80%) 5";
            } else {
                elemImg.style.width = "8%";
                elemImg.style.position = "relative";
                elemImg.style.top = "0";
                elemImg.style.margin = "10px auto";
                elemImg.style.zIndex = "2";
            }
        });
        divElements.append(elemImg);
    }
}


buttonCreate.addEventListener("click", create, { once: true });
