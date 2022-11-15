// function greet(username, time = "day") {
//     return;
//     // return(`Good ${time} ${username}`);
// }

// greet("Ruby");

// let greet = function (username) {
//     console.log(`Hello ${username}`);
// }

// greet("Ruby");

// let greet = (username) => {
//     console.log(`Shalom ${username}`);
// }

// const result = greet("ruby", "night");
// console.log(result)

const unorderedlistelement = document.querySelector(".shopping") //dom element

function populatelist (list) 

{
    for (let i = 0; i <list.length ; i++) 

    {
        console.log(list[i]) //for each of these items, create an li, append it to unorderedelement
        const listitemElement = document.createElement("li");
        listitemElement.textContent = list[i]
        unorderedlistelement.appendChild(listitemElement);
    } 
        
}

function squarebull (list)
{
    unorderedlistelement.classList.remove("circleList");
    unorderedlistelement.classList.add ("squarelist");

}

function updateImage()
{
    const imageElement = document.querySelector("#shoppingCart")
    console.log(imageElement)
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    imageElement.width = 100;
    imageElement.height = 100;
    imageElement.alt = "Shopping cart icon"
}


let shoppinglist = ["ham", "cheese", "bread"];

populatelist(shoppinglist);

