import React from 'react'
import banner from '../Assets/banner.jpg';
import '../Styles/Home.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
    const bgStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh'
    }
    return (
        <div className="home" style={bgStyle}>
            <div className="homeContainer">
                <h1>Food Corner</h1>
                <p>Nepali Food at one click</p>
                <Link to="/menu"> <Button variant="dark" style={{ fontSize: "20px", height: "50px", width: "180px" }}> Order Now</Button></Link>
            </div>
        </div>
    )
}

export default Home
