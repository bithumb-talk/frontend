import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  CoinPriceInfoTab,
  CoinListItem,
  CustomStarBorderIcon,
} from './CoinPriceListChart.style';
import CoinPriceListItem from './CoinPriceListItem';

function CoinPriceList() {
  const tabIndex = useSelector((state) => state.coinPrice.tabIndex);

  return (
    <section>
      <CoinPriceInfoTab>
        <Box sx={{
          width: 30,
        }}
        />
        <Box sx={{
          width: 94,
        }}
        >
          <p>자산</p>
        </Box>
        <Box sx={{
          width: 88,
        }}
        >
          <p>현재가</p>
        </Box>
        <Box sx={{
          width: 78,
        }}
        >
          <p>변동률</p>
        </Box>
        <Box>
          <p>거래금액</p>
        </Box>
      </CoinPriceInfoTab>

      <div>
        {
          tabIndex === 0
            ? (
              <CoinPriceListItem />
            )
            : (
              <CoinListItem>
                <Box sx={{
                  width: 30,
                }}
                >
                  <CustomStarBorderIcon />
                </Box>
                <Box sx={{
                  width: 94,
                }}
                >
                  <p>이더리움</p>
                </Box>
                <Box sx={{
                  width: 88,
                }}
                >
                  <p>53,612,000</p>
                </Box>
                <Box sx={{
                  width: 78,
                }}
                >
                  <p>0.65</p>
                </Box>
                <Box>
                  <p>133,831백만</p>
                </Box>
              </CoinListItem>
            )
        }
      </div>
    </section>
  );
}

export default CoinPriceList;
