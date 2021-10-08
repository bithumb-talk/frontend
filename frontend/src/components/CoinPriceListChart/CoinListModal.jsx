import React from 'react';
import { Modal } from '@mui/material';
import PropTypes from 'prop-types';
import logo from '@/assets/image/logo.png';
import {
  ModalContainer,
} from './CoinPriceListChart.style';
import CoinLogin from './CoinLogin';

function CoinListModal({ open, handleClose }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <img src={logo} alt="logo" width="120" />
          <CoinLogin isModal />
        </ModalContainer>
      </Modal>
    </>
  );
}

CoinListModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CoinListModal;
