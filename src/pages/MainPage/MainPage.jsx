import React, { Component } from 'react';
import './MainPage.css';
// import NavBar from '../../components/NavBar/NavBar';
import TweenLite from 'gsap/TweenMax';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;
    }

    componentDidMount() {
        this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y:100});
    }
    
    render() {
        return <div ref={div => this.myElement = div } />;
        // return (
        //     <div className="MainPage flexed_column">
        //         <NavBar />
        //     </div> 
        // )    
    }
}

export default MainPage;