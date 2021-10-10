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
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 10,
  p: 4,
};

export default function QuitModal(props) {
  const { open, onClose } = props;
  const id = window.localStorage.getItem('id');
  const [pwInput, setpwInput] = useState({
    curPassword: '',
    confirmPassword: '',
  });

  const { curPassword, confirmPassword } = pwInput;

  const deleteUser = async () => {
    const res = await api.deleteUser(id, { password: `${confirmPassword}` });
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
            <b>회원 탈퇴</b>
          </Typography>
          <Typography color="error" variant="body2" sx={{ paddingBottom: '20px' }}>탈퇴 시 작성하신 포스트 및 댓글이 <strong>모두 삭제되며<br /> 복구되지 않습니다.</strong></Typography>
          <InputTextField
            name="curPassword"
            label="현재 비밀번호"
            type="password"
            value={curPassword}
            onChange={onChange}
          />
          <InputTextField
            name="confirmPassword"
            label="비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={onChange}
          />
          <ConfirmButton
            onClick={deleteUser}
          >
            회원 탈퇴
          </ConfirmButton>
        </Box>
      </Modal>
    </>
  );
}

QuitModal.propTypes = {
  open: proptypes.elementType.isRequired,
  onClose: proptypes.elementType.isRequired,
};
