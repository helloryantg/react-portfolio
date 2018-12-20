import React, { Component } from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage flexed centered aligned">
                <NavBar />
                <p>Hello World!</p>
            </div> 
        )    
    }
}

export default MainPage;