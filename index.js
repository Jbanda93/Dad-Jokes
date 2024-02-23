const getDadJokes = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await fetch("https://icanhazdadjoke.com/", config);
        const data = await res.json();
        joke(data)

    } catch (e) {
        return "No jokes Available. There may not have been an internet connection."
    }
}


const joke = (data) => {
    const jokeText = data.joke
    const selectJoke = document.querySelector("#joke")
    selectJoke.innerText = jokeText
}

getDadJokes()
