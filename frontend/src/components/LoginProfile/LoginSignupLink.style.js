import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const LoginButton = styled((props) => <Button variant="contained" sx={{ borderRadius: '20px' }} {...props} />)({
  fontSize: '1.1rem',
  fontWeight: 800,
  minWidth: '150px',
  margin: '0px 10px 0px 10px',
});
