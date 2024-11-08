// el botón que hará que cambie el estado de light a dark

import React from 'react';
import { useTheme } from '../themes/ThemeContext'

const Button = () => {
  const { toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Cambiar Tema
    </button>
  );
};

export default Button;