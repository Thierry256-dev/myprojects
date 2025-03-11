let menuList = document.getElementById("menuList")
let header = document.querySelector("header");
let headerContainer = document.getElementById("headerContainer")
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
    header.classList.add("blur");
    headerContainer.style.opacity = "0";
  }
  else{
    menuList.style.maxHeight = "0px"
    header.classList.remove("blur")
    headerContainer.style.opacity = "1"
  }
}
 
