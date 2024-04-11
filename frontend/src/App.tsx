import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
