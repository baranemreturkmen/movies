package com.javaet.movies.service;

import com.javaet.movies.entity.Movie;
import com.javaet.movies.entity.Review;
import com.javaet.movies.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    /*Bu metod hem database'e kayıt atıyor hem de attığı kaydı önyüze yansıtmak için geri değer dönüyor.
    * Review ekleme butonuna ön yüzden bastığım zaman database'e review'u ekler eklemez ön yüze eklenen review
    * dönülüyor mantıklı olan da bu.*/
    public Review createReview(String reviewBody, String imdbId) {
        System.out.println("ReviewBody: "+reviewBody);

        //reviewRepository'yi kullanarak yeni bir Review nesnesi oluşturur ve veritabanına ekler.
        Review review = reviewRepository.insert(new Review(reviewBody));

        /*
          mongoTemplate: MongoDB ile etkileşime geçmek için kullanılan bir nesnedir.
          update(Movie.class): Movie sınıfına ait belgeleri güncellemek için başlatılır.
          matching(Criteria.where("imdbId").is(imdbId)): Güncellenecek filmi imdbId alanına göre seçer.
          apply(new Update().push("reviewIds").value(review)): Seçilen filmin reviewIds alanına yeni review nesnesini ekler (push eder).
          first(): İlk eşleşen belgeyi günceller.
        */
        mongoTemplate
        .update(Movie.class)
        .matching(Criteria.where("imdbId").is(imdbId))
        .apply(new Update()
        .push("reviewIds").value(review))
        .first();

        return review;
    }
}
