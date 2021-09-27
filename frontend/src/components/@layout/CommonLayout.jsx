import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { CoinPriceListChart } from '@/components/index';
// import Sidebar from '@/components/Sidebar/Sidebar';

const CommonMainArticle = styled('article')({
  position: 'relative',
  display: 'flex',
  width: '1400px',
  margin: '20px auto 0',
});

const CommonContentsSection = styled('section')({
  width: '100%',
  height: '1500px',
  backgroundColor: '#eee',
});

const CoinPriceListChartSection = styled('section')({
  // position: 'fixed',
  position: 'sticky',
  top: '0',
  right: '0',
  height: '100vh',
  width: '400px',
});

function CommonLayout({ children }) {
  return (
    <CommonMainArticle>
      <CommonContentsSection>
        {children}
      </CommonContentsSection>
      <CoinPriceListChartSection>
        <CoinPriceListChart />
      </CoinPriceListChartSection>
      {/* <Sidebar
        width={400}
      >
        <CoinPriceListChart />
      </Sidebar> */}
    </CommonMainArticle>
  );
}

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommonLayout;
