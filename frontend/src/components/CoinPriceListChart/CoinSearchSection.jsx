import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setSearchedCoin } from '@/redux/coinPriceSlice';
import useDebounce from '@/hooks/useDebounce';

const CoinSearchContainer = styled.div`
  position: relative;
`;

const CoinSearchInput = styled((props) => <TextField {...props} />)`
  width: 100%;
`;

const CustomCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  fontSize: 16px;
`;

function CoinSearchSection() {
  const dispatch = useDispatch();

  const dispatchSearchedCoin = (value) => dispatch(setSearchedCoin({ value }));

  const setSearchValueDebounce = useDebounce(dispatchSearchedCoin, 300);
  // const setSearchValueDebounced = useRef(debounce(dispatchSearchedCoin, 300));

  const onKeyUpSearchCoin = ({ target: { value } }) => {
    setSearchValueDebounce.current(value);
  };
  return (
    <section>
      <CoinSearchContainer>
        <CoinSearchInput
          id="outlined-size-small"
          label="코인명/심볼 검색"
          variant="outlined"
          size="small"
          onKeyUp={(event) => onKeyUpSearchCoin(event)}
        />
        <CustomCloseIcon />
      </CoinSearchContainer>
    </section>
  );
}

export default CoinSearchSection;
