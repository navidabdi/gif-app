import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import ReactDOM from 'react-dom';

import { Header, GifBox } from './components';
import useGif from './hooks/useGif';
import React from 'react';

const Context = React.createContext({} as any);

const App = () => {
  const [giphData, fetchData] = useGif();

  return (
    <Context.Provider value={giphData}>
      <div className="App ">
        <Header />
        <GifBox />
      </div>
    </Context.Provider>
  );
};

export default App;
