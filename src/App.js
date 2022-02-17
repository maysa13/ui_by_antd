import React from 'react';

/* Plugin */
import { HashRouter, Route, Switch } from "react-router-dom"

/* Pages */
import MainPage from "./pages/mainpage"

import './style/theme.less'
import './App.css'

function App() {
  return (
      <HashRouter>
        <div className="App">
          <MainPage/>
        </div>
      </HashRouter>
  );
}

export default App;
