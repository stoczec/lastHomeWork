let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "My last home work, basic frontend course.";
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "#ffe1ff";

let navButtons = document.createElement("div");
navButtons.classList.add("navButtons");
document.body.append(navButtons);
navButtons.style.display = "flex";
navButtons.style.justifyContent = "center";

let buttonTaskFirst = document.createElement("button");
buttonTaskFirst.classList.add("button");
buttonTaskFirst.innerText = "First Task";
buttonTaskFirst.setAttribute("onclick","document.location='pages/taskFirst/taskFirst.html'");
navButtons.append(buttonTaskFirst);
buttonTaskFirst.style.margin = "10px auto";
buttonTaskFirst.style.display = "block";
buttonTaskFirst.style.backgroundColor = "#FF0000";


let buttonTaskSecond = document.createElement("button");
buttonTaskSecond.classList.add("button");
buttonTaskSecond.innerText = "Second Task";
buttonTaskSecond.setAttribute("onclick","document.location='pages/taskSecond/taskSecond.html'");
navButtons.append(buttonTaskSecond);
buttonTaskSecond.style.margin = "10px auto";
buttonTaskSecond.style.display = "block";
buttonTaskSecond.style.backgroundColor = "#FF7F00";

let buttonTaskThird = document.createElement("button");
buttonTaskThird.classList.add("button");
buttonTaskThird.innerText = "Third Task";
buttonTaskThird.setAttribute("onclick","document.location='pages/taskThird/taskThird.html'");
navButtons.append(buttonTaskThird);
buttonTaskThird.style.margin = "10px auto";
buttonTaskThird.style.display = "block";
buttonTaskThird.style.backgroundColor = "#FFFF00";

let buttonTaskFourth = document.createElement("button");
buttonTaskFourth.classList.add("button");
buttonTaskFourth.innerText = "Fourth Task";
buttonTaskFourth.setAttribute("onclick","document.location='pages/taskFourth/taskFourth.html'");
navButtons.append(buttonTaskFourth);
buttonTaskFourth.style.margin = "10px auto";
buttonTaskFourth.style.display = "block";
buttonTaskFourth.style.backgroundColor = "#00FF00";

let buttonTaskFifth = document.createElement("button");
buttonTaskFifth.classList.add("button");
buttonTaskFifth.innerText = "Fifth Task";
buttonTaskFifth.setAttribute("onclick","document.location='pages/taskFifth/taskFifth.html'");
navButtons.append(buttonTaskFifth);
buttonTaskFifth.style.margin = "10px auto";
buttonTaskFifth.style.display = "block";
buttonTaskFifth.style.backgroundColor = "#0000FF";

let buttonTaskSixth = document.createElement("button");
buttonTaskSixth.classList.add("button");
buttonTaskSixth.innerText = "Sixth Task";
buttonTaskSixth.setAttribute("onclick","document.location='pages/taskSixth/taskSixth.html'");
navButtons.append(buttonTaskSixth);
buttonTaskSixth.style.margin = "10px auto";
buttonTaskSixth.style.display = "block";
buttonTaskSixth.style.backgroundColor = "#2E2B5F";

let buttonTaskSeventh = document.createElement("button");
buttonTaskSeventh.classList.add("button");
buttonTaskSeventh.innerText = "Seventh Task";
buttonTaskSeventh.setAttribute("onclick","document.location='pages/taskSeventh/taskSeventh.html'");
navButtons.append(buttonTaskSeventh);
buttonTaskSeventh.style.margin = "10px auto";
buttonTaskSeventh.style.display = "block";
buttonTaskSeventh.style.backgroundColor = "#8B00FF";
buttonTaskSeventh.style.borderRadius = "10%";
buttonTaskSeventh.style.width = "15%";

