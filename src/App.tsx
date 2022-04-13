import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import ReactDOM from 'react-dom';

import { Header, GifBoxes } from './components';
import useGif from './hooks/useGif';
import React from 'react';
import { useStateContext } from './contexts/StateGif';

const Context = React.createContext({} as any);

const App = () => {
  const { giphData } = useStateContext();

  return (
    <Context.Provider value={giphData}>
      <div className="App ">
        <Header />
        <GifBoxes />
      </div>
    </Context.Provider>
  );
};

export default App;
