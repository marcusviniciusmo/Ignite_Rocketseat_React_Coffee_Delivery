import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './routes/Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <h1>Coffee Delivery</h1>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
