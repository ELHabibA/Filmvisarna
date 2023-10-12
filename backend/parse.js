// import { runQuery } from '../backend/classes/dbEngineSpecific/MySQLQuery.js';

// console.log('Serverkod har laddats');

// app.get("/api/movies", async (req, res) => {
//     console.log('API:et är här??');

//         const rawData = await runQuery('SELECT * FROM movies');
//         console.log(rawData); //??
//         const result = rawData.replace(/\b(\w+):/g, '"$1":').replace(/'/g, '"');
//         console.log(result); //??
//         let data = JSON.parse(rawData);
//         console.log(data); //??
//         const parsedMovies = parseDescription(result);
//         res.json(parsedMovies);
    
        
//     });
// const parseDescription = (movies) => {
//   return movies.map((movie) => {
//     const parsedDescription = JSON.parse(movie.description);
//     return { ...movie, description: parsedDescription };
//   });
// };

// export default parseDescription;