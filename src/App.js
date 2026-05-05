import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Home, Leads, Login, Registration, Profile } from './pages';
function App() {
    const ProtectedRoute = () => {
        const checkAuthCookies = Cookies.get('Authorization');
        if (!checkAuthCookies) {
            alert('Autenticação necessária!');
            return _jsx(Navigate, { to: "/", replace: true });
        }
        return _jsx(Outlet, {});
    };
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/cadastro", element: _jsx(Registration, {}) }), _jsxs(Route, { element: _jsx(ProtectedRoute, {}), children: [_jsx(Route, { path: "/home", element: _jsx(Home, {}) }), _jsx(Route, { path: "/leads", element: _jsx(Leads, {}) }), _jsx(Route, { path: "/perfil", element: _jsx(Profile, {}) })] })] }) }));
}
export default App;
