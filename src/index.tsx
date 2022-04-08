import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { StateGif } from './contexts/StateGif';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StateGif>
    <StrictMode>
      <App />
    </StrictMode>
  </StateGif>
);
