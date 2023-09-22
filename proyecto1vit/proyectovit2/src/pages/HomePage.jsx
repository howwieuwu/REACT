import React from 'react';
import FooterComponent from '../components/footercomponente';
import NosotrosComponent from '../components/nosotrosComponent';
import ContactoComponent from '../components/ContactoComponent';
import MenuComponent from '../components/menucomponent';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    } from "react-router-dom";

export default function HomePage(){
    return(
        <main className='h-screen w-full'>
        <header className='h-20 bg-blue-300 text-center'>
            encabezado
        </header>
        <main className='h-[83%] bg-red-300 text-center'>
        <BrowserRouter>
        <MenuComponent/>
        {/*aqui se carga el contenido de los componentes*/}
            <Routes>
                <Route path='/nosotros'element={<NosotrosComponent/>}/>
                <Route path='/contacto'element={<ContactoComponent/>}/>
            </Routes>
        </BrowserRouter>
        </main>

        <footer className='h-20 bg bg-blue-300 text-center'>
            <FooterComponent/>
        </footer>
        </main>
    )
}
