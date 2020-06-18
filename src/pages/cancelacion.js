import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function cancelación() {
    return (
        <div>
            <SEO title='Compra Cancelada' />
            <Purchase>
                <h2>Compra Cancelada</h2>
                <p>Espero vuelvas pronto a la tienda de Platzi</p>
                <p>Tu swag estará disponible cuando vuelvas, nunca pares de aprender !</p>
                <span rol='img' aria-label='emoji'>💖</span>
                <Link to='/'>
                    <Button>Volver al Catálogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}
