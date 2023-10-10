import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button, CardActionArea } from '@mui/material';
import { PhotoLibrary } from '@mui/icons-material';
import { InputLabel, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const PlantCard = ({ selectedPlant, waterInterval, onChange }) => {
  function makeImage(name) {
    return name ? 'img/' + name + '.png' : '';
  }

  const imagePath = selectedPlant ? makeImage(selectedPlant.name) : '';
  const [selectedDate, setSelectedDate] = useState(null);

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format('YYYY/MM/DD')
    : '';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
      }}
    >
      <Card sx={{ width: 450, height: 700 }}>
        <CardActionArea
          sx={{
            height: 420,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {selectedPlant ? (
            <CardMedia
              component='img'
              alt='plant image'
              src={imagePath}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <PhotoLibrary style={{ fontSize: 120, color: 'gray' }} />
          )}
        </CardActionArea>

        <List sx={{ marginLeft: '15px', marginRight: '15px' }}>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            <InputLabel htmlFor='plant-name'>식물 이름</InputLabel>
            <TextField
              id='plant-name'
              fullWidth
              variant='standard'
              InputProps={{
                style: { borderBottom: 'none' },
                disableUnderline: true,
              }}
              sx={{ marginTop: '8px', borderBottom: '1px solid #ccc' }}
            />
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            <InputLabel htmlFor='plant-name' sx={{ marginBottom: '4px' }}>
              물 준 날짜
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                id='water-date'
                value={selectedDate}
                format='YYYY-MM-DD'
                onChange={(date) => setSelectedDate(date)}
                renderInput={(params) => (
                  <TextField {...params} value={formattedDate} />
                )}
              />
            </LocalizationProvider>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            <InputLabel htmlFor='next-water'>물주기</InputLabel>
            <TextField
              id='next-water'
              fullWidth
              variant='standard'
              InputProps={{
                style: { borderBottom: 'none' },
                disableUnderline: true,
              }}
              sx={{ marginTop: '8px' }}
              value={
                waterInterval || (selectedPlant ? selectedPlant.next_water : '')
              }
              onChange={(event) => {
                const newValue = event.target.value;
                onChange(event, newValue);
              }}
            />
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default PlantCard;
