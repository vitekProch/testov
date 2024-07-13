import React from 'react';

import { StyledEngineProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
