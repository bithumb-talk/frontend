import { Link } from 'react-router-dom';
import { BranchProfile, MenuBar } from '@/components/index';
import logo from '@/assets/image/newLogo.png';
import './Header.style.css';

// const Header = () => (
//   <div style={{ display: 'contents' }}>
//     <div style={{ display: 'flex', alignItems: 'flex-end' }}>
//       <Link to="/">
//         <img src={logo} alt="youngcha" width="180" height="150" />
//       </Link>
//       <MenuBar />
//     </div>
//     <BranchProfile />
//   </div>
// );
const Header = () => (
  <nav className="navbar">
    <div className="navbar__logo">
      <Link to="/">
        <img src={logo} alt="youngcha" width="105px" height="65px" />
      </Link>
    </div>
    <ul className="navbar__menu">
      <MenuBar />
      <li><a href="/">home</a></li>
      <li><a href="/">Gallery</a></li>
      <li><a href="/">Service</a></li>
      <li><a href="/">FAQ</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
    <ul className="navbar__icons">
      <BranchProfile />
    </ul>
  </nav>
);

export default Header;
