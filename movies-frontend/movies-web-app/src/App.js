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

  //Bu istek aslında ana sayfada (home) çıkan tüm filmler için.
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

  //Ana sayfa dışındaki reviews sayfasına hazırlık.
  //Reviews sayfasına gidildiği zaman daha önceden girilmiş tüm review'lar bu sayede ön yüzde görünüyor.
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
      {/*Header'ın yeri önemli. Routes altında alırsam eğer route ettiğim sayfaların altında düşüyor, altında renderlanıyor!*/}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home movies={movies}></Home>}></Route>
          {/* ytTrailerId, params.ytTrailerId ile Trailer sayfasında url'de ki unique id'yi alıyorum ve kullanıyorum. Tüm bu işi Rouete yapıyor.*/}
          <Route path="/Trailer/:ytTrailerId" element={<Trailer></Trailer>}></Route> 
          {/*ÖNEMLİ:
             getMovieData prop'una metod olan getMovieData direk geçildi çünkü Review.js sayfası içerinde bu metod kullanılıyor.
             Review.js içerisinde useEffect kullanılıyor. Satfa ilk açılığında useEffect çalışıyor ve burada kullandığım getMovieData
             metodunu çağırıyor bu metod içerisinde de zaten Review.js için hazırlık yapıyoruz.*/}
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews = {reviews} setReviews = {setReviews}></Reviews>}></Route>
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
