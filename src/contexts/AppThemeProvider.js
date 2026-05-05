import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles';
import { AppThemeContext } from './AppThemeContext';
export const AppThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem('theme');
    const [appTheme, setAppTheme] = useState(savedTheme ?? 'light');
    const toggleTheme = () => {
        setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    useEffect(() => {
        localStorage.setItem('theme', appTheme);
    }, [appTheme]);
    return (_jsx(AppThemeContext.Provider, { value: { appTheme, toggleTheme }, children: _jsx(ThemeProvider, { theme: appTheme === 'light' ? lightTheme : darkTheme, children: children }) }));
};
