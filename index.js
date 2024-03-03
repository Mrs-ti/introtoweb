function changeColor(){
    const logo = document.querySelector(".my-name");
    if (logo.style.color == 'red') {
        logo.style.color = 'black';
        logo.classList.add("myclasslist");
    } else {
        logo.style.color = 'red';
        logo.classList.remove("myclasslist");
    }
    setTimeout(changeColor, 1000);
}

changeColor();
