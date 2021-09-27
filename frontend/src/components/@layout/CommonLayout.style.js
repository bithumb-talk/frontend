import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

export const CommonMainArticle = styled.article`
  position: relative;
  display: block;
  width: 1400px;
  margin: 20px auto 0;

  @media only screen and (min-width: ${BREAK_POINT.LG}px) {
    display: flex;
  }
`;

export const CommonContentsSection = styled.section`
  width: 100%;
  height: 1500px;
  backgroundcolor: #eee;
`;

export const CoinPriceListChartSection = styled.section`
  display: none;
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;

  @media only screen and (min-width: ${BREAK_POINT.LG}px) {
    display: block;
  }
`;
