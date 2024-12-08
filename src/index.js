import "./styles.css";

let Heading = document.createElement("div");
let TopBar = document.createElement("div");
let MenuOrder = document.createElement("div");

Heading.innerHTML = `<div class="Heading">Big Balls Restaurant</div>`
MenuOrder.innerHTML = `    <div>
        <img class="food" src="shahi-paneer-recipe.jpg">
         Shahi Paneer
    </div>
    <div>
        <img class="food" src="4-1.jpg">

        Dal Makhani
    </div>
    <div>
        <img class="food" src="Baingan-Bharta.jpg">

        Baigan Ka bharta
    </div>
    <div>
        <img class="food" src="aloo-gobi.jpg">

        Aalo Gobhi
    </div>
    <div>
        <img class="food" src="egg-curry-recipe.jpg">

        Anda curry
    </div>
    <div>
        <img class="food" src="hq">

        Bread omellete
    </div>
`

MenuOrder.classList.add(`menu-order`)
TopBar.classList.add(`top-bar`)

TopBar.innerHTML = `
<div>Menu</div>
<div>Take Outs</div>
<div>contact info</div>
`


document.getElementById(`content`).appendChild(Heading);

document.getElementById(`content`).appendChild(TopBar);
document.getElementById(`content`).appendChild(MenuOrder);



