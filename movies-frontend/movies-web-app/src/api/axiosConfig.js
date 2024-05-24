import axios from 'axios';

/*Axios, HTTP istekleri yapmak için kullanılan bir kütüphanedir. 
  axios.create() metodu, Axios'un bir örneğini oluşturur ve bu örnek, 
  özelleştirilmiş varsayılan ayarlarla yapılandırılabilir. 
  Bu, uygulamanızda tekrar tekrar kullanmak üzere önceden yapılandırılmış 
  bir HTTP istemcisi oluşturmanıza olanak tanır.*/

export default axios.create({
    //axiosInstance.get('/users') çağrıldığında, bu istek http://localhost:8080/users adresine yapılır.
    baseURL: 'http://localhost:8080/',
    /*headers, tüm istekler için ek HTTP başlıklarını belirtir. 
      Burada özel bir başlık olan "ngrok-skip-browser-warning" ayarlanmış.
      "ngrok-skip-browser-warning": "true": Bu başlık, özellikle ngrok kullanıyorsanız önemlidir. 
      Ngrok, yerel geliştirme sunucunuzu genel internet üzerinden erişilebilir hale getiren bir araçtır. 
      Ngrok kullanırken bazen tarayıcı uyarıları veya ekranda rahatsız edici uyarılar alabilirsiniz. 
      Bu başlık, ngrok'un bazı tarayıcı uyarılarını atlamasına yardımcı olur.*/
    headers: {"ngrok-skip-browser-warning": "true"}
})