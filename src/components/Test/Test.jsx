import React from 'react';
import './Test.css'

const Test = (props) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.heroku}>
            <div className="Test">Test it!</div>
        </a>
    );
}

export default Test;