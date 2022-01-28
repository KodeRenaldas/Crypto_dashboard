fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("description").textContent = data.description
    })
    .catch(err => {
        document.body.style.backgroundColor="black"
        document.getElementById("description").textContent = "Could not get the description of the image"
    })
fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
        if (!res.ok) {
            throw Error ("Could not get coins")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top1").innerHTML += `
        <img src=${data.image.small} />
        <span>${data.name}</span>`
        document.getElementById("crypto1").innerHTML += `
        <p id="updateCryptoEC">Current: ${data.market_data.current_price.nok}Kr</p>
        <p id="updateCryptoEH">High: ${data.market_data.high_24h.nok}Kr</p>
        <p id="updateCryptoEL">Low: ${data.market_data.low_24h.nok}Kr</p>`
        function updateCrypto() {
            document.getElementById("updateCryptoEC").innerHTML = `Current: ${data.market_data.current_price.nok}Kr`
            document.getElementById("updateCryptoEH").innerHTML = `High: ${data.market_data.high_24h.nok}Kr`
            document.getElementById("updateCryptoEL").innerHTML = `Low: ${data.market_data.low_24h.nok}Kr`
        }
        setInterval(updateCrypto, 10000)
    })
    .catch(err => console.error(err))
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error ("Could not get coins")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top2").innerHTML += `
        <img src=${data.image.small} />
        <span>${data.name}</span>`
        document.getElementById("crypto2").innerHTML += `
        <p id="updateCryptoBC">Current: ${data.market_data.current_price.nok}Kr</p>
        <p id="updateCryptoBH">High: ${data.market_data.high_24h.nok}Kr</p>
        <p id="updateCryptoBL">Low: ${data.market_data.low_24h.nok}Kr</p>`
        function updateCrypto() {
            document.getElementById("updateCryptoBC").innerHTML = `Current: ${data.market_data.current_price.nok}Kr`
            document.getElementById("updateCryptoBH").innerHTML = `High: ${data.market_data.high_24h.nok}Kr`
            document.getElementById("updateCryptoBL").innerHTML = `Low: ${data.market_data.low_24h.nok}Kr`
        }
        setInterval(updateCrypto, 10000)
    })
    .catch(err => console.error(err))

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error ("Could not get coins")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top3").innerHTML += `
        <img src=${data.image.small} />
        <span>${data.name}</span>`
        document.getElementById("crypto3").innerHTML += `
        <p id="updateCryptoDC">Current: ${data.market_data.current_price.nok}Kr</p>
        <p id="updateCryptoDH">High: ${data.market_data.high_24h.nok}Kr</p>
        <p id="updateCryptoDL">Low: ${data.market_data.low_24h.nok}Kr</p>`
        function updateCrypto() {
            document.getElementById("updateCryptoDC").innerHTML = `Current: ${data.market_data.current_price.nok}Kr`
            document.getElementById("updateCryptoDH").innerHTML = `High: ${data.market_data.high_24h.nok}Kr`
            document.getElementById("updateCryptoDL").innerHTML = `Low: ${data.market_data.low_24h.nok}Kr`
        }
        setInterval(updateCrypto, 10000)
    })
    .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("nor", {timeStyle: "short"})
}
setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});