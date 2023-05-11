import React from 'react';
import {useEffect,useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//ddc7a669;

const API_URL = "http://www.omdbapi.com?apikey=ddc7a669";

/*const movie1= {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}*/

function App () {
  
  const [movies,setMovies] = useState([]);
  const[searchTerm,setSearchTerm] = useState('');

  const searchMovie = async (title) =>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
  
  }

  
  useEffect (() =>{
  searchMovie('SpiderMan');
    },[]);

    return(
     <div className='app'>
      <h1>MoviesDekho</h1>
      
      <div className='search'>
      
      <input placeholder='Search For Movies'
      value={searchTerm}
      onChange= {(e)=>setSearchTerm(e.target.value)}

      />
      
      <img
      src={SearchIcon}
      alt="search"
      onClick={()=>searchMovie(searchTerm)}
       
            />
      </div>

      <div>
      {
        movies?.length > 0
      ? (movies.map((movie) => (<MovieCard movie = {movie}/>)))
      :
      <div className = 'empty'>
      <h2>Np movies found</h2>
      </div>

      }
      </div>

      
     </div>
    );

}

export default App;

