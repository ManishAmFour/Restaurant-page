
import { MenuDetails } from "./Menu.js";


import { ContactDetails } from "./ContactInfo.js";

export let Heading;
export let MenuOrder;

export default function MenuFunction(){
    
   Heading = document.createElement("div");
     MenuOrder = document.createElement("div");
    
    Heading.innerHTML = `<div class="Heading">Restaurant</div>`
   MenuOrder.innerHTML = `<div class="Home-Text" >Welcome To our Home Page Please Enjoy</div>`
    
    MenuOrder.classList.add(`menu-order`)
    
    
    
    if(document.getElementById(`content`).contains(MenuDetails)){

        document.getElementById(`content`).removeChild(MenuDetails)

    }

    if(document.getElementById(`content`).contains(ContactDetails)){

        document.getElementById(`content`).removeChild(ContactDetails);


    }



    document.getElementById(`content`).appendChild(Heading)




    document.getElementById(`content`).appendChild(MenuOrder)


  


}

