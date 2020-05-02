import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes/default.theme';
import GlobalStyle from './themes/globalStyle';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;