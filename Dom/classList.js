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
