
import { MenuDetails } from "./Menu.js";


import { ContactDetails } from "./ContactInfo.js";


export let Heading;
export let MenuOrder;

export default function MenuFunction(){
    
   Heading = document.createElement("div");
    let TopBar = document.createElement("div");
     MenuOrder = document.createElement("div");
    
    Heading.innerHTML = `<div class="Heading">Restaurant</div>`
   MenuOrder.innerHTML = `<div class="Home-Text" >Welcome To our Home Page Please Enjoy</div>`
    
    MenuOrder.classList.add(`menu-order`)
    TopBar.classList.add(`top-bar`)
    
    TopBar.innerHTML = `
    <div class="Home-tab">Home</div>
    <div class="Menu-tab">Menu</div>
    <div class="Contact-tab">contact</div>
    `
    
    if(document.getElementById(`content`).contains(MenuDetails)){

        document.getElementById(`content`).removeChild(MenuDetails)

    }

    if(document.getElementById(`content`).contains(ContactDetails)){

        document.getElementById(`content`).removeChild(ContactDetails);


    }


  
    document.getElementById(`content`).appendChild(Heading);

    document.getElementById(`content`).appendChild(TopBar);


    document.getElementById(`content`).appendChild(MenuOrder);
    



}

