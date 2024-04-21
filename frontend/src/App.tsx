import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/User';
import { CoffeesContextProvider } from './contexts/Coffees';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <CoffeesContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </CoffeesContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}
