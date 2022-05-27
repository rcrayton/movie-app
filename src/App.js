import { useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=1dc19b08';

const App = ()=>{
  return(


    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response .json();

      console.log(data.search);
    }

    useEffect(()=> {
      searchMovies('spiderman')
    }, [])
    <h1>App</h1>
  );
}

export default App;
