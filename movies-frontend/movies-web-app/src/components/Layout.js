import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <main>
      {/* Home, Trailer, Reviews sayfalarına geçiş yaptığımda  <Home>, <Reviews> veya <Trailer> bileşenleri Outlet içinde render edilir. 
            Bu şekilde, ana bileşen içinde farklı alt bileşenleri dinamik olarak değiştirebilirsiniz.*/}
        <Outlet></Outlet>
    </main>
  )
}

export default Layout