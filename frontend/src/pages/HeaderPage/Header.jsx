import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import logo from '@/assets/image/newLogo.png';
import './Header.style.css';
import { menuData } from '@/assets/index';
import { BranchProfile } from '@/components/index';

export default function Header() {
  const location = useLocation();
  const [curUrl, setcurUrl] = useState(location.pathname);

  const toggleBtnRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    setcurUrl(location.pathname);
  }, [location]);

  const getUrl = (link) => curUrl.indexOf(link) > -1;

  const clickToggle = () => {
    menuRef.current.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="youngcha" width="105px" height="65px" />
        </Link>
      </div>
      <ul className="navbar__menu" ref={menuRef}>
        {menuData.map((menu) => (
          <li key={menu.id} className={getUrl(menu.link) ? menu.clicked : menu.class}>
            <Link to={menu.link}>
              <span className="menu__list">{menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="navbar__icons">
        <BranchProfile />
      </ul>
      <Box onClick={clickToggle} ref={toggleBtnRef} className="navbar__toogleBtn">
        <MenuIcon sx={{ fontSize: '2.3rem' }} />
      </Box>
    </nav>
  );
}
