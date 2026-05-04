import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { pxToRem } from '@/utils';
import { Logo } from '@/components';
import { Theme } from '@/types';
import { ThemeProvider } from 'styled-components';
import { themesList } from '@/resources/themesList';

describe('Logo', () => {
  const renderComponent = (theme: Theme, wight?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <Logo height={height ?? 32} width={wight ?? 32} />
      </ThemeProvider>
    );

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should aplly the correct background image', () => {
        const { container } = renderComponent(theme);
        expect(container.firstChild).toHaveStyleRule(
          'background-image',
          `url(/${theme.appLogo})`
        );
      });

      it('should aplly the correct height and width', () => {
        const { container } = renderComponent(theme, 40, 40);
        expect(container.firstChild).toHaveStyleRule('height', pxToRem(40));
        expect(container.firstChild).toHaveStyleRule('width', pxToRem(40));
      });
    });
  });

  it('should correctly convert pixels to rem for positive values', () => {
    expect(pxToRem(16)).toBe('1rem');
    expect(pxToRem(32)).toBe('2rem');
    expect(pxToRem(8)).toBe('0.5rem');
  });
});
