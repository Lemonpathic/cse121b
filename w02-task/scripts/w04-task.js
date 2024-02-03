/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Bryan Wilson",
    photo: "images/1698700189209.jpg",
    favoriteFoods: ["Chicken", "Chicke Peas", "Chicken Noodle Soup", "Chicken Nugs"],
    hobbies: ["Cooking Chicken", "Eating Chicken", "Frying Chicken", "Anything with good chicken"],
    placesLived: []

}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Arcadia, CA",
    length: "2 Years"
},{
    place: "Severn, MD",
    length: "10 Years"
},{
    place: "Westminster, MD",
    length: "7 Years"
    },{
    place: "Rexburg, ID",
    length: "1 Year"
    }
    );


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
const foodList = document.querySelector("#favorite-foods");

myProfile.favoriteFoods.forEach(function (food){
    let newElement = document.createElement("li");
    newElement.textContent = food;

    foodList.appendChild(newElement);
});

/* Hobbies List */
const hobbyList = document.querySelector("#hobbies")

myProfile.hobbies.forEach(function(hobby){
    let element = document.createElement("li");
    element.textContent = hobby;

    hobbyList.appendChild(element);

})


/* Places Lived DataList */

const placesLivedList = document.querySelector("#places-lived");

myProfile.placesLived.forEach(function (place){
    let element1 = document.createElement("dt");
    element1.textContent = place.place;

    let element2 = document.createElement("dd");
    element2.textContent = place.length;

    placesLivedList.appendChild(element1);
    placesLivedList.appendChild(element2);
})
