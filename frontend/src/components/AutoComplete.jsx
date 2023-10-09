import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoComplete = ({ options, value, onChange }) => {
  const sortedOptions = options
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={sortedOptions} // API 데이터 사용
      getOptionLabel={(option) => option.name} // 각 항목의 이름 표시
      value={value} // 선택한 식물 설정
      onChange={onChange} // 선택한 식물 업데이트
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='식물 종류' />}
    />
  );
};

export default AutoComplete;
