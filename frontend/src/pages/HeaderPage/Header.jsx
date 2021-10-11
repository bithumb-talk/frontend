import { Link } from 'react-router-dom';
import { BranchProfile } from '@/components/index';
import logo from '@/assets/image/newLogo.png';
import './Header.style.css';
import { menuData } from '@/assets/index';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="youngcha" width="105px" height="65px" />
        </Link>
      </div>
      <ul className="navbar__menu">
        {menuData.map((menu) => (
          <li key={menu.id}>
            <Link to={menu.link}>
              <span className="menu__list">{menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="navbar__icons">
        <BranchProfile />
      </ul>
    </nav>
  );
}
