import {useParams} from 'react-router-dom'; //useParams: react-router-dom kütüphanesinden gelen bir hook'tur. URL parametrelerini almayı sağlar.
import ReactPlayer from 'react-player';//ReactPlayer: react-player kütüphanesinden gelen bir bileşendir. Bu, çeşitli video oynatıcıları kapsayan bir bileşendir.
import './Trailer.css';

import React from 'react';

const Trailer = () => {

    let params = useParams();
    /*App.js'de router'da Trailer bileşeni için path olarak bunu vermiştik. path="/Trailer/:ytTrailerId"*/
    const key = params.ytTrailerId;
    console.log("ytTrailerId: ",key)

  return (
    <div className="react-player-container">
        {/*{(key != null) ? ... : null}: Eğer key null değilse, ReactPlayer bileşenini render eder; 
        aksi takdirde null döner (yani hiçbir şey render etmez).*/}
        {/*controls={true}: Video oynatıcısında kontrol düğmelerini gösterir.
               controls parametresine true'da versem false'da versem tarayıcı varsayılanlarından dolayı
               kullanıcı her türlü video kontrol parametrelerine erişebilir bu duruma dikkat etmek lazım
               eğer kullanıcıya video üzerinde kontrol vermek istemiyorsak.
               playing={true}: Videonun otomatik olarak oynatılmasını sağlar.
               url={https://www.youtube.com/watch?v=${key}`}`: YouTube video URL'sini ayarlar. key parametresi URL'ye dinamik olarak eklenir.
               width='100%': Video oynatıcısının genişliğini %100 yapar.
               height='100%': Video oynatıcısının yüksekliğini %100 yapar.*/}
        {(key!=null)?
        <ReactPlayer 
            controls="true" 
            playing={true} 
            url ={`https://www.youtube.com/watch?v=${key}`}
            width='100%'
            height='100%'></ReactPlayer>:null}
    </div>
  )
}

export default Trailer