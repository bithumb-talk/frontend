import styled from 'styled-components';
import { COLOR } from '@/constants/style';

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  margin-top: 100px;
  width: 100%;
  background-color: ${COLOR.TYPO};
  height: 250px;
`;

export const FooterText = styled.p`
  margin-top: 10px;
`;
