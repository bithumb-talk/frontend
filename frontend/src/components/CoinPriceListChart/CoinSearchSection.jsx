import React, { useState } from 'react';
import { styled, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useDebounce from '@/hooks/useDebounce';
import useCoin from '@/hooks/useCoin';
import { CoinSearchContainer } from './CoinPriceListChart.style';

const CoinSearchInput = styled((props) => <TextField {...props} />)({
  width: '100%',
});

const CustomCloseIcon = styled(CloseIcon)({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '16px',
  cursor: 'pointer',
});

function CoinSearchSection() {
  const { onSetSearchedCoin } = useCoin();
  const [searchCoin, setSearchCoin] = useState('');

  const dispatchSearchedCoin = (value) => onSetSearchedCoin({ value });

  const setSearchValueDebounce = useDebounce(dispatchSearchedCoin, 200);

  const onKeyUpSearchCoin = ({ target }) => {
    setSearchCoin(target.value);
    setSearchValueDebounce.current(target.value);
  };

  const onClickResetValue = () => {
    setSearchValueDebounce.current('');
    setSearchCoin('');
  };
  return (
    <section>
      <CoinSearchContainer>
        <CoinSearchInput
          id="outlined-size-small"
          label="코인명/심볼 검색"
          variant="outlined"
          size="small"
          value={searchCoin}
          onChange={(event) => onKeyUpSearchCoin(event)}
        />
        <CustomCloseIcon
          onClick={() => onClickResetValue()}
        />
      </CoinSearchContainer>
    </section>
  );
}

export default CoinSearchSection;
