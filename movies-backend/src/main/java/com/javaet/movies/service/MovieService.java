package com.javaet.movies.service;

import com.javaet.movies.entity.Movie;
import com.javaet.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }
}
