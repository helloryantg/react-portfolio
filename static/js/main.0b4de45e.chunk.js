(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/blackjack-video.29f2b74c.mp4"},function(e,t,a){e.exports=a.p+"static/media/photo-contest.7174b4c3.mp4"},function(e,t,a){e.exports=a.p+"static/media/fizz-quiz.8889838d.mp4"},function(e,t,a){e.exports=a.p+"static/media/complete-me.7a6f99ab.mp4"},function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(11),i=a.n(r),c=(a(22),a(4)),s=a(5),l=a(8),u=a(6),m=a(9),h=(a(24),a(26),a(28),function(){return n.a.createElement("div",{className:"NavBar"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/helloryantg"},"Github"),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/document/d/e/2PACX-1vS-ly5PsuwkIUlTWLAWyA_bBL0UzVl8-QCqodM-6dpZP50GlVYlX40H6RBYzj7c_Io79OnDU1jQQ_Cl/pub?embedded=true"},"Resume"),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ryantgonzales/"},"LinkedIn"))}),p=(a(30),a(32),function(e){return n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.heroku},n.a.createElement("div",{className:"Test"},"Test it!"))}),d=(a(34),function(e){return n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.github},n.a.createElement("div",{className:"View"},"View GitHub"))}),v=function(e){return n.a.createElement("div",{className:"Project"},n.a.createElement("div",{className:"project-image",onMouseEnter:function(){return e.onMouseEnterHandler(e.projectNumber)},onMouseLeave:e.onMouseLeaveHandler},n.a.createElement("video",{className:"project-video",src:e.video,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0}),e.hover===e.projectNumber?n.a.createElement("div",{className:"project-technologies"},n.a.createElement("span",{id:"made-with"},"Made with:"),n.a.createElement("ul",{className:"technologies-container"},e.technologies.map(function(e){return n.a.createElement("li",{className:"technologies-each"},e)}))):null),n.a.createElement("div",{className:"project-name"},e.name),n.a.createElement("div",{className:"project-description"},e.description),n.a.createElement("div",{className:"project-links"},n.a.createElement(p,{heroku:e.heroku}),n.a.createElement(d,{github:e.github})))},g=a(12),b=a.n(g),f=a(13),E=a.n(f),k=a(14),j=a.n(k),M=a(15),y=a.n(M),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onMouseEnterHandler=function(e){a.setState({hover:e})},a.onMouseLeaveHandler=function(){a.setState({hover:null})},a.state={hover:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"MainPage"},n.a.createElement(h,null),n.a.createElement("div",{className:"name"},"Ryan Gonzales"),n.a.createElement("div",{className:"job-location"},"-Developer // Los Angeles"),n.a.createElement("div",{className:"project"},"Projects"),n.a.createElement(v,{name:"Complete Me!",description:"Complete me is a 2-player word completion game using Socket.io for real-time play.",color:"#FFD991",heroku:"https://complete-me-multiplayer.herokuapp.com/",github:"https://github.com/helloryantg/complete-me",technologies:["React","Node.js","Express","Socket.io","HTML5","CSS","JavaScript","API","JWT","Bcrypt","MongoDB","Mongoose"],onMouseEnterHandler:this.onMouseEnterHandler,onMouseLeaveHandler:this.onMouseLeaveHandler,hover:this.state.hover,projectNumber:"1",video:y.a}),n.a.createElement(v,{name:"Fizz Quiz",description:'Fizz-Quiz is a "hot potato", trivia-based, drinking game. Play with friends while answering trivia questions as you beat the clock!',color:"#FFAF91",heroku:"https://fizzquizz.herokuapp.com/",github:"https://github.com/helloryantg/fizz-quiz",technologies:["Express","Node.js","MongoDB","JavaScript","OAuth","API","HTML","CSS"],onMouseEnterHandler:this.onMouseEnterHandler,onMouseLeaveHandler:this.onMouseLeaveHandler,hover:this.state.hover,projectNumber:"2",video:j.a}),n.a.createElement(v,{name:"Like.",description:"Like. is a photography contest website where users can share their photographs and vote their most favorite per category.",color:"#91BBFF",heroku:"https://salty-sea-47975.herokuapp.com/",github:"https://github.com/helloryantg/photo_contest",technologies:["Python","Django","Boto3","AWS","SQLite3","HTML","CSS"],onMouseEnterHandler:this.onMouseEnterHandler,onMouseLeaveHandler:this.onMouseLeaveHandler,hover:this.state.hover,projectNumber:"3",video:E.a}),n.a.createElement(v,{name:"BlackJack",description:"Blackjack is my first project that I tackled game logic to make a functioning game using Vanilla JavaScript, HTML, and CSS.",color:"#568418",heroku:"https://helloryantg.github.io/blackjack-game/",github:"https://github.com/helloryantg/blackjack-game",technologies:["JavaScript","HTML","CSS"],onMouseEnterHandler:this.onMouseEnterHandler,onMouseLeaveHandler:this.onMouseLeaveHandler,hover:this.state.hover,projectNumber:"4",video:b.a}),n.a.createElement("div",{className:"footer"},"Ryan Gonzales - 2019"))}}]),t}(o.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(H,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(40);i.a.render(n.a.createElement(w.a,{basename:"/react-portfolio"},n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.0b4de45e.chunk.js.map