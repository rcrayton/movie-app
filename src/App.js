import { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=1dc19b08';

const App = ()=>{

  const movie2 ={
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(()=> {
    searchMovies('spiderman')
  }, [])
  return(
    <div className='app'>
      <h1>Movie World</h1>
    <div className='search'>
      <input placeholder="What do you want to watch?" value="Spiderman" onChange={()=>{}}
        />
        <img src={SearchIcon} alt="search" onClick={()=>{}}/>
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie2.Year}</p>
          </div>

          <div>
            <img src={movie2.Poster !== 'N/A' ? movie2.Poster : 'http://via.placeholder.com/400'} alt={movie2.Title}/>
          </div>
          <div>
            <span>{movie2.Type}</span>
            <h3>{movie2.Title}</h3>
          </div>
        </div>
      </div>
     </div>
  );
}

export default App;
