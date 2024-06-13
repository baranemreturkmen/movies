package com.javaet.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    /*
    * @Id Anotasyonu: Bu anotasyon, id alanının MongoDB'deki _id alanı ile eşleştirilmesini sağlar.
      ObjectId Nesnesi: MongoDB, her belgeye benzersiz bir ObjectId oluşturur ve bu nesne oluşturulma zamanını içerir.
      Ön Yüzde Görünen Bilgiler: Ön yüzde görünen date ve timestamp bilgileri, ObjectId nesnesinin oluşturulma zamanını yansıtır.
      Yani bu değerler OnjectId nesnesinden geliyor.
    * */
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference
    private List<Review> reviewIds;
}
