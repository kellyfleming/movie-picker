import React from "react";
import {Link} from "react-router-dom";
import "./About.css";

function About() {
    return (
        <div className="About">
            <h1>Movie Picker</h1>
            <hr/>
            <h4>Welcome! Choose a film or click random for a surprise.</h4>
            <hr/>
            <p>A <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> application intended to simulate some of the features of a specific film's <a href="https://letterboxd.com/film/the-witch-2015/" target="_blank" rel="noopener noreferrer">page</a> on <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer">Letterboxd</a> <em>(this project is not related to or endorsed by Letterboxd in any way)</em>. Components are functional and utilize hooks.</p>
            <p>Page and individual component layout were achieved through CSS3 Flexbox, with one component also utilizing the CSS grid.</p>
            <p>Custom dropdown in navbar made with HTML, CSS, and vanilla JavaScript.</p>
            <p>Icons provided by <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>. I personally modified the star SVGs used in this project, and my modifications are not endorsed by Font Awesome. All icons used are used under the <a href="https://fontawesome.com/license" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0 International License</a>.</p>
            <p><a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">React Router</a> was used for routing.</p>
            <p>All film data sourced from <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie Database (TMDb)</a>.</p>
            <p>All of the chosen films are somewhere in my top 25, with <Link to="/the-witch">The Witch</Link> holding steady at #1.</p>
        </div>
    );
}

export default About;