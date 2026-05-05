import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { AppThemeProvider } from './contexts/AppThemeProvider';
import { Provider } from 'react-redux';
import store from './redux/index';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(Provider, { store: store, children: _jsxs(AppThemeProvider, { children: [_jsx(GlobalStyle, {}), _jsx(App, {})] }) }) }));
