import React, { Component } from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <NavBar />
                <div className="name">Ryan Gonzales</div>
                <div className="job-location">-Developer // Los Angeles</div>
            </div> 
        );
    };
};

export default MainPage;