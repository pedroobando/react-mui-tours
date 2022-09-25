import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { NavBar } from './components';

import { Tour, Home } from './pages';
import { lightTheme } from './themes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tour/:tourName/:cityId',
    element: <Tour />,
  },
]);

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline enableColorScheme />
      <NavBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
