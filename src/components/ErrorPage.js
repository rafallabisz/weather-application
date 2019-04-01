import React from 'react';
import "../styles/ErrorPage.css";

const ErrorPage = (props) => {
    return (
        <div className="information__errorPage">
            <h1 className="errorPage--title">{`We don't have ${props.city} in the city base.`}</h1>
        </div>
    );
}

export default ErrorPage;