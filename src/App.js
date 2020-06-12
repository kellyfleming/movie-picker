import React from 'react';
import {Switch, Route} from "react-router-dom";
import Dropdown from "./Dropdown";
import filmData from "./data";
import './App.css';

function App() {
  return (
    <div className="App">
        <Dropdown filmData={filmData}/>
        <Switch>
            <Route>
                {/* Film component */}
            </Route>
        </Switch>
    </div>
  );
}

export default App;
