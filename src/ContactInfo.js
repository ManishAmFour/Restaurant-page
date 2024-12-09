import { Heading , MenuOrder } from "./Home";
import  {MenuDetails}  from "./Menu.js";

export let ContactDetails;

export function Contact(){

    console.log(`Contact-Tab`)


ContactDetails = document.createElement("div");

ContactDetails.innerHTML = `<div>Random ASS TEXT</div>`;

ContactDetails.classList.add(`contact-details`);



document.getElementById(`content`).appendChild(ContactDetails);

if(document.getElementById(`content`).contains(Heading)){
document.getElementById(`content`).removeChild(Heading)}

if(document.getElementById(`content`).contains(MenuOrder)){
document.getElementById(`content`).removeChild(MenuOrder)}

if(document.getElementById(`content`).contains(MenuDetails)){

    document.getElementById(`content`).removeChild(MenuDetails)


}
}