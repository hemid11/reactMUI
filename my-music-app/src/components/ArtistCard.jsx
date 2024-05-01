import React from 'react';
import Swal from 'sweetalert2';
import { Card, CardContent, CardMedia, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ArtistCard = ({ artist, onDelete, onAddSong }) => {
  const handleDelete = () => {
    Swal.fire({
      title: 'Əminsən?',
      text: 'Bu mugennini silmek isteyirsinizmi?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hə, sil!',
      cancelButtonText: 'ləğv et',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(artist.id);
        Swal.fire(
          'Silindi!',
          'Mugenni silindi',
          'success'
        );
      }
    });
  };

  const handleAddSong = () => {
    onAddSong(artist.id);
  };

  return (
    <Card>
      <CardMedia component="img" height="140" image={artist.imgSrc} alt={artist.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {artist.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {artist.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {artist.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of songs: {artist.songs.length}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <Button onClick={handleAddSong}>Add Song</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
