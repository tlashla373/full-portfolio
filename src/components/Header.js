import React from 'react';
//images
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';


const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center '>
        {/*logo*/}
        <a href="#" >
          <img className='max-w-[200px] max-h-[200px]' src={Logo} alt="" />
        </a>
        <Link 
        activeClass='active'
        smooth={true}
        spy={true}
        to='contact' 
        className='btn btn-sm flex items-center'>Work with me</Link>
      </div>
    </div>
  </header>;
};

export default Header;
