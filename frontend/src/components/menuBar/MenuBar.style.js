import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { COLOR } from '../../constants/style';

export const MenuBox = styled((props) => <Box {...props} />)({
  borderTop: '2px dashed orange',
  borderBottom: '2px dashed orange',
  bgcolor: '#fff',
  boxShadow: '0 2px 12px rgb(53 60 73 / 10%), 0 2px 5px rgb(53 60 73 / 5%)',
});

export const MenuBoxList = styled((props) => <Box {...props} />)({
  bgcolor: '#fff',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '150px',
  paddingLeft: '15px',
  position: 'absolute',
});

export const MenuTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    justifyContent: 'space-around',
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: COLOR.POINT,
  },
});

export const MenuTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(17),
  fontFamily: 'Nanum Gothic Coding',
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.7)',
  '&.Mui-selected': {
    color: COLOR.MAIN,
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));
