package com.javaet.movies.controller;

import com.javaet.movies.entity.Review;
import com.javaet.movies.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview (@RequestBody Map<String, String> payload) {
        /*
        * payload.get içerisine koyduğum değerler ön yüzde gerçekten olan değerler
        * const response = await api.post("/api/v1/reviews", {reviewBody: rev.value, imdbId: movieId});
        * */
        return new ResponseEntity<>(reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.CREATED);
    }
}
