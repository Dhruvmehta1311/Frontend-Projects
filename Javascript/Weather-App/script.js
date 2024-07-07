const button = document.querySelector("#searchButton")
const input = document.querySelector("#city-input")

const cityName = document.querySelector("#cityName")
const cityTime = document.querySelector("#cityTime")
const cityTemp = document.querySelector("#cityTemp")





async function getData(cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=bb67028a000e4415a29152611240703&q=${cityName}&aqi=yes`);
    return await promise.json();
};

button.addEventListener('click', async (e) => {
    e.preventDefault

    const value = input.value;
    // localStorage.setItem('name', value)
    const result = await getData(value)
    

    const innerTextType = `${result.location.name}, ${result.location.region} - ${result.location.country}`

    const basicInfo = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityName.innerText = basicInfo

    // Local Storage for City name & All

    localStorage.setItem("cityName", basicInfo)





    // Local Storage Date Time

    const myCityTime =  result.location.localtime
    cityTime.innerText = myCityTime
    localStorage.setItem('cityTime', myCityTime)


    cityInnerTemp = `${result.current.temp_c}°C`
    cityTemp.innerText = cityInnerTemp
    localStorage.setItem('temp', cityInnerTemp)

})

window.addEventListener('load', () => {
    const value = localStorage.getItem("name")
    cityName.innerText = value
})

window.addEventListener('load', () => {
    const value = localStorage.getItem('temp')
    cityTemp.innerText = value
})

window.addEventListener('load', () => {
    const value = localStorage.getItem('cityName')
    cityName.innerText = value
})
window.addEventListener('load', () => {
    const value = localStorage.getItem('cityTime')
    cityTime.innerText = value
})

