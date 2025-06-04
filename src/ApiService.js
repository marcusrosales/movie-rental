
export function fetchData() {
fetch('https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies', {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f3885317c5mshd807b3743b809a5p191acdjsn95d3a11b39d5',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
   }
 })


 
 .then(res=>res.json())
 .then(dataaaaa=> {const top3Movies = dataaaaa.slice(0,3).map(movie =>{const {
        primaryTitle, startYear, averageRating,
        primaryImage, description, budget,
    } = movie;
    return {primaryTitle,startYear,averageRating,primaryImage,description,budget}})
    
    console.log(top3Movies)

 });

}
