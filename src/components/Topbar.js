import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import profil_foto from "../images/profil_foto.jpeg";
import "../styles/topbar.css"
import { SearchEngine } from './SearchEngine';

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='wrapped-target'>
            <div className='left'>
              <XIcon onClick={() => window.open("https://x.com/mehmeterncakmak", "_blank")} />
              <InstagramIcon onClick={() => window.open("https://www.instagram.com/mehmeterencakmak/", "_blank")} />
              <FacebookIcon onClick={() => window.open("https://www.facebook.com/ereno10", "_blank")} />
              <LinkedInIcon onClick={()=> window.open("https://www.linkedin.com/in/mehmet-eren-%C3%A7akmak-aab5b42a5/","_blank")} />
            </div>
            <div className='center'>
              <Link className='topbaritem' to="/">HOME</Link>
              <Link className='about' to="/about">ABOUT</Link>
              <Link className='register' to= "/register">REGISTER</Link>
              <Link className='login' to="/login">LOGIN</Link>
              <Link className='add' to="/add">ADD</Link>
            </div>
            <div className='right'>
              <span>
                <img src={profil_foto} alt="" />
              </span>
                <SearchEngine />
            </div>
        </div>
    </div>
  )
}
