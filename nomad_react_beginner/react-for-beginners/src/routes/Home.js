import { useState, useEffect } from "react";
import Movie from "../components/Movie";


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovie] = useState([]);
  
    const getMovies = async() => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )).json();
  
      setMovie(json.data.movies);
      setLoading(false);
    }
  
  
    useEffect(()=> {
     getMovies()
    }, []);
  
    console.log(movies);
  
  
    // useEffect(()=> {
    //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    //   .then((response)=>response.json())
    //   .then((json) => {setMovie(json.data.movies); setLoading(false)});
    // }, []);
  
    return ( 
    <div>
      {loading ? <h1>Loading ...</h1> : 
      movies.map((movie)=>
                        <Movie 
                        key={movie.id} 
                        medium_cover_image={movie.medium_cover_image} 
                        title={movie.title} 
                        summary={movie.summary} 
                        genres={movie.genres} />
      //   <div key={movie.id}>
      //     <img src={movie.medium_cover_image} />
      //     <h2>{movie.title}</h2>
      //     <p>{movie.summary}</p>
      //     <ul>
      //         {movie.genres.map((g)=> (
      //         <li key={g}>{g}</li>
      //         ))}
      //     </ul>
      //     <hr />
      //   </div>
      )
      }
    </div>
    
    );
}
