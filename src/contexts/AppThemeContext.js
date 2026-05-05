import { createContext } from 'react';
// Agora o contexto já vem com valores padrão
export const AppThemeContext = createContext({
    appTheme: 'light',
    toggleTheme: () => { }, // função vazia só para evitar erro
});
