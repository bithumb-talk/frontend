import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { COLOR } from '@/constants/style';

export const SendButton = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(255 215 143);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  :hover {
    background: #f37321;
    color: #f6f6f6;
    transition: background-color 1s ease-out;
  }
`;
export const OutButton = styled.div`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  :hover {
    transition: background-color 1s ease-out;
  }
`;
export const SendButtonIcon = styled((props) => <SendIcon {...props} />)({
  width: '0.6em',
});
export const OutIcon = styled((props) => <ArrowBackIcon {...props} />)({
  width: '0.6em',
});
export const CssTextField = styled(TextField)({
  width: '100%',
  '& MuiFormControl-root': {
    width: '100%',
  },
  '& label.Mui-focused': {
    color: COLOR.MAIN,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: COLOR.MAIN,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLOR.TYPO,
    },
    '&:hover fieldset': {
      borderColor: COLOR.MAIN,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLOR.TYPO,
    },
  },
});
