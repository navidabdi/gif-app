import axios from 'axios';
import { useEffect, useState } from 'react';

interface Giph {
  id: string;
  images: { downsized: { url: string } };
  user: {
    avatar_url: string;
    banner_url: string;
    display_name: string;
    username: string;
  };
}

const useGif = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [giphData, setGiphData] = useState<Giph>();
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const fetchData = async () => {
    const { data } = await axios.get(url);
    setGiphData(data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [giphData, fetchData];
};

export default useGif;
