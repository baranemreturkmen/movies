import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/*Navbar genişliğini sayfaya göre dengeliyor. Navbar içerisinde ki butonların görüntüsü dengeleniyor böylece*/}
      <Container fluid>
        <Navbar.Brand href="/" style={{"color":"gold"}}>
          {/*icon FontAwesome ikonu olan faVideoSlash kullanılarak bir video slash simgesi ekler.*/}
          <FontAwesomeIcon icon={faVideoSlash} className="me-2"></FontAwesomeIcon>
          Gold
        </Navbar.Brand>
        {/*Küçük ekranlarda Navbar'ı genişletip daraltmak için bir buton ekler.*/}
        <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
        {/*Navbar'ın daraltıldığında içeriğinin nasıl davranacağını tanımlar.*/}
        <Navbar.Collapse id="navbarScroll">
          {/*Navigasyon linklerini içeren Nav bileşeni.
            className='me-auto my-2 my-lg-0': Bootstrap sınıfları kullanılarak kenar boşlukları ayarlanır.
            style={{maxHeight: '100px'}}: Yüksekliği 100px ile sınırlar.
            navbarScroll: Navbar içinde kaydırılabilir içerik sağlar.
            me-auto: Öğeyi yatay eksende mümkün olduğunca sağa veya sola iter (margin-end: auto).
            my-2: Küçük ekranlarda dikey yönde (üst ve alt) 8 piksel margin ekler.
            my-lg-0: Büyük ekranlarda dikey yönde (üst ve alt) margin'i sıfırlar (margin: 0).
             Nav bileşeni küçük ekranlarda üst ve alt boşluklara sahip olurken, büyük ekranlarda 
             bu boşluklar kaldırılır ve Nav bileşeni mümkün olduğunca sağa itilmiş olur. 
             Bu, duyarlı (responsive) bir tasarım elde etmek için kullanılır.*/}
          <Nav className='me-auto my-2 my-lg-0' style={{maxHeight: '100px'}} navbarScroll>
            {/*className = "nav-link": Bootstrap sınıfı kullanarak stil verir.*/}
            <NavLink className = "nav-link" to="/">Home</NavLink>
            <NavLink className = "nav-link" to="/watchList">Watch List</NavLink>
          </Nav>
             {/*variant="outline-info": Bootstrap stili kullanarak butonu bilgi rengine ayarlar.
                className= "me-2": Sağ kenar boşluğu ekler.*/}
            <Button variant="outline-info" className= "me-2">Login</Button>
            <Button variant="outline-info">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header