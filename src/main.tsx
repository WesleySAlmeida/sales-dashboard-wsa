import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { AppThemeProvider } from './contexts/AppThemeProvider';
import { Provider } from 'react-redux';
import store from './redux/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </Provider>
  </StrictMode>
);
