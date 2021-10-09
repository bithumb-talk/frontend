/* eslint-disable max-len */
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Pagination from '@mui/material/Pagination';

export const WriteIcon = styled((props) => <CreateOutlinedIcon {...props} />)({
  width: '1.6em',
  height: ' 1.6em',
  color: 'white',
  '&:hover': { color: 'coral' },
});

export const PlusIcon = styled((props) => <AddIcon {...props} />)({
  width: '1.6em',
  height: ' 1.6em',
  color: 'white',
  '&:hover': { color: 'coral' },
});

export const WriteButton = styled((props) => <IconButton {...props} />)({
  fontSize: '1em',
  color: 'black',
  background: '#ffa536',
  '&:hover': {
    background: 'rgb(255 149 118 / 24%)',
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    transform: 'scale(1.04)',
  },
});

export const BoardPagination = styled((props) => <Pagination {...props} />)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1em',
});
