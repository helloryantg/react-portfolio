import React, { Component } from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';
import Project from '../../components/Project/Project';
import blackjackVideo from '../../videos/blackjack-video.mp4';
import photoContestVideo from '../../videos/photo-contest.mp4';
import fizzQuizVideo from '../../videos/fizz-quiz.mp4';
import completeMeVideo from '../../videos/complete-me.mp4';
import AboutMe from '../../components/AboutMe/AboutMe';

const completeMeTech = [
    'React', 'Node.js', 'Express', 'Socket.io', 
    'HTML5', 'CSS', 'JavaScript', 'API', 'JWT', 
    'Bcrypt', 'MongoDB', 'Mongoose'
];

const fizzQuizTech = [
    'Express', 'Node.js', 'MongoDB', 'JavaScript',
    'OAuth', 'API', 'HTML', 'CSS'
];

const likeTech = [
    'Python', 'Django', 'Boto3', 'AWS', 'SQLite3',
    'HTML', 'CSS'
];

const blackjackTech = [
    'JavaScript', 'HTML', 'CSS'
];

class MainPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hover: null
        };
    }

    onMouseEnterHandler = (projectNumber) => {
        this.setState({
            hover: projectNumber
        });
    }

    onMouseLeaveHandler = () => {
        this.setState({
            hover: null
        });
    }

    render() {
        return (
            <div className="MainPage">
                <NavBar />

                <div className="name">Ryan Gonzales</div>
                <div className="job-location">Full-Stack Developer // Los Angeles</div>

                <AboutMe />

                <div className="project">Projects</div>   

                <Project 
                    name="Complete Me!"
                    description="Complete me is a 2-player, real-time, competitive, word completion game using Socket.io. I used React.js for the frontend, Node.js/Express.js for the backend, and MongoDB for the database. For authorization, I used Bcrypt and JWT (JSON Web Tokens). "
                    color="#FFD991"
                    heroku="https://complete-me-multiplayer.herokuapp.com/"
                    github="https://github.com/helloryantg/complete-me"
                    technologies={completeMeTech}
                    onMouseEnterHandler={this.onMouseEnterHandler}
                    onMouseLeaveHandler={this.onMouseLeaveHandler}
                    hover={this.state.hover}
                    projectNumber="1"
                    video={completeMeVideo}
                /> 
                <Project 
                    name="Fizz Quiz"
                    description='Fizz-Quiz is a "hot potato", trivia-based, drinking game. Play with friends while answering trivia questions as you beat the clock! This is a mobile-friendly game that uses a Trivia API using Node.js, Express.js, JavaScript, and MongoDB. During this group project, my responsibilities include the GitHub manager and API manager.'
                    color="#FFAF91"
                    heroku="https://fizzquizz.herokuapp.com/"
                    github="https://github.com/helloryantg/fizz-quiz"
                    technologies={fizzQuizTech}
                    onMouseEnterHandler={this.onMouseEnterHandler}
                    onMouseLeaveHandler={this.onMouseLeaveHandler}
                    hover={this.state.hover}
                    projectNumber="2"
                    video={fizzQuizVideo}
                />

                <Project 
                    name="Like."
                    description="Like. is a photography contest website where users can share their photographs and vote their most favorite per category. This app was developed using Python and Django using Boto3 and AWS for storing photos."
                    color="#91BBFF"
                    heroku="https://salty-sea-47975.herokuapp.com/"
                    github="https://github.com/helloryantg/photo_contest"
                    technologies={likeTech}
                    onMouseEnterHandler={this.onMouseEnterHandler}
                    onMouseLeaveHandler={this.onMouseLeaveHandler}
                    hover={this.state.hover}
                    projectNumber="3"
                    video={photoContestVideo}
                />

                <Project 
                    name="BlackJack"
                    description="Blackjack is my first project that I tackled game logic to make a functioning game using Vanilla JavaScript, HTML, and CSS."    
                    color="#568418"
                    heroku="https://helloryantg.github.io/blackjack-game/"
                    github="https://github.com/helloryantg/blackjack-game"
                    technologies={blackjackTech}
                    onMouseEnterHandler={this.onMouseEnterHandler}
                    onMouseLeaveHandler={this.onMouseLeaveHandler}
                    hover={this.state.hover}
                    projectNumber="4"
                    video={blackjackVideo}
                />

                <div className="footer">Ryan Gonzales - 2019</div>
            </div> 
        );
    };
};

export default MainPage;