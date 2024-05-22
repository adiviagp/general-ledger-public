import React from 'react';
import { NavbarWrapper } from '@src/components/navbar/navbar';
import { SidebarWrapper } from '@src/components/sidebar/sidebar';
import { SidebarContext } from './layout-context';
import { useLockedBody } from '@src/hooks/useBodyLock';
import { Navigate, Outlet } from 'react-router-dom';

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex bg-slate-50">
        <SidebarWrapper />
        <NavbarWrapper>
          <div className="px-8 py-3">
            <Outlet />
          </div>
        </NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
};
