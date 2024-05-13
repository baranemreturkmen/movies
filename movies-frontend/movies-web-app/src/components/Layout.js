import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <main>
        <Outlet></Outlet>
        {/* Home, Trailer, Reviews sayfalarına geçiş yaptığımda  <Home>, <Reviews> veya <Trailer> bileşenleri Outlet içinde render edilir. 
            Bu şekilde, ana bileşen içinde farklı alt bileşenleri dinamik olarak değiştirebilirsiniz.*/}
        
    </main>
  )
}

export default Layout