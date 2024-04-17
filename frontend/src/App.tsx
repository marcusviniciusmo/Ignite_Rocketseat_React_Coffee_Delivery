import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { CoffeesContextProvider } from './contexts/Coffees';
import { UserContextProvider } from './contexts/User';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </UserContextProvider>
      </CoffeesContextProvider>
    </ThemeProvider>
  );
}
