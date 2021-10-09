import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const LoginButton = styled((props) => <Button variant="contained" sx={{ borderRadius: '20px' }} {...props} />)({
  fontSize: '1.1rem',
  fontWeight: 800,
  minWidth: '140px',
  margin: '0px 5px 0px 5px',
  borderRadius: '5px',
});
