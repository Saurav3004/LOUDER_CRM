import React from 'react';
import Sidebar from './components/crm/Sidebar';
import Dashboard from './components/crm/Dashboard';
import Contacts from './components/crm/Contacts';
import Events from './components/crm/Events';
import Clients from './components/crm/Clients';
import Settings from './components/crm/Settings';
import Login from './pages/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const isAuthenticated = true
  return (
   <BrowserRouter>
      {isAuthenticated ? (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar stays fixed */}
          <Sidebar />

          {/* Right content area */}
          <div className="flex-1 min-w-0 overflow-auto bg-gray-50">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/events" element={<Events />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
