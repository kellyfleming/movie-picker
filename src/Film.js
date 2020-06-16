import React from "react";
import {Switch, Route, useRouteMatch, useParams} from "react-router-dom";
import filmData from "./data";

function Film(props) {
    let match = useRouteMatch();
    let params = useParams();
    let key = params.film;
    let {title, year, director, posterSrc, synopsis, tagline} = filmData[key];
    return (
        <main>
            {/* wrapper */}
            <div>
                {/* container */}
                <div>
                    {/* sidebar stuff */}
                    <div style={{backgroundImage: `url(${posterSrc})`, height: "300px", width: "200px"}}>
                    </div>
                </div>
                <div>
                    <div>
                        {title}
                        {year}
                        Directed by {director}
                    </div>
                    <div>
                        <div>
                        {tagline}
                        {synopsis}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Film;