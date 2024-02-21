const cities = [];
document.querySelector("#addCityButton").addEventListener("click", function () {
    let city = prompt("Unesite ime grada i temperaturu");
    city = city.split(" ");
    const temporaryObject = {
        name: city[0],
        temperature: city[1],
    }
    cities.push(temporaryObject);
});
document.querySelector("#showWarmCityButton").addEventListener("click", function () {
    document.querySelector("#warmCityHolder").innerHTML = "";
    for (const city in cities) {
        if (cities[city]["temperature"] >= 12) {
            const weatherParagraph = document.createElement("p");
            const weatherObject = cities[city];
            weatherParagraph.append(weatherObject["name"] + " " + weatherObject["temperature"]);
            weatherParagraph.classList.add("colorRed");
            document.querySelector("#warmCityHolder").append(weatherParagraph);
        }
    }
});
document.querySelector("#showColdCityButton").addEventListener("click", function () {
    document.querySelector("#coldCityHolder").innerHTML = "";
    for (const city in cities) {
        if (cities[city]["temperature"] < 12) {
            const weatherParagraph = document.createElement("p");
            const weatherObject = cities[city];
            weatherParagraph.append(weatherObject["name"] + " " + weatherObject["temperature"]);
            weatherParagraph.classList.add("colorBlue");
            document.querySelector("#coldCityHolder").append(weatherParagraph);
        }
    }
});
