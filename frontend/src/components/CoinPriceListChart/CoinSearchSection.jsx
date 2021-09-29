import React from 'react';
// import {
//   CoinSearchContainer,
//   CoinSearchInput,
//   CustomCloseIcon,
// } from './CoinPriceListChart.style';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CoinSearchContainer = styled.div`
  position: relative;
`;

const CoinSearchInput = styled((props) => <TextField {...props} />)`
  width: 100%;

  label {
    font-size: 10px;
  }
`;

const CustomCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  fontSize: 16px;
`;

function CoinSearchSection() {
  return (
    <section>
      <CoinSearchContainer>
        <CoinSearchInput
          id="outlined-basic"
          label="코인명/심볼 검색"
          variant="outlined"
          size="small"
        />
        <CustomCloseIcon />
      </CoinSearchContainer>
    </section>
  );
}

export default CoinSearchSection;
