import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
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
export const ContentLikeButton = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: 1px solid rgb(255 215 143);
  border-radius: 4px;
  padding: 0px 1.25rem;
  background: #f37321;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: #f6f6f6;
  :active {
    color: #fca421;
    transition: background-color 2s ease-out;
  }
`;
export const ContentLikeEmptyButton = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: 1px solid rgb(255 215 143);
  border-radius: 4px;
  padding: 0px 1.25rem;
  color: #fca421;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 10%), 0px 2px 2px 0px rgb(0 0 0 / 10%);
  :hover {
    border: 1px solid #f37321;
  }
  :active {
    background: #f37321;
    color: #f6f6f6;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
export const PostContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 7vw;
  min-height: auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #c3c3c2;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
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

export const ContentLikeIcon = styled((props) => <ThumbUpAltIcon {...props} />)({
  width: '1.2em',
});
export const ContentLikeEmptyIcon = styled((props) => <ThumbUpOffAltIcon {...props} />)({
  width: '1.2em',
});

export const CommentLikeIcon = styled((props) => <ThumbUpAltIcon {...props} />)({
  width: '0.7em',
});
export const CommentLikeEmptyIcon = styled((props) => <ThumbUpOffAltIcon {...props} />)({
  width: '0.7em',
});
