let changeH1 = document.getElementsByTagName("h1");
changeH1[0].innerHTML = "change text h1";

const changePtag = document.getElementById("first");
changePtag.innerHTML = "Get it done tommarow (change text)";

const changePClass = document.getElementsByClassName("second");
changePClass[0].innerHTML = "unPlesent ";

const lengthP = document.getElementsByClassName("second").length;

const textOne = document.getElementById("text");
textOne.innerHTML = lengthP;
