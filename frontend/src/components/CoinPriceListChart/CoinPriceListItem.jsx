import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import { priceToString, stringToNumber, stringToUnitPrice } from '@/utils/utils';
import { COLOR } from '@/constants/style';
import { deleteInterestCoin, editInterestCoin, postInterestCoin } from '@/redux/coinPriceSlice';
import useDebounce from '@/hooks/useDebounce';
import auth from '@/utils/auth';
import {
  CoinListItem,
  TableGrid,
  CoinFont,
  CoinLink,
  CoinFontSpan,
  ModalContainer,
} from './CoinPriceListChart.style';
import CoinLogin from './CoinLogin';

const CustomStarBorderIcon = styled((props) => <StarIcon {...props} />)({
  fontSize: '16px',
});
function CoinPriceListItem({
  korean, symbol, closePrice, chgRate, chgAmt, accTradeValue, isInterest,
}) {
  const [open, setOpen] = React.useState(false);
  const [borderColor, setBorderColor] = useState({ flag: false, color: COLOR.TYPO });
  const dispatch = useDispatch();
  const fontColor = Number(chgRate) > 0 ? COLOR.RED : COLOR.BLUE;
  const dispatchInterestCoin = (currentIsInterst) => dispatch(editInterestCoin({
    symbol,
    isInterest: currentIsInterst,
  }));

  const editInterestDebounce = useDebounce(dispatchInterestCoin, 100);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickStar = () => {
    if (auth.isLogin()) {
      editInterestDebounce.current(isInterest);
      if (!isInterest) {
        dispatch(postInterestCoin({ symbol }));
      }

      if (isInterest) {
        dispatch(deleteInterestCoin({ symbol }));
      }
      return;
    }

    handleOpen();
  };

  const setCommaChgAmt = () => (
    Number(chgAmt) > 1 || Number(chgAmt) < -1
      ? priceToString(Math.floor(Number(chgAmt)))
      : chgAmt
  );

  useEffect(() => {
    if (chgAmt > 0) {
      setBorderColor({ flag: true, color: COLOR.RED });
    } else {
      setBorderColor({ flag: true, color: COLOR.BLUE });
    }

    setTimeout(() => {
      setBorderColor({ flag: false, color: 'none' });
    }, 300);

    return () => {
      setBorderColor({ flag: false, color: 'none' });
    };
  }, [chgAmt]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <CoinLogin />
        </ModalContainer>
      </Modal>
      <CoinListItem active={borderColor.flag} color={borderColor.color}>

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
            <CoinLink to={`/coin/${symbol}`}>
              <CoinFontSpan weight="bold">{korean}</CoinFontSpan>
            </CoinLink>
            {/* <CoinFont weight="bold"></CoinFont> */}
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
            <CoinFont size="12" color={fontColor}>{setCommaChgAmt()}</CoinFont>
          </div>
        </TableGrid>
        <TableGrid>
          <CoinFont>{stringToUnitPrice(stringToNumber(accTradeValue))}백만</CoinFont>
        </TableGrid>
      </CoinListItem>
    </>

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
