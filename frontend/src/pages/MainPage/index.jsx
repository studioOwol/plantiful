import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const naviagte = useNavigate();

  const handleButtonClick = () => {
    naviagte('/add');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // 수평 가운데 정렬
        alignItems: 'center', // 수직 가운데 정렬
      }}
    >
      <Button
        variant='outlined'
        sx={{
          marginRight: '170px',
          color: '#005B41',
          borderColor: '#005B41',
          width: '100px',
          height: '50px',
          fontSize: '20px',
          display: ['none', 'none', 'block'],
        }}
        onClick={handleButtonClick}
      >
        등록
      </Button>
    </Box>
  );
}

export default MainPage;
