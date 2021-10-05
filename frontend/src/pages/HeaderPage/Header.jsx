import { Link } from 'react-router-dom';
import { MenuBar, BranchProfile } from '@/components/index';
import logo from '@/assets/image/logo.png';

const Header = () => (
  <div style={{ display: 'contents' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <Link to="/">
        <img src={logo} alt="youngcha" width="180" height="150" />
      </Link>
      <MenuBar />
    </div>
    <BranchProfile />
  </div>
);

export default Header;
