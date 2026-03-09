import { createContext } from 'react';

export interface AppThemeContextProps {
  appTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Agora o contexto já vem com valores padrão
export const AppThemeContext = createContext<AppThemeContextProps>({
  appTheme: 'light',
  toggleTheme: () => {}, // função vazia só para evitar erro
});
