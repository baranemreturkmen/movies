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
      const response = await api.get("/api/v1/movies"); //backend'de istek atmak istediğim adres, /api/v1/movies
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
        const response = await api.get(`/api/v1/movies/${movieId}`); //backend'de ${movieId} -> /{imdbId}'ye karşılık geliyor.

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
  },[]) //[] sadece ilk render anında useEffect'in çalışması için var. 2. parametre olarak [] olmazsa eğer bu useEffect sürekli çalışır!
        //İhityacımız bu şekilde olduğu için şuan bu kullanım var. Başka bir sayfa da lk render anında değilde sürekli birşeylerin değişip değişmediğini takip etmek isteseydim.
        //bu kullanım değişecekti. Mesela 2. [] olmasaydı eğer getMovies her çağrıldığında bu useEffect'de çalışacaktı. Backend'e attığım her istekte useEffect içerisinde 
        //bişeyleri değiştirmek yada kontrol etmek isteseydim eğer 2. parametreyi kullanmazdım.

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home movies={movies}></Home>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer></Trailer>}></Route> 
          {/* ytTrailerId, params.ytTrailerId ile Trailer sayfasında url'de ki unique id'yi alıyorum ve kullanıyorum. Tüm bu işi Rouete yapıyor.*/}
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews = {reviews} setReviews = {setReviews}></Reviews>}></Route>
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
