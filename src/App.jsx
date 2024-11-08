import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider} from './themes/ThemeContext';
import './App.css';

const App = () => (
  <ThemeProvider>
    <RoutesApp />
  </ThemeProvider>
);

export default App;