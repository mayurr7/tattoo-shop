import React, {useState, useEffect} from 'react';

// import headeer data
import { headerData } from '../data';
// imports components
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

// import icons
import { TiThMenuOutline } from "react-icons/ti";



const Header = () => {
  // destructure header data
  const {logo} = headerData;
  // header state
  const [isActive,setIsActive] = useState(false);

  //nav mobile state
  const [NavMobile,,setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    })
  })

  return <header
  className={`${
    isActive ? " h-[100px] lg:h-[110px] shadow-lg" : ' h-[120px] lg:h-[150px]'} fixed left-0 right-0 top-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
  >
    <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
      {/* logo */}
      <a href='/'>
        <img className='w-[188px] h-[90px]' src={logo} alt='' />
      </a>
    {/* nav - initially hidden - show on desktop */}

    <div className='hidden xl:flex'>
      <nav/>
    </div>
    {/* nav menu btn - showing by default - hidden on desktop mode */}

    <div>
      
    </div>

    </div>
  </header>;
};

export default Header;
