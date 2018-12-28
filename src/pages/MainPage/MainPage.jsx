import React, { Component } from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';
import Project from '../../components/Project/Project';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <NavBar />

                <div className="name">Ryan Gonzales</div>
                <div className="job-location">-Developer // Los Angeles</div>

                <Project 
                    name="Complete Me!"
                    description="Complete me is a 2-player word completion game using Socket.io for real-time play."
                    test=""
                    github=""
                />
                <Project />
            </div> 
        );
    };
};

export default MainPage;