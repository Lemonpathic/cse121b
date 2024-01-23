/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Bryan Wilson";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/1698700189209.jpg';
let altProfilePicture = 'images/placeholder.png';

let singleFood = 'Chicken Legs';
let foodArray = ['Chicken', 'Chicken Tenders', 'Chicken Nuggies', "Chicken Fingers", "Chicken Wings", "Chicken Breast"];




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const profileElement = document.getElementById("home").querySelector("picture").querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
profileElement.setAttribute('src', profilePicture);
profileElement.setAttribute('alt', altProfilePicture);
foodElement.innerText = `${foodArray.join(", ")} \n`;
foodArray.push(singleFood);
foodElement.innerText += `${foodArray.join(", ")} \n`;
foodArray.shift();
foodElement.innerText += `${foodArray.join(", ")} \n`;
foodArray.pop();
foodElement.innerText += `${foodArray.join(", ")} \n`;






/* Step 5 - Array */






