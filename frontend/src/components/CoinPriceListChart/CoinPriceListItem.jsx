import React from 'react';
import { styled } from '@mui/material';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { priceToString, stringToNumber, stringToUnitPrice } from '@/utils/utils';
import { COLOR } from '@/constants/style';
import { editInterestCoin } from '@/redux/coinPriceSlice';
import useDebounce from '@/hooks/useDebounce';
import {
  CoinListItem,
  TableGrid,
  CoinFont,
} from './CoinPriceListChart.style';

const CustomStarBorderIcon = styled((props) => <StarIcon {...props} />)({
  fontSize: '16px',
});
function CoinPriceListItem({
  korean, symbol, closePrice, chgRate, chgAmt, accTradeValue, isInterest,
}) {
  const dispatch = useDispatch();
  const fontColor = Number(chgRate) > 0 ? COLOR.RED : COLOR.BLUE;
  const dispatchInterestCoin = (currentIsInterst) => dispatch(editInterestCoin({
    symbol,
    isInterest: currentIsInterst,
  }));
  const editInterestDebounce = useDebounce(dispatchInterestCoin, 100);
  const onClickStar = () => {
    editInterestDebounce.current(isInterest);
  };
  return (
    <CoinListItem>
      <TableGrid
        width="30"
      >
        <CustomStarBorderIcon
          sx={{ color: isInterest ? COLOR.MAIN : grey[600] }}
          onClick={() => onClickStar()}
        />
      </TableGrid>
      <TableGrid
        width="94"
      >
        <div>
          <CoinFont weight="bold">{korean}</CoinFont>
          <CoinFont size="12" color={COLOR.TYPO}>{symbol}</CoinFont>
        </div>
      </TableGrid>
      <TableGrid
        width="88"
      >
        <CoinFont
          color={fontColor}
        >{priceToString(closePrice)}
        </CoinFont>
      </TableGrid>
      <TableGrid
        width="78"
      >
        <div>
          <CoinFont size="12" color={fontColor}>{chgRate}%</CoinFont>
          <CoinFont size="12" color={fontColor}>{chgAmt}</CoinFont>
        </div>
      </TableGrid>
      <TableGrid>
        <CoinFont>{stringToUnitPrice(stringToNumber(accTradeValue))}백만</CoinFont>
      </TableGrid>
    </CoinListItem>
  );
}

CoinPriceListItem.propTypes = {
  korean: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  closePrice: PropTypes.string.isRequired,
  chgRate: PropTypes.string.isRequired,
  chgAmt: PropTypes.string.isRequired,
  accTradeValue: PropTypes.string.isRequired,
  isInterest: PropTypes.bool.isRequired,
};

export default CoinPriceListItem;
