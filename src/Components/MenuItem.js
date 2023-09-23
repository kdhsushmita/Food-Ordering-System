import React from 'react'

const MenuItem = ({ name, image, price }) => {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `URL(${image})`, }}>
            </div>
            <h1>{name}</h1>
            <p> ₹{price}</p>
        </div>
    )
}

export default MenuItem
