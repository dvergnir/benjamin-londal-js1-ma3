const loader = document.querySelector(".loader");
const button = document.querySelector("button");

function loading() {
    loader.classList.add("loading");
}
 
 function notLoading() {
     loader.classList.remove("loading");
}

const callThis = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=895d17560af54d70b643e49e71410c25";
const content = document.querySelector(".content");

async function makeMyCall() {

    loading()

    try {
        const response = await fetch(callThis);
        const data = await response.json();

        notLoading()

        console.log(data);
        
        const games = data.results;

        content.innerHTML = "";

        for(var i = 0; i < games.length; i++) {
            console.log(games);

            if (i === 7) {
                break;
            }

            content.innerHTML += `<div>${games[i].name}</div>`;
        }
        
        

    } catch(error) {
        console.log(error);
        content.innerHTML = "An error has occured";
    }
};

button.onclick = makeMyCall;