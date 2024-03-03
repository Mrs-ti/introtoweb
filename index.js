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

changeColor();



const mybutton = document.getElementById("see");
mybutton.addEventListener("click", function(){
    const imageEl = document.querySelector(".my-picture");
    const textEl = document.querySelector('.about-me-text');
    textEl.classList.toggle("textclass");
    imageEl.classList.toggle("imageclass");

})
