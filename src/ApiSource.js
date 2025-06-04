async function fetchMovies() {
    const url = await fetch('https://imdb236.p.rapidapi.com/api/imdb/top250-movies')
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': "f3885317c5mshd807b3743b809a5p191acdjsn95d3a11b39d5",
            'x-rapidapi-host': "imdb236.p.rapidapi.com"} 
    }
    const data = await (res.json)
    return(data)


}

fetchMovies()
console.log("test")