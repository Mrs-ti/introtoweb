changeColor();
function changeColor(){
    const logo = document.querySelector(".logo");
    if (logo.style.color == 'white') {
        logo.style.color = 'skyblue';
        logo.classList.add("myclasslist");
    } else {
        logo.style.color = 'white';
        logo.classList.remove("myclasslist");
    }
    setTimeout(changeColor, 1000);
}


//menuClicked
menuClicked();
function menuClicked(){
    const menuBar = document.querySelector(".menu-bar");
    const dropdown = document.querySelector(".dropdown");
    const wrapper = document.querySelector(".dropdown-wrapper");
    menuBar.addEventListener("click", ()=>{
        menuBar.classList.toggle("change"); //toggle classlist
        dropdown.classList.toggle("changeHeight");
        wrapper.classList.toggle("changeOpacity");
    })
}

