import React from 'react';
import './Project.css'
import Test from '../Test/Test';
import View from '../View/View';

const Project = (props) => {

    const projectColor = {
        backgroundColor: props.color
    }

    return (
        <div className="Project">
            <div className="project-image" style={projectColor}></div>
            <div className="project-name">{props.name}</div>
            <div className="project-description">{props.description}</div>
            <div className="project-links">
                <Test heroku={props.heroku} />
                <View github={props.github} />
            </div>
        </div>
    );
};

export default Project;