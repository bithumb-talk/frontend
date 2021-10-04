import { MenuBar, BranchProfile } from '@/components/index';
import logo from '@/assets/image/logo.png';

const Header = () => (
  <div style={{ display: 'contents' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <img src={logo} alt="youngcha" width="180" height="150" />
      <MenuBar />
    </div>
    <BranchProfile />
  </div>
);

export default Header;
