const navMenu = document.querySelector(".nav-items");
const slider = document.querySelector(".menu");

slider.addEventListener("click", ()=> {
    const menuStaus = navMenu.getAttribute("slider");

    if(menuStaus === "false") {
        navMenu.setAttribute("slider", "true");
    }
    else if(menuStaus === "true") {
        navMenu.setAttribute("slider", "false");
    }
})