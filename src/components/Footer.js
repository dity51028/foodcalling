import React from 'react'
import Insta from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Youtube from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Insta/> <Facebook/> <Twitter/> <Youtube/>
        </div>
        <p> &copy; 2023 foodcalling.com</p>
    </div>
  )
}

export default Footer