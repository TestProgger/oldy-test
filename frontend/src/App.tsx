import React, { useState } from 'react';
import './App.css';


import { useRoutes } from './hooks/useRoutes';
import { useAuth } from './hooks/useAuth';

import {AppContext} from './contexts/AppContext'
import { useSocket } from './hooks/useSocket';
import { useEffect } from 'react';


function App() {

  const { token , setToken , getTokenFromLocalStorage ,  apiEndpoint , login , logout } = useAuth();

  const [ username , setUsername ] = useState<string | null>('');
  const [ profileImage , setProfileImage ] = useState<string | null>('');

  useEffect(() => {
    const tk = getTokenFromLocalStorage();
    if(tk){ setToken( tk ) }
  } , []);

  const routes =  useRoutes(!!token);
  // const routes =  useRoutes(true); 

  return (
    <AppContext.Provider value = {{
      token,
            setToken,
            apiEndpoint , 
            login,
            logout,
            io : useSocket( token as string  , apiEndpoint.replace(/\/api/gmi , '') ),
            username , 
            setUsername,
            profileImage , 
            setProfileImage
          }} >
        <div className="App">
            {routes}
        </div>
    </AppContext.Provider>
  );
}

export default App;
