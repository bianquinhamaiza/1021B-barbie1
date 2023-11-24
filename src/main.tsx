import React from 'react'
import './main.css'
import Header from './header/Header.tsx'
import Footer from './footer/Footer.tsx'
import Main from './main/Main.tsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <>
               <Header/>
               <Main/>
               <Footer/>
              </>,
  },
 
  {
    path: "/noticia",
    element: <>
             <Header/>
             <div className='content_main'>Página noticias</div>
             <Footer/>
            </>,
  },
  {
    path: "/sobre",
    element: <>
              <Header/>
              <div className='content_main' >Página sobre</div>
              <Footer/>
             </>,
  },
  {
    path: "/contato",
    element: <>
              <Header/>
               <div className='content_main' >Página de contato</div>
               <Footer/>
             </>
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)