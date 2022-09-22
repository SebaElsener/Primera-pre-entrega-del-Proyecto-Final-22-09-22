
import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    return (
        <div className='itemListContainer'>
            <h2 className='saludo'>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer