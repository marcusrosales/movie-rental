
export async function fetchMovies() {
    const url = ('//')
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': "//",
            'x-rapidapi-host': "//"} }

    try {
        const repsone = await fetch(url,options)
        const result = await repsone.json();
        const movies = result.slice(0,1)
        
        const movie_array = []

        for(let movieIndex = 0; movieIndex < 3; movieIndex++){
            //console.log(result[movieIndex].primaryTitle)
            movie_array.push(result[movieIndex].primaryImage)}
        return(movie_array) 

    } catch(error) {
        console.log(error)}};



export default fetchMovies   