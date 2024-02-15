let scriptures;
const getScriptureDict = async () =>{
    let response = await fetch('weatherverse.json');
    let data = await response.json();
    scriptures = data;


}

getScriptureDict()

const subcategories = {
    "sunny": ["Sunny"],
    "clear": ["Clear"],
    "cloudy": ["Cloudy", "Overcast", "Partly cloudy"],
    "fog": ["Fog", "Freezing fog", "Mist"],
    "rain": ["Patchy rain possible", "Light rain", "Moderate rain", "Heavy rain", "Light rain shower", "Moderate or heavy rain shower", "Torrential rain shower", "Patchy light drizzle", "Light drizzle"],
    "snow": ["Patchy light snow", "Patchy snow possible", "Blowing snow", "Blizzard", "Light snow", "Moderate snow", "Heavy snow", "Light sleet", "Moderate or heavy sleet", "Light snow showers", "Moderate or heavy snow showers", "Light showers of ice pellets", "Moderate or heavy showers of ice pellets", "Light freezing rain", "Moderate or heavy freezing rain", "Light sleet showers", "Moderate or heavy sleet showers"],
    "thunderstorm": ["Thundery outbreaks possible", "Moderate or heavy rain with thunder", "Patchy light rain with thunder", "Moderate or heavy snow with thunder", "Patchy light snow with thunder"],
    "unknown": [] // if not matched with any category
};


let main = async (zipCode) => {
    resetScreen()
    let weather = await callWeather(zipCode);
    let category = getWeatherCategory(weather)
    setTheTheme(category);

}
let callWeather = async (zipCode) =>{
    let zip;
    if (zipCode == null){
        zip = getZip()
    }
    else{
        zip = zipCode;
    }
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e0549634366b4e43ab7160742241102&q=${zip}&aqi=no"`)
    let data = await response.json();
    let text = data.current.condition.text;
    displayWeather(text);
    return text
}

const displayWeather = weather => {
    let header = document.querySelector("#weather-header")
    let weatherSpan = document.createElement("span")
    weatherSpan.textContent = weather;
    weatherSpan.id = "current-weather";
    header.appendChild(weatherSpan);
}
const getZip = () => {
    return document.querySelector("#zipCode").value;
}
const getWeatherCategory = code => {
    for(let category in subcategories){
        if(subcategories[category].includes(code)){
            return category;
        }
    }
}

const setTheTheme = async category =>{
    switch (category) {
        case "sunny":
            document.querySelector("#scripture").textContent = await getScripture("sunny");
            break;
        case "cloudy":
            document.querySelector("#scripture").textContent = await getScripture("cloudy");
            break;
        case "rain":
            document.querySelector("#scripture").textContent = await getScripture("rain")
            break;
        case "snow":
            document.querySelector("#scripture").textContent = await getScripture("snow");
            break
        case "thunderstorm":
            document.querySelector("#scripture").textContent = await getScripture("thunderstorm");
            break;
        case "fog":
            document.querySelector("#scripture").textContent = await getScripture("fog");
            break;
        case "clear":
            document.querySelector("#scripture").textContent = await getScripture("clear");
            break;
        default:
            document.querySelector("#scripture").textContent = await getScripture("unknown");
            break;

    }
}

const getScripture = async (category) => {
    console.log(scriptures[category].length)
    let randomNumber = (Math.random() * (scriptures[category].length));
    randomNumber = (Math.floor(randomNumber))
    let scriptureSelection = scriptures[category][randomNumber];
    const url = 'https://corsproxy.io/?' + encodeURIComponent(`https://openscriptureapi.org/api/scriptures/v1/lds/en/volume/bookofmormon/${scriptureSelection.book}/${scriptureSelection.chapter}`);
    let response = await fetch(url)
    let data = await response.json();
    let verse = data.chapter.verses[scriptureSelection.verse-1].text
    document.querySelector("#scripture").style.display = "flex"

    let extendedScriptures = [];
    scriptures[category].forEach(function (reference){
        extendedScriptures.push(reference["reference"])
    })

    let scriptureList = document.querySelector("#scripture-list")
    scriptureList.style.display = "block"
    let scriptureListSpan = document.createElement("span")
    scriptureListSpan.id = "scripture-extensions"
    scriptureListSpan.innerText = `[ ${extendedScriptures.join(", ")} ]`
    scriptureList.appendChild(scriptureListSpan)
    console.log(extendedScriptures)
    return verse;


}

const resetScreen = () =>{
    if (document.querySelector("#current-weather")){
        document.querySelector("#current-weather").remove();
        document.querySelector("#scripture").style.display = "none";
        document.querySelector("#scripture-list").style.display = "none";
        document.querySelector("#scripture-extensions").remove();
    }
}
// const getWeather = async () => {
//     const response = await fetch("https://api.weatherapi.com/v1/current.json?key=e0549634366b4e43ab7160742241102&q=21157&aqi=no")
//     let data = await response.json();
//     let weather = data.current.condition.text;
//     document.querySelector("#current-weather").textContent = weather;
// }
//
// getWeather()
document.querySelector("#zipButton").addEventListener("click", function () {
    main(null)});
document.querySelector("#rexburg").addEventListener("click", function () {
    main(83440)
});