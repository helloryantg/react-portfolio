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
                    color="#FFD991"
                    heroku="https://dashboard.heroku.com/apps/complete-me-multiplayer"
                    github="https://github.com/helloryantg/complete-me"
                    technologies="React Node.js Express Socket.io HTML5 CSS JavaScript API JWT Bcrypt MongoDB Mongoose mLab"
                />
                <Project 
                    name="Fizz Quiz"
                    description='Fizz-Quiz is a "hot potato", trivia-based, drinking game. Play with friends while answering trivia questions as you beat the clock!'
                    color="#FFAF91"
                    heroku="https://fizzquizz.herokuapp.com/"
                    github="https://github.com/helloryantg/fizz-quiz"
                />

                <Project 
                    name="Like."
                    description="Like. is a photography contest website where users can share their photographs and vote their most favorite per category."
                    color="#91BBFF"
                    heroku="https://salty-sea-47975.herokuapp.com/"
                    github="https://github.com/helloryantg/photo_contest"
                />

                <Project 
                    name="BlackJack"
                    description="Blackjack is my first project that I tackled game logic to make a functioning game using Vanilla JavaScript, HTML, and CSS."    
                    color="#568418"
                    heroku="https://helloryantg.github.io/blackjack-game/"
                    github="https://github.com/helloryantg/blackjack-game"
                />

                <div className="footer">Ryan Gonzales - 2019</div>
            </div> 
        );
    };
};

export default MainPage;