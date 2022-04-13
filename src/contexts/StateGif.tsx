import { createContext, useContext } from 'react';
import useGif from '../hooks/useGif';

const StateContext = createContext({} as any);
export const StateGif = ({ children }: { children: any }) => {
  const [giphData, fetchData, search, setSearch, isLoading] = useGif();
  return (
    <StateContext.Provider
      value={{ giphData, fetchData, search, setSearch, isLoading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
