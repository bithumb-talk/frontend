import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

export const CommonMainArticle = styled.article`
  position: relative;
  display: flex;
  width: 1400px;
  margin: 20px auto 0;

  @media only screen and (max-width: ${BREAK_POINT.LG}px) {
    display: block;
    width: 100%;
    padding: 0 22px;
  }

  @media only screen and (max-width: 1400px) {
    width: 100%;
    padding-left: 22px;
  }
`;

export const CommonContentsSection = styled.section`
  width: 100%;
  backgroundcolor: #eee;
`;

export const CoinPriceListChartSection = styled.section`
  display: none;
  position: sticky;
  top: 100px;
  right: 20px;
  height: 100vh;
  width: 400px;

  @media only screen and (min-width: ${BREAK_POINT.LG}px) {
    display: block;
  }
`;
