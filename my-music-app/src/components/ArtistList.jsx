import React, { useEffect, useState } from 'react';
import { fetchArtists } from '../api';
import ArtistCard from './ArtistCard';

const ArtistList = () => {
    const [artists, setArtists] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchArtists();
          setArtists(data);
        } catch (error) {
          console.error('Error fetching artists:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleDeleteArtist = async (artistId) => {
      try {
        await fetch(`http://localhost:3000/artists/${artistId}`, {
          method: 'DELETE',
        });
        
        setArtists(artists.filter((artist) => artist.id !== artistId));
      } catch (error) {
        console.error('Error deleting artist:', error);
      }
    };
  
    const handleAddSongToArtist = async (artistId) => {
    };
  
    return (
      <div>
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            artist={artist}
            onDelete={handleDeleteArtist}
            onAddSong={handleAddSongToArtist}
          />
        ))}
      </div>
    );
  };
  
export default ArtistList;
