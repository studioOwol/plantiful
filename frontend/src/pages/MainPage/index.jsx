import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const naviagte = useNavigate();

  const handleButtonClick = () => {
    naviagte('/add');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    </div>
  );
}

export default MainPage;
