import React, { useState, createContext, useEffect } from "react";


import { jwtDecode } from "jwt-decode";

export const sidebarcontext = createContext();

const SideBarContextProvider = ({ children }) => {
 

  // let [authTokens, setAuthTokens] = useState(() => {
  //   const storedTokens = localStorage.getItem("authtokens");
  //   return storedTokens ? JSON.parse(storedTokens) : null;
  // });

  let [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? { token: storedToken } : null;
  });

  let decoded_user;


  if(user?.token){
      decoded_user=jwtDecode(user?.token);
  }

  

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const userRole = "admin";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const reusables = {
    state,
    setState,
    toggleDrawer,
    userRole,
    user,
    decoded_user
  };

  return (
    <sidebarcontext.Provider value={reusables}>
      {children}
    </sidebarcontext.Provider>
  );
};

export default SideBarContextProvider;
