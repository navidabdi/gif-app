import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setdata] = useState({});
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const fetchData = async () => {
    const { data } = await axios.get(url);
    setdata(data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App ">
      <h1>Hello World</h1>
      {console.log(data)}
    </div>
  );
};

export default App;
