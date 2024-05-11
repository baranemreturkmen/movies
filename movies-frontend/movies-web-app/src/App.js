import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home"
import './App.css';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    
    try{
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }
    
    catch(err){
      console.log(err);
    }

  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;
        console.log("App.js, SingleMovie Log: ",singleMovie)
        console.log("App.js, SingleMovie reviewIds Log: ",singleMovie.reviewIds)
        setMovie(singleMovie);

        setReviews(singleMovie.reviewIds);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home movies={movies}></Home>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer></Trailer>}></Route>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews = {reviews} setReviews = {setReviews}></Reviews>}></Route>
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
