import React from 'react'
import about from '../Assets/about.jpg'
import '../Styles/AboutStyle.css'

const About = () => {
    return (
        <div className='about'>
            <img src={about} alt="" className='aboutImage' />
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium distinctio consequatur facere quia aperiam, dolorum corrupti ipsum consequuntur voluptatibus deleniti illo atque quos quisquam ullam, fugiat aliquid, sit omnis ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, atque? Aliquid quo eaque voluptatem? Libero sit repudiandae porro molestias cum aliquid. Dolorem autem a ullam blanditiis dolorum quidem necessitatibus doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas ipsum beatae. Quibusdam, perspiciatis aliquid doloribus distinctio voluptate ullam nemo.</p>
            </div>
        </div>
    )
}

export default About
