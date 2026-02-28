import 'styled-components';
import type { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
export interface Theme {
  appBackground: string;
  appColor: string;
  appDefaultStroke: string;
  appLogo: string;
  appSkeletonFrom: string;
  appSkeletonTo: string;
  buttons: {
    alert: string;
    alertColor: string;
    alertHover: string;
    desabled: string;
    desabledColor: string;
    primary: string;
    primaryColor: string;
    primaryHover: string;
  };
  card: {
    alert: string;
    background: string;
    border: string;
    success: string;
    warning: string;
  };
  textInput: {
    active: string;
    acttiveColor: string;
    borderColor: string;
    desabled: string;
    desabledBorderColor: string;
    desabledColor: string;
    placeholderColor: string;
  };
  typographies: {
    error: string;
    subtitle: string;
    success: string;
  };
}
