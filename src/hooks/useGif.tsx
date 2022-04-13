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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=4&api_key=${API_KEY}`;
  const url = `https://api.giphy.com/v1/gifs/trending?limit=4&api_key=${API_KEY}`;
  let timer: NodeJS.Timeout;

  const fetchData = async (search: string) => {
    setIsLoading(true);
    await axios
      .get(`${search?.length > 0 ? searchUrl : url}`)
      .then((data) => {
        setGiphData(data?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const makeDelayToFetchTheSearchQuery = (search: string) => {
    timer = setTimeout(() => {
      fetchData(search);
    }, 2000);
  };

  useEffect(() => {
    clearTimeout(timer);
    makeDelayToFetchTheSearchQuery(search);
  }, [search]);

  return [giphData, fetchData, search, setSearch, isLoading];
};

export default useGif;
