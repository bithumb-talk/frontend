import React from 'react';
import PropTypes from 'prop-types';
import { CoinPriceListChart } from '@/components/index';
import Sidebar from '@/components/Sidebar/Sidebar';
import {
  CommonMainArticle,
  CommonContentsSection,
  CoinPriceListChartSection,
} from './CommonLayout.style';

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
