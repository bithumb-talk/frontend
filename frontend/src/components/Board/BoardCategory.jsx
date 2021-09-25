import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { CssTextField } from './Board.style';

const categoryList = [
  { label: '코인잡담', id: 0 },
  { label: '코인초보', id: 1 },
];

export default function ComboBox() {
  return (
    <Stack spacing={2} sx={{ width: 250 }}>
      <Autocomplete
        id="Combo_community"
        size="small"
        options={categoryList}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <CssTextField {...params} variant="standard" label="community" placeholder="등록할 카테고리를 입력하세요" />
        )}
      />
    </Stack>
  );
}
