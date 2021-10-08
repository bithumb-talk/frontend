import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

export const CoinInfoSection = styled.article`
  padding: 16px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
  width: 98%;
  border-radius: 10px;

  @media only screen and (max-width: 1400px) {
    width: calc(98% - 20px);
  }

  @media only screen and (max-width: ${BREAK_POINT.LG}px) {
    width: 100%;
  }
`;
