import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

export const SidebarContainer = styled.section`
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

export const ToggleButton = styled.button`
  width: 98px;
  padding: 0;
  margin: 0;
  top: 50%;
  position: fixed;
  left: -60px;
  transform: rotate(-90deg);
  display: ${({ isSidebar }) => (isSidebar ? 'none' : 'block')};
  transition: 0.3s ease;
`;
