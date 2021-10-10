import React, { useState } from 'react';
import proptypes from 'prop-types';
import { Box, Typography, Modal } from '@mui/material';
import api from '@/api/api';
import { InputTextField, ConfirmButton } from './Modal.style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 10,
  p: 4,
};

export default function PasswordModal(props) {
  const { open, onClose } = props;
  const id = window.localStorage.getItem('id');
  const [pwInput, setpwInput] = useState({
    curPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { curPassword, newPassword, confirmPassword } = pwInput;

  const changePassword = async () => {
    const res = await api.putChangePassword(id, { password: `${newPassword}` });
    const changeResult = res.data;

    if (changeResult.status === 'SUCCESS') {
      onClose('success');
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setpwInput({
      ...pwInput,
      [name]: value,
    });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ paddingBottom: '10px' }}>
            <b>비밀번호 변경</b>
          </Typography>
          <InputTextField
            name="curPassword"
            label="현재 비밀번호"
            type="password"
            value={curPassword}
            onChange={onChange}
          />
          <InputTextField
            name="newPassword"
            label="새로운 비밀번호"
            type="password"
            value={newPassword}
            onChange={onChange}
          />
          <InputTextField
            name="confirmPassword"
            label="새로운 비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={onChange}
          />
          <ConfirmButton
            onClick={changePassword}
          >
            비밀번호 변경
          </ConfirmButton>
        </Box>
      </Modal>
    </>
  );
}

PasswordModal.propTypes = {
  open: proptypes.elementType.isRequired,
  onClose: proptypes.elementType.isRequired,
};
