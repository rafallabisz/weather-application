import React from 'react';
import "../styles/HomePage.css";
import { Redirect } from 'react-router-dom'
const HomePage = (props) => {
    return (
        <div className="information__homePage">
            <h1 className="homePage--title">Welcome in my Weather App.</h1>
            <p className="homePage--description">Find your city and check the current weather!</p>
            {props.activeSubmit && <Redirect to="/today" />}
        </div>
    );
}

export default HomePage;