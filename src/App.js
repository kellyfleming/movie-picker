import React, {useState, useCallback, useEffect} from 'react';
import {Switch, Route, useLocation, Redirect} from "react-router-dom";
import {getRandom} from "./utility";
import HeaderImage from "./HeaderImage";
import Navbar from "./Navbar";
import About from "./About";
import Film from "./Film";
import filmData from "./data";

function App() {
  const keys = Object.keys(filmData);
  let [randomPath, setRandomPath] = useState("");
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
        <HeaderImage />
        <Navbar randomPath={randomPath}/>
        <Switch>
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
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
