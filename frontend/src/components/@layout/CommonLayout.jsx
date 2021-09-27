import React from 'react';
import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import { CoinPriceListChart } from '@/components/index';
import Sidebar from '@/components/Sidebar/Sidebar';
import { BREAK_POINT } from '@/constants/style';

const CommonMainArticle = styled.article`
  position: relative;
  display: block;
  width: 1400px;
  margin: 20px auto 0;
  
  @media only screen and (min-width: ${BREAK_POINT.LG}px) {
    display: flex;
  }
`;

const CommonContentsSection = styled.section`
  width: 100%;
  height: 1500px;
  backgroundColor: #eee;
`;

// const CoinPriceListChartSection = styled('section')({
//   // position: 'fixed',
//   position: 'sticky',
//   top: '0',
//   right: '0',
//   height: '100vh',
//   width: '400px',
// });

const CoinPriceListChartSection = styled.section`
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

function CommonLayout({ children }) {
  return (
    <CommonMainArticle>
      <CommonContentsSection>
        {children}
      </CommonContentsSection>
      <CoinPriceListChartSection>
        <CoinPriceListChart />
      </CoinPriceListChartSection>
      <Sidebar
        width={400}
      >
        <CoinPriceListChart />
      </Sidebar>
    </CommonMainArticle>
  );
}

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommonLayout;
