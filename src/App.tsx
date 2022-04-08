import { useState, useEffect } from 'react';

import useGif from './hooks/useGif';

const App = () => {
  const [giphData, fetchData] = useGif();

  return (
    <div className="App ">
      <h1>Hello World</h1>
      {/* {giphData} */}
      {console.log(giphData)}
    </div>
  );
};

export default App;
