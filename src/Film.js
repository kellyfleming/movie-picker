import React from "react";
import {Switch, Route, useRouteMatch, useParams} from "react-router-dom";
import filmData from "./data";

function Film(props) {
    let match = useRouteMatch();
    let params = useParams();
    let key = params.film;
    let {title, year, director, posterSrc, synopsis, tagline} = filmData[key];
    return (
        <main className="Main-wrapper">
            <div className="Main-container">
                <div className="Main-sidebar">
                    <div className="Sidebar-poster" style={{backgroundImage: `url(${posterSrc})`, height: "300px", width: "200px"}}>
                    </div>
                </div>
                <div className="Main-content">
                    <div className="Content-title">
                        {title}
                        {year}
                        Directed by {director}
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

                            </div>
                        </div>
                        <div className="Content-right">
                            <div className="Content-interaction-wrapper">
                                <div className="Content-interaction-toggles">

                                </div>
                                <div className="Content-interaction-rating">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Film;