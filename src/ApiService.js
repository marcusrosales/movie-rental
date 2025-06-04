export function fetchData() {
  return fetch('https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f3885317c5mshd807b3743b809a5p191acdjsn95d3a11b39d5',
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  })
  .then(res => res.json())
  .then(data => {
    const top3Movies = data.slice(0,3).map(movie => {
      const { primaryTitle } = movie; // fix here: movie, not movies
      return { primaryTitle };
    });
    return top3Movies; // return inside the .then() chain
  });
}


fetchData().then(movies => 
    
    for 

    console.log(movies));


