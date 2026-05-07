import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { CardComponent } from '@/components';
import { ThemeProvider } from 'styled-components';
import { themesList } from '@/resources/themesList';
describe('CardComponent', () => {
    const renderComponent = (theme, className) => render(_jsx(ThemeProvider, { theme: theme, children: _jsx(CardComponent, { className: className }) }));
    themesList.forEach(({ name, theme }) => {
        describe(`${name}`, () => {
            it('should macth the snapshot without any class', () => {
                const { asFragment } = renderComponent(theme);
                expect(asFragment()).toMatchSnapshot();
            });
            it('should macth the snapshot with alert class', () => {
                const { asFragment } = renderComponent(theme, 'alert');
                expect(asFragment()).toMatchSnapshot();
            });
            it('should macth the snapshot with success class', () => {
                const { asFragment } = renderComponent(theme, 'success');
                expect(asFragment()).toMatchSnapshot();
            });
            it('should macth the snapshot with warning class', () => {
                const { asFragment } = renderComponent(theme, 'warning');
                expect(asFragment()).toMatchSnapshot();
            });
        });
    });
});
