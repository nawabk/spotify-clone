import React from 'react';

import Routes from '../Routes/Routes';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Routes />
      </main>
    </div>
  );
};

export default MainLayout;
