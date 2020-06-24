import React from "react";
import {Switch, Route, NavLink, useRouteMatch, useParams} from "react-router-dom";
import Tab from "./Tab";
import Interaction from "./Interaction";
import filmData from "./data";
import "./Film.css";

function Film(props) {
    let match = useRouteMatch();
    let params = useParams();
    let key = params.film;
    let likedKey = `${key}-liked`;
    let watchedKey = `${key}-watched`;
    let ratingKey = `${key}-rating`;
    let {title, year, director, posterSrc, synopsis, tagline} = filmData[key];
    return (
        <main className="Main-wrapper">
            <div className="Main-container">
                <div className="Main-sidebar">
                    <div className="Sidebar-poster" style={{backgroundImage: `url(${posterSrc})`}}>
                    </div>
                </div>
                <div className="Main-content">
                    <div className="Content-title">
                        <h1>{title}</h1>
                        <span>{year}</span>
                        Directed by <span>{director}</span>
                    </div>
                    <div className="Content-wrapper">
                        <div className="Content-left">
                            <div className="Content-description">
                                <p className="Description-tagline">
                                    {tagline}
                                </p>
                                <p className="Description-synopsis">
                                    {synopsis}
                                </p>
                            </div>
                            <div className="Content-tabs">
                                <ul>
                                    <li><NavLink activeClassName="Active-tab" exact to={`${match.url}`}>Cast</NavLink></li>
                                    <li><NavLink activeClassName="Active-tab" exact to={`${match.url}/crew`}>Crew</NavLink></li>
                                </ul>
                                <Switch>
                                    <Route path={`${match.path}/crew`}>
                                        <Tab data={filmData[key].crew} />
                                    </Route>
                                    <Route path={match.path}>
                                        <Tab data={filmData[key].cast}/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        <div className="Content-right">
                            <Interaction keys={{likedKey, watchedKey, ratingKey}}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Film;