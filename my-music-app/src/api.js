
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchArtists = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/artists`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error;
  }
};
