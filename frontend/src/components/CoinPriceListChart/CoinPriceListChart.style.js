import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const CoinPriceListContainer = styled('article')({
  width: '400px',
  height: '100vh',
  padding: '10px',
  boxShadow: '2px 2px 4px #dee1e7',
  border: '1px solid #eee',
  backgroundColor: '#fff',
});

export const CoinSearchContainer = styled('div')({
  position: 'relative',
});

export const CoinSearchInput = styled((props) => <TextField {...props} />)({
  width: '100%',
});

export const CustomCloseIcon = styled((props) => <CloseIcon {...props} />)({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '16px',
});

export const CustomStarBorderIcon = styled((props) => <StarBorderIcon {...props} />)({
  fontSize: '16px',
});

export const CoinPriceInfoTab = styled('div')({
  display: 'flex',
  fontSize: '12px',
  margin: '10px 0',
});

export const CoinListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  borderTop: '.5px solid #cbcbcb',
  height: '50px',
});
