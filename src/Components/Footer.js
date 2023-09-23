import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <LinkedInIcon />
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
            </div>
            <p>&copy; 2023 FoodOnline.com</p>
        </div>
    )
}

export default Footer
