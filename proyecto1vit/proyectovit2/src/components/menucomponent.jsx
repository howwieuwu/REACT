import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuComponent(){
    return(
        <>
        <nav>
            <ul>
                <Link to="/nosotros">nosotros</Link>
                <Link to="/contacto">contacto</Link>
            
            </ul>
        </nav>
        </>
    )
}