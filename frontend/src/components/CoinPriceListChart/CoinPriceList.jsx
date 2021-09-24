import React from 'react';
import { Box } from '@mui/material';
import {
  CoinPriceInfoTab,
  CoinListItem,
  CustomStarBorderIcon,
} from './CoinPriceListChart.style';

function CoinPriceList() {
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
            <p>비트코인</p>
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
            <p>비트코인</p>
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
      </div>
    </section>
  );
}

export default CoinPriceList;
