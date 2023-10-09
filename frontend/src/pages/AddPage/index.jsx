import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button
        variant='outlined'
        sx={{
          marginLeft: '100px',
          color: '#005B41',
          borderColor: '#005B41',
          width: '100px',
          height: '50px',
          fontSize: '20px',
          display: ['none', 'none', 'block'],
        }}
        onClick={handleBackClick}
      >
        이전
      </Button>

      <Button
        variant='outlined'
        sx={{
          marginRight: '100px',
          color: '#005B41',
          borderColor: '#005B41',
          width: '100px',
          height: '50px',
          fontSize: '20px',
          display: ['none', 'none', 'block'],
        }}
      >
        등록
      </Button>
    </Box>
  );
};

export default AddPage;
