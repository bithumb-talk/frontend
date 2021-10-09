/* eslint-disable react/prop-types */
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { categoryList } from '@/assets/index';
import { CssTextField } from './Board.style';

export default function ComboBox(props) {
  const { onChange } = props;
  return (
    <Stack spacing={2} sx={{ width: 250 }}>
      <Autocomplete
        disablePortal
        id="Combo_community"
        size="small"
        options={categoryList}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <CssTextField {...params} variant="standard" label="community" placeholder="등록할 카테고리를 입력하세요" />
        )}
        onChange={onChange}
      />
    </Stack>
  );
}
