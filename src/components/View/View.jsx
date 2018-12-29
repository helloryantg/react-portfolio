import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.github}>
            <div className="View">View GitHub</div>
        </a>
    );
}

export default View;