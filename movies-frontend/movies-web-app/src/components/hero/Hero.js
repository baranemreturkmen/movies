import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import './Hero.css'
// FontAwesome'dan ikon bileşenlerini ve belirli bir ikonu (faCirclePlay) içe aktarır.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
//Link ve useNavigate bileşenlerini içe aktarır. Bu, sayfalar arasında gezinme işlevselliğini sağlar.
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {
    console.log(movies)

    //useNavigate: react-router-dom'dan gelen bu hook, programatik olarak gezinmeyi sağlar.
    const navigate = useNavigate();

    function reviews(movieId)
    {
        //movieId parametresini alır ve navigate fonksiyonu ile /Reviews/${movieId} rotasına yönlendirir.
        navigate(`/Reviews/${movieId}`)
    }

  return (
    //className ='movie-carousel-container'
    //Ana konteyner div.
    <div>
        {/*bir film verisi listesi (movies) alarak bir Carousel (slayt gösterisi) oluşturur.*/}
        <Carousel>
            {
                //movies?.map((movie) => { ... }): movies listesini iterasyon yapar ve her movie öğesi için bir Paper bileşeni oluşturur.
                movies?.map((movie) => {
                    return(
                        //Her bir film için bir Paper bileşeni oluşturur ve movie.imdbId'yi anahtar olarak kullanır.
                        <Paper key={movie.imdbId}>
                            <div className = 'movie-card-container'>
                                {/*style prop'u ile arka plan görüntüsünü dinamik olarak ayarlar. 
                                 Burada mongo db database'de backdrops alanından geliyor fotolar. */}
                                <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            {/*<img> etiketindeki alt (alternative text) özelliği, bir resmin yüklenemediği veya görüntülenemediği durumlarda kullanıcıya gösterilecek alternatif metni tanımlar. */}
                                            <img src={movie.poster} alt=""></img>
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className='movie-buttons-container'>
                                            {/*Trailer sayfasına yönlendiren link.
                                               Bu kod bloğunda substring fonksiyonu ve -11 değeri, movie.trailerLink'in son 11 karakterini almak için kullanılmıştır. 
                                               Bu genellikle YouTube video kimliğini (video ID) elde etmek için yapılır, çünkü YouTube video bağlantılarında video 
                                               ID'si URL'nin son kısmında yer alır. 
                                               trailerLink.length = 43
                                               trailerLink.length - 11 = 32 substring 32'den 43'e kadar olan son kısımı alacak.*/}
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length -11)}`}>
                                            {/*className="play-button-icon-container"*/}
                                            <div>
                                                {/*Oynat ikonu.*/}
                                                <FontAwesomeIcon className="play-button-icon"
                                                        icon={faCirclePlay}
                                                ></FontAwesomeIcon>
                                            </div>
                                            </Link>
                                            {/*İnceleme sayfasına yönlendiren buton, reviews fonksiyonunu çağırır.*/}
                                            <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={ () => reviews(movie.imdbId)} >Reviews</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero