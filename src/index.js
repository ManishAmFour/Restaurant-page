import "./styles.css";
import MenuFunction from "./Home.js";
import {Contact} from "./ContactInfo.js"
import {MenuOrderDetail} from "./Menu.js";

MenuFunction();

document.querySelector(`.Home-tab`).addEventListener(`click`,()=>{

    MenuFunction();

})


document.querySelector(`.Menu-tab`).addEventListener(`click`,()=>{


    MenuOrderDetail();

})


document.querySelector(`.Contact-tab`).addEventListener(`click`,()=>{


    Contact();



})



