import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { PhotoLibrary } from '@mui/icons-material';

const PlantCard = ({ selectedPlant }) => {
  function makeImage(name) {
    return name ? 'img/' + name + '.png' : '';
  }

  const imagePath = selectedPlant ? makeImage(selectedPlant.name) : '';

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
            <PhotoLibrary />
          )}
        </CardActionArea>

        <List>
          <CardHeader title='식물 이름' />
          <br></br>
          <ListItem>
            <ListItemText primary='물 준 날짜 : ' />
          </ListItem>
          <ListItem>
            <ListItemText primary='다음 물주기 날짜 : ' />
          </ListItem>
        </List>

        <CardActions>
          <Button size='large'>물주기</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PlantCard;
