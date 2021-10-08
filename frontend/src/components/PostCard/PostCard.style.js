import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const CardProfile = styled((props) => <Avatar {...props} />)({
  width: '25px',
  height: '25px',
});

export const CardWrap = styled((props) => <Card {...props} />)({
  width: 'calc(100%)',
  background: 'white',
  borderRadius: '4px',
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    transform: 'scale(1.04)',
  },
});

export const CardInfo = styled((props) => <Typography {...props} />)({
  fontSize: '10px',
});

export const Like = styled((props) => <FavoriteIcon {...props} />)({
  fontSize: '1.2rem',
  color: 'red',
});

export const LikeEmpty = styled((props) => <FavoriteBorderIcon {...props} />)({
  fontSize: '1.2rem',
});

export const CardBottom = styled((props) => <Box {...props} />)({
  paddingTop: '16px',
  paddingRight: '16px',
  paddingLeft: '16px',
  paddingBottom: '8px',
  borderTop: '2px dashed orange',
  zIndex: 10,
  background: 'white',
});

// MuiCardContent-root css-46bh2p-MuiCardContent-root
