import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Dropdown from "./Dropdown";
import filmData from "./data";
import './App.css';

function App() {
  return (
    <div className="App">
        <Link to="/">Home</Link>
        <Dropdown keys={Object.keys(filmData)} filmData={filmData}/>
        <Switch>
            <Route>
                {/* Film component */}
            </Route>
        </Switch>
    </div>
  );
}

export default App;
