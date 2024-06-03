import React from 'react';
import ReactDOM from 'react-dom/client'; //react-dom/client ile React 18'deki yeni API'yi kullanır.
import './index.css'; //Uygulamanın genel stillerini içeren CSS dosyasını import eder. Bu dosya, uygulamanın tümünde geçerli olan stilleri içerir.
import App from './App'; //App bileşenini import eder. App bileşeni, uygulamanın ana bileşenidir ve diğer bileşenleri içerir.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Bootstrap kütüphanesi
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Bu bileşenler, uygulamanın yönlendirme (routing) işlemlerini yönetmek için kullanılır.

/*ReactDOM.createRoot ile React uygulaması için bir root DOM elemanı oluşturur. Bu, React 18'in yeni kök oluşturma API'sini kullanır.
document.getElementById('root') ifadesi, HTML belgesinde id'si root olan DOM elemanını seçer. 
Bu, React uygulamasının render edileceği yerin başlangıç noktasıdır.*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/*root.render ifadesi, root DOM elemanına React bileşenlerini render eder.
<React.StrictMode>: Uygulamayı katı modda (strict mode) çalıştırır. Bu, uygulamanın potansiyel sorunları erken tespit etmesine yardımcı olur ve geliştiriciye uyarılar verir.
<BrowserRouter>: Uygulamayı tarayıcı tabanlı bir router ile sarmalar. Bu, tarayıcıdaki URL'lere göre bileşenleri yönlendirmeyi sağlar.
<Routes>: Tüm rotaları (routes) tanımlar. Birden fazla Route bileşeni içerebilir.
<Route path="/*" element={<App />}></Route>: Belirli bir rota tanımlar. path="/*" ifadesi, her türlü URL ile eşleşen bir wildcard rotasıdır. 
element={<App />} ifadesi, bu rotayla eşleştiğinde render edilecek bileşeni belirtir.*/
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);