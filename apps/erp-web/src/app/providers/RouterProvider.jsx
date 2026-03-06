import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell.jsx';
import Dashboard from '../pages/hr/Dashboard';
import { routes } from '../routes/index.jsx';

export function RouterProvider() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/hr/dashboard" element={<Dashboard />} />

          {/* All other routes */}
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}