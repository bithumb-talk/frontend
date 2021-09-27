import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  ToggleButton,
} from './Sidebar.style';

function Sidebar({ children, width }) {
  const [position, setPosition] = useState(width);
  const [isSidebar, setIsSidebar] = useState(false);

  const toggleMenu = () => {
    if (position > 0) {
      setPosition(0);
      setIsSidebar(true);
      return;
    }
    setPosition(width);

    setTimeout(() => setIsSidebar(false), 400);
  };

  return (
    <SidebarContainer
      position={position}
    >
      <ToggleButton
        type="button"
        onMouseEnter={() => toggleMenu()}
        isSidebar={isSidebar}
      >
        CoinPrice
      </ToggleButton>
      <div
        onMouseLeave={() => toggleMenu()}
      >
        {children}
      </div>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.number.isRequired,
};

export default Sidebar;
