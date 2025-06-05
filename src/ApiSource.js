


export async function fetchMovies() {
    const url = ('https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies')
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': "f3885317c5mshd807b3743b809a5p191acdjsn95d3a11b39d5",
            'x-rapidapi-host': "imdb236.p.rapidapi.com"} 
    }

    try {
        const repsone = await fetch(url,options)
        const result = await repsone.json();
        const movies = result.slice(0,1)
        
        const movie_array = []

        for(let movieIndex = 0; movieIndex < 3; movieIndex++){
            //console.log(result[movieIndex].primaryTitle)
            movie_array.push(result[movieIndex].primaryImage)}
        return(console.log(movie_array)) 

    } catch(error) {
        console.log(error)}};



export default fetchMovies   