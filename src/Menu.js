
import { Heading , MenuOrder } from "./Home";

import { ContactDetails } from "./ContactInfo.js";

export let MenuDetails;

export function MenuOrderDetail(){

console.log(`Menu-Tab`)

MenuDetails = document.createElement("div");

MenuDetails.innerHTML = `<div>Food number 1</div><div>Food number 1</div><div>Food number 1</div><div>Food number 1</div><div>Food number 1</div><div>Food number 1</div>`

document.getElementById(`content`).appendChild(MenuDetails)

if(document.getElementById(`content`).contains(Heading)){
document.getElementById(`content`).removeChild(Heading)}


if(document.getElementById(`content`).contains(MenuOrder)){
document.getElementById(`content`).removeChild(MenuOrder)}

if(document.getElementById(`content`).contains(ContactDetails)){
document.getElementById(`content`).removeChild(ContactDetails)
}




}

