import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom'; //URL parametrelerini almak için kullanılan hook'u import eder.
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'
const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

        /*Yorum metin alanına referans oluşturur. 
          useRef hook'u, React'te referanslar oluşturmak için kullanılır. 
          Bu referanslar, DOM elemanlarına veya bileşenlere doğrudan erişim sağlar ve bileşen yeniden render edildiğinde bile aynı kalır. 
          Bizim kodda useRef kullanımının amacı, formdaki metin alanına (textarea) doğrudan erişim sağlamaktır.
          Metin Alanına Erişim: Yorum formundaki metin alanına doğrudan erişim sağlar.
          Mevcut Değeri Alma: Formun mevcut değerini almak ve bu değeri kullanarak API'ye istek yapmak için kullanılır.
          Değeri Temizleme: Yorum gönderildikten sonra metin alanını temizlemek için kullanılır.*/
        const revText = useRef();
        console.log("revTextInitialized: ",JSON.stringify(revText))

        /*URL parametrelerini alır. Hangi URL parametreleri? 
          App.js'de Route'a bak. 
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews = {reviews} setReviews = {setReviews}></Reviews>}></Route>
          { movieId: '123' } obje dönüyor params
          params.movieId -> 123
          Dinamik URL parametrelerini alır.
          Route içinde tanımlanan parametre adları ile eşleşir.
          Parametrelerin değerlerini bir nesne olarak döner.*/
        let params = useParams();
        const movieId = params.movieId;
        console.log("useparams: "+useParams());
        console.log("params: "+JSON.stringify(params));
        console.log("movieId: "+movieId);

        /*Bu useEffect hook'u bileşen(sayfa) yüklendiğinde ([] bağımlılık dizisi ile yalnızca bir kez) 
          getMovieData fonksiyonunu çağırır.*/
        useEffect(() => {
            getMovieData(movieId)
        },[])
        
        /*Reviews sayfasında submit butonuna bastığım anda çalışan yer.
          addReview fonksiyonu form gönderildiğinde çalışır. 
          Yeni yorumu API'ye gönderir ve başarılı olursa yorumları günceller.*/
        const addReview = async (e) =>{
            /*Bu, formun varsayılan gönderim davranışını engeller ve formun sunucuya verileri göndermeden önce asenkron bir şekilde işlenmesini sağlar. 
              Bu şekilde, formun gönderilmesi sırasında sayfanın yenilenmesi engellenir ve kullanıcı formda kalır. 
              Formun varsayılan davranışını engeller.*/
            e.preventDefault(); //Kullanmayınca birşey değişmedi.
            
            //Yorum metin alanının mevcut değerini alır.
            const rev = revText.current;

            try{
                const response = await api.post("/api/v1/reviews", {reviewBody: rev.value, imdbId: movieId});
                console.log("reviews: ",reviews);
                //Yeni yorumu mevcut yorumlara ekler.
                console.log("Undefined4: ",JSON.stringify(revText))
                console.log("Undefined5: ",JSON.stringify(revText.current))
                console.log("Undefined6: ",JSON.stringify(revText.current.value))
                const updatedReviews = [...reviews, {body: rev.value}];
                //Yorum metin alanını temizler.
                /*ReviewForm.js'de useState kullandığım için yeniden render ediliyor dolayısıyla artık burada 
                temizleme işlemi gerçekleşmiyor!*/
                //rev.value = "";
                //Yorumları günceller.
                setReviews(updatedReviews);
                revText.current.reset(); // Formu sıfırlayın
            }

            catch(err){
                console.error(err)
            }
        }     

    return (
        <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} labelText = "Write a Review?" defaultValue = "What are your thoughts about the movie?" ref={revText}/>  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
    )
}
export default Reviews