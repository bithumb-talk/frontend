import React from 'react';
import { Box } from '@mui/material';
import {
  CoinListItem,
  CustomStarBorderIcon,
} from './CoinPriceListChart.style';

function CoinPriceListItem() {
  return (
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
  );
}

export default CoinPriceListItem;
