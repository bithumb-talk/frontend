import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, ToggleButton } from '@mui/material';
import { Link } from 'react-router-dom';
// import proptypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/RemoveCircleOutline';
import { getMyInterestStockList } from '@/redux/userInfoSlice';
import useCoin from '@/hooks/useCoin';
import { stringAvatar } from '../../utils/index';

export default function EmptyContent() {
  const dispatch = useDispatch();
  const myStockList = useSelector((state) => state.userInfo.myInterestStockList.data);
  const [stockList, setstockList] = useState(myStockList);
  const { onDeleteInterestCoin } = useCoin();

  useEffect(() => {
    dispatch(getMyInterestStockList())
      .then(() => {
        setstockList(myStockList);
      });
  }, [myStockList]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px 50px', width: '100%', height: '100%' }}>
      {stockList.map((stock) => (
        <Box key={stock.symbol} sx={{ display: 'flex', margin: '7px 0px', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '12px' }}>
          <Link to={`/coin/${stock.symbol}`}>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <Avatar {...stringAvatar(stock.symbol)} />
              <Typography variant="h6" sx={{ fontWeight: 800, paddingLeft: '20px' }}>
                {stock.korean}
              </Typography>
            </Box>
          </Link>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <ToggleButton
              value="check"
              selected
              onClick={() => {
                onDeleteInterestCoin({ symbol: stock.symbol });
              }}
            >
              <CheckIcon sx={{ color: '#aaa' }} />
              <Typography variant="body2" sx={{ paddingLeft: '3px', fontWeight: 800 }}>관심 종목에서 제외하기</Typography>
            </ToggleButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

// EmptyContent.propTypes = {
//   type: proptypes.elementType.isRequired,
// };
