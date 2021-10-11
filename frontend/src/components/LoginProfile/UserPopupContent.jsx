import React from 'react';
import proptypes from 'prop-types';
import { Box, Typography, Modal } from '@mui/material';
// import api from '@/api/api';

const style = {
  position: 'absolute',
  top: '40px',
  right: 0,
  width: '220px',
  height: 'auto',
  animation: 'fadeInUp___2KM1w .2s ease-out',
  padding: '12px',
  borderRadius: '6px',
  boxShadow: '0 2px 12px rgb(53 60 73 / 10%), 0 2px 5px rgb(53 60 73 / 5%)',
  backgroundColor: '#fff',
  textAlign: 'left',
  zIndex: 100,
};

export default function UserPopupContent(props) {
  const { open, onClose } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>ddd</Typography>
        </Box>
      </Modal>
    </>
  );
}

UserPopupContent.propTypes = {
  open: proptypes.elementType.isRequired,
  onClose: proptypes.elementType.isRequired,
};
