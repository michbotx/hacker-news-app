
import RouterHandler from "./router.js";
// import store from "./store.js";


window.onhashchange = () => {
    setActiveLink(); 
}

function setActiveLink() {
    //retrieve header link in html and find the link according to the class
    const links = document.querySelectorAll(".header-link")
    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        const currPath = window.location.hash;
        //compare if linkpath === currpath and add active class

        if(currPath === linkPath) {
            link.classList.add("active")
        }else{
            link.classList.remove("active")
        }
    })
}

class App {
    constructor() {
        new RouterHandler()
    }
}

new App(); 
