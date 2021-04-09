import React, { useState } from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import {auth,provider} from './firebase';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './component/Login';
import { useStateValue } from './component/Stateprovider';

  function App() {
    const [{user}, dispatch] = useStateValue();
    return (
      <div className="app">
          {!user ? (
            <Login/>
          ):(
            <div className="app_body">
              <Router>
                <Sidebar/>
                <Switch>
                  <Route path="/rooms/:roomId">
                    <Chat/>
                  </Route>
                  <Route path="/">
                    <Chat/>
                  </Route>              
                </Switch>            
              </Router>
            </div>
          )}
          
      </div>
    );
}

export default App;
