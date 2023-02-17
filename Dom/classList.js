function classNameH() {
  const h1ClassName = document.querySelectorAll("#h1classlist");
  //   console.log(h1ClassName);
  //   h1ClassName[0].className = "addclass";
  if (h1ClassName[0].className === "h1class") {
    h1ClassName[0].className = "addclass";
  } else {
    h1ClassName[0].className = "h1class";
  }
}

let classLi = document.querySelector("#liOne").classList;
console.log(classLi);

// let calssLi2 = document.querySelectorAll("#liOne");
// calssLi2[2].classList;
// console.log(calssLi2);

let toggleBtn = function () {
  let h1Toggle = document
    .querySelector(".h1toggle")
    .classList.toggle("h1ToggleClass");
};
