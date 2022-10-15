
async function getMoney(){
    let div = document.querySelector("#coinList");
    // console.log("Hello");
    // create a variable to store variable collected from api
    var responseFromApi = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    // need to convert information to json (format computer understands)
    var coinData = await responseFromApi.json();
    console.log(coinData);

    // for each copin want to prepare paragraph tag
    for(let i = 0; i<coinData.length; i++){
        // console.log(coinData[i])
        // store current coin we are in in array into a variable
        let currentCoin = coinData[i];
        // create a paragraph tag
        let pTag = document.createElement("p");
        // fill the paragraph tag with the current coin's name
        pTag.innerText = currentCoin.name + "-" + currentCoin.current_price;

        // add a css tag to the Ptag
        pTag.classList.add("coin")

        // put the paragraph tag inside the div called coinList
        div.appendChild(pTag)
        

        // console.log(pTag);

        
    }


}