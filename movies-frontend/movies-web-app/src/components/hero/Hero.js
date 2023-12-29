import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import './Hero.css'

const Hero = ({movies}) => {
    console.log(movies)
  return (
    <div>
        <Carousel>
            {
                movies?.map((movie) => {
                    return(
                        <Paper>
                            <div className = 'movie-card-container'>
                                <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt=""></img>
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
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