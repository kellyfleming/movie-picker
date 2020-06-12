import React from 'react';
import {Switch, Route} from "react-router-dom";
import filmData from "./data";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* Dropdown film picker goes here */}
        <Switch>
            <Route>
                {/* Film component */}
            </Route>
        </Switch>
    </div>
  );
}

export default App;
