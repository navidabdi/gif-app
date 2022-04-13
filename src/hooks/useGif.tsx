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
  const [giphData, setGiphData] = useState<Giph>();
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let timer: NodeJS.Timeout;

  const fetchData = async (search: string) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=12&api_key=${API_KEY}`;
    const url = `https://api.giphy.com/v1/gifs/trending?limit=12&api_key=${API_KEY}`;
    setIsLoading(true);
    await axios
      .get(`${search?.length > 0 ? searchUrl : url}`)
      .then((data) => {
        setGiphData(data?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    timer = setTimeout(() => fetchData(search), 1000);
    return () => clearTimeout(timer);
  }, [search]);

  return [giphData, fetchData, search, setSearch, isLoading];
};

export default useGif;
