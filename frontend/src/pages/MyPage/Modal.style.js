import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputTextField = styled((props) => (
  <TextField
    required
    fullWidth
    {...props}
  />
))({
  margin: '10px 0px 10px 0px',
});

export const ConfirmButton = styled((props) => (
  <Button
    variant="contained"
    fullWidth
    sx={{
      padding: '10px 0px 10px 0px',
      color: 'white',
    }}
    {...props}
  />
))({
  fontSize: '1.2rem',
  fontWeight: 800,
  margin: '15px 0px 15px 0px',
});
