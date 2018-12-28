import React from 'react';
import './Project.css'
import Test from '../Test/Test';
import View from '../View/View';

const Project = (props) => {
    return (
        <div className="Project">
            <div className="project-image"></div>
            <div className="project-name">{props.name}</div>
            <div className="project-description">{props.description}</div>
            <div className="project-links">
                <Test />
                <View />
            </div>
        </div>
    );
};

export default Project;