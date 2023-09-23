import React from 'react'
import { Data } from '../Data/Data.js'
import MenuItem from '../Components/MenuItem.js'
import '../Styles/Menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu </h1>
            <div className="menuList">
                {
                    Data.map((el) => {
                        return (
                            <MenuItem name={el.name} image={el.image} price={el.price} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Menu
