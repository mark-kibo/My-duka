import React, { useState, createContext } from 'react';

export const sidebarcontext = createContext();

const SideBarContextProvider = ({ children }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const userRole = "admin"
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const reusables = {
        state, setState,
        toggleDrawer,
        userRole
    };

    return (
        <sidebarcontext.Provider value={reusables}>
            {children}
        </sidebarcontext.Provider>
    );
}

export default SideBarContextProvider;
