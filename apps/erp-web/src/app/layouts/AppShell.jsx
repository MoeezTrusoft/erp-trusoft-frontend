import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const AppShell = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex pt-14">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <main className="w-full overflow-x-hidden px-0 py-4">{children}</main>
      </div>
    </div>
  );
};
