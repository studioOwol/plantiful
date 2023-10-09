import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlantCard from '../../components/PlantCard';
import AutoComplete from '../../components/AutoComplete';
import axios from 'axios';

const AddPage = () => {
  const [allPlantType, setAllPlantType] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const url = `http://localhost:3000/api/plants`;

  useEffect(() => {
    fetchTypeData();
  }, []);

  const fetchTypeData = async () => {
    try {
      const response = await axios.get(url);
      setAllPlantType(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div
        style={{
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
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AutoComplete
          options={allPlantType}
          value={selectedPlant}
          onChange={(event, newValue) => setSelectedPlant(newValue)}
        />
        <PlantCard selectedPlant={selectedPlant} />
      </div>
    </div>
  );
};

export default AddPage;
