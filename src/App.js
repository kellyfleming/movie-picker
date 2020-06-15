import React, {useState, useCallback, useEffect} from 'react';
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {getRandom} from "./utility";
import Dropdown from "./Dropdown";
import filmData from "./data";
import './App.css';

function App() {
  const keys = Object.keys(filmData);
  let [randomPath, setRandomPath] = useState(""); // change initial state later?
  let location = useLocation();

  const setRandomLink = useCallback(
    (path) => {
      let option = path.split("/")[1]; // either "" or key
      let key = getRandom(keys);
      if (option !== "") {
        while (key === option) {
          key = getRandom(keys);
        }
        setRandomPath(filmData[key].path);
      } else {
        setRandomPath(filmData[key].path);
      }
    }, [keys]
  );

  useEffect(() => {
    setRandomLink(location.pathname);
  }, [location.pathname, setRandomLink]);

  return (
    <div className="App">
        <Link to="/">Home</Link>
        <Dropdown keys={keys} randomPath={randomPath} filmData={filmData}/>
        <Switch>
            <Route>
                {/* Film component */}
            </Route>
        </Switch>
    </div>
  );
}

export default App;
