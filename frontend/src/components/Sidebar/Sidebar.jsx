import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

const SidebarContainer = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ position }) => `translateX(${position}px)`};
  transition: 0.3s ease;

  @media only screen and (min-width: ${BREAK_POINT.LG}px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  width: 98px;
  padding: 0;
  margin: 0;
  top: 50%;
  position: fixed;
  left: -74px;
  transform: rotate(-90deg);
  display: ${({ isSidebar }) => (isSidebar ? 'none' : 'block')};
  transition: 0.5s ease;
`;

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
    setIsSidebar(false);
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
