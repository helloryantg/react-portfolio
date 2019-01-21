import React from 'react';
import './Test.css'

const Test = (props) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.heroku}>
            <div title="It may take up to a minute for the website to activate" className="Test">Test it!</div>
        </a>
    );
}

export default Test;