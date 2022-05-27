import { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=1dc19b08';

const App = ()=>{


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response .json();

    console.log(data.search);
  }

  useEffect(()=> {
    searchMovies('spiderman')
  }, [])
  return(
    <h1>App</h1>
  );
}

export default App;
