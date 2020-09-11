import React from "react";
import {Switch, Route, NavLink, useRouteMatch, useParams} from "react-router-dom";
import Tab from "./Tab";
import Interaction from "./Interaction";
import Review from "./Review";
import filmData from "./data";
import Error from "./Error";
import "./Film.css";

function Film(props) {
    let match = useRouteMatch();
    let params = useParams();
    let key = params.film;

    if (!Object.keys(filmData).includes(key)) {
        return (
            <Error />
        );
    }

    let likedKey = `${key}-liked`;
    let watchedKey = `${key}-watched`;
    let ratingKey = `${key}-rating`;
    let reviewKey = `${key}-review`;
    let {title, year, director, posterSrc, synopsis, tagline} = filmData[key];
    return (
        <main className="main--wrapper flex-col">
            <div className="flex-row main--spacing">
                <div className="sidebar__poster" style={{backgroundImage: `url(${posterSrc})`}}>
                </div>
                <div className="flex-col information--spacing">
                    <div className="flex-row title--spacing">
                        <h1 className="">{title}</h1>
                        <p className="title__p--alignment">{year}</p>
                        <p className="title__p--alignment">Directed by {director}</p>
                    </div>
                    <div className="information-text--sizing">
                        <p className="text-uppercase">{tagline}</p>
                        <p>{synopsis}</p>
                    </div>
                    <div className="tabs">
                        <ul className="tabs__list flex-row">
                            <li className="tabs__item"><NavLink activeClassName="tabs__link--active" className="tabs__link" exact to={`${match.url}`}>Cast</NavLink></li>
                            <li className="tabs__item"><NavLink activeClassName="tabs__link--active" className="tabs__link" exact to={`${match.url}/crew`}>Crew</NavLink></li>
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
            </div>
            <div className="flex-row interaction--spacing">
                <div className="interaction--wrapper flex-col">
                    <Interaction keys={{likedKey, watchedKey, ratingKey}}/>
                </div>
                <div className="review--wrapper">
                    <Review reviewKey={reviewKey}/>
                </div>
            </div>
        </main>
        // <main className="main--wrapper flex-row">
        //     <div className="main--container flex-row">
        //         <div className="sidebar">
        //             <div className="sidebar__poster" style={{backgroundImage: `url(${posterSrc})`}}>
        //             </div>
        //         </div>
        //         <div className="flex-col">
        //             <div className="title--margin">
        //                 <h1 className="title__film-name">{title}</h1>
        //                 <span className="title--inner-spacing">{year}</span>
        //                 Directed by <span className="title--inner-spacing">{director}</span>
        //             </div>
        //             <div className="flex-row">
        //                 <div className="center-content--sizing">
        //                     <div>
        //                         <p className="text-uppercase">
        //                             {tagline}
        //                         </p>
        //                         <p>
        //                             {synopsis}
        //                         </p>
        //                     </div>
        //                     <div className="tabs">
        //                         <ul className="tabs__list flex-row">
        //                             <li className="tabs__item"><NavLink activeClassName="tabs__link--active" className="tabs__link" exact to={`${match.url}`}>Cast</NavLink></li>
        //                             <li className="tabs__item"><NavLink activeClassName="tabs__link--active" className="tabs__link" exact to={`${match.url}/crew`}>Crew</NavLink></li>
        //                         </ul>
        //                         <Switch>
        //                             <Route path={`${match.path}/crew`}>
        //                                 <Tab data={filmData[key].crew} />
        //                             </Route>
        //                             <Route path={match.path}>
        //                                 <Tab data={filmData[key].cast}/>
        //                             </Route>
        //                         </Switch>
        //                     </div>
        //                     <Review reviewKey={reviewKey}/>
        //                 </div>
        //                 <div className="interaction--wrapper flex-col">
        //                     <Interaction keys={{likedKey, watchedKey, ratingKey}}/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    )
}

export default Film;