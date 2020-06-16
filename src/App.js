import React, {useState, useCallback, useEffect} from 'react';
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {getRandom} from "./utility";
import HeaderImage from "./HeaderImage";
import Dropdown from "./Dropdown";
import About from "./About";
import Film from "./Film";
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
        <Link to="/about">About</Link>
        {/* header image and gradient mask */}
        <HeaderImage />
        <header>
          <div>
            {/* this is the gradient mask that sits behind the navbar and on the top of the header image */}
            <Dropdown keys={keys} randomPath={randomPath} filmData={filmData}/>
          </div>
        </header>
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:film">
                <Film />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
