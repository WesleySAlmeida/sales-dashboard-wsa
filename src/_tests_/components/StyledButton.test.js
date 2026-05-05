import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { StyledButton } from '@/components';
import { ThemeProvider } from 'styled-components';
import { themesList } from '@/resources/themesList';
describe('StyledButton', () => {
    const renderComponent = (theme, className, props = {}) => render(_jsx(ThemeProvider, { theme: theme, children: _jsx(StyledButton, { className: className, ...props }) }));
    themesList.forEach(({ name, theme }) => {
        describe(`${name}`, () => {
            it('should macth the snapshot with alert class', () => {
                const { asFragment } = renderComponent(theme, 'alert');
                expect(asFragment()).toMatchSnapshot();
            });
            it('should macth the snapshot with primary class', () => {
                const { asFragment } = renderComponent(theme, 'primary');
                expect(asFragment()).toMatchSnapshot();
            });
            it('should macth the snapshot with borderless-alert class', () => {
                const { asFragment } = renderComponent(theme, 'borderless-alert');
                expect(asFragment()).toMatchSnapshot();
            });
            it('should macth the snapshot with disabled status', () => {
                const { asFragment } = renderComponent(theme, 'primary', {
                    disabled: true,
                });
                expect(asFragment()).toMatchSnapshot();
            });
        });
    });
});
