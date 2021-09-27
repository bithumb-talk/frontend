import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { LockIcon, SignInForm } from './SignInPage.style';

export default function SignInPage() {
  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <Box sx={{
        padding: '10px',
        bgcolor: 'pink',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        marginBottom: '15px',
      }}
      >
        <LockIcon sx={{ fontSize: '28px' }} />
      </Box>
      <Typography variant="h4">Sign in</Typography>
      <Box sx={{
        marginTop: '15px',
        display: 'flex',
        width: '70%',
        flexDirection: 'column',
      }}
      >
        <SignInForm required fullWidth id="user-id" label="User ID" />
        <SignInForm required fullWidth id="user-password" label="PASSWORD" />
      </Box>
    </Box>
  );
}
