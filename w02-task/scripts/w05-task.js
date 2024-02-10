/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(function(temple){
        console.log(temple)
        let article = document.createElement("article");

        let header = document.createElement("h3");
        header.textContent = temple.templeName;

        let image = document.createElement("img")
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(header);
        article.appendChild(image);

        templesElement.appendChild(article);
    })
}


/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();
    displayTemples(templeList)
}
/* reset Function */
const reset = () =>{
    let articles = templesElement.querySelectorAll("article");
    articles.forEach(function (element){
        element.remove();
    })
}

/* filterTemples Function */
const filterTemples = () =>{
    reset();
    switch (filter.value){
        case "utah":
            const utahTemples = templeList.filter(function(temple) {
                return temple.location.includes("Utah");
            });
            displayTemples(utahTemples);
            break;

        case "notutah":
            const notUtahTemples = templeList.filter(function(temple) {
                return !temple.location.includes("Utah");
            });
            displayTemples(notUtahTemples);
            break;

        case "older":
            const olderTemples = () =>{
                let olderTempleList = [];
                templeList.forEach(function(temple){

                    const partsOfDate = temple.dedicated.split(', ');
                    const year = parseInt(partsOfDate[0]);

                    if(year < 1950){
                        olderTempleList.push(temple);
                    }


                })
                return olderTempleList;
            }
            displayTemples(olderTemples());
            break;

        case "all":
            displayTemples(templeList)
            break;
        default:
            console.log("you broke me")
            break;
    }

}


getTemples();

/* Event Listener */
const filter = document.querySelector("#filtered")
filter.addEventListener("change", () => {filterTemples()})