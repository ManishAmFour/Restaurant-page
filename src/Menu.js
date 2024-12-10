
import { Heading , MenuOrder } from "./Home";

import { ContactDetails } from "./ContactInfo.js";

import Panner from "./paneer.jpg"

import Bread from "./hq720.jpg"

import aalo from "./aloo-gobi.jpg"

export let MenuDetails;


export function MenuOrderDetail(){

console.log(`Menu-Tab`)

MenuDetails = document.createElement("div");

MenuDetails.innerHTML = `<div class="First-Food">
<img class="food-photos" src="${Panner}">
Shahi Paneer
</div>
<div>
<img class="food-photos" src="${Bread}">
Bread Omelette
</div>
<div>
<img class="food-photos" src="${aalo}">
Aalo gobhi ki sabji
</div>`

MenuDetails.classList.add(`menu-details`)

console.log(MenuDetails)
document.getElementById(`content`).appendChild(MenuDetails)
if(document.getElementById(`content`).contains(Heading)){
document.getElementById(`content`).removeChild(Heading)}

if(document.getElementById(`content`).contains(MenuOrder)){
document.getElementById(`content`).removeChild(MenuOrder)}

if(document.getElementById(`content`).contains(ContactDetails)){
document.getElementById(`content`).removeChild(ContactDetails)
}




}

