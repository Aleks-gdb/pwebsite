import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Navigation from '../components/Navigation';
import "../App.css";
//https://www.superhi.com/video/smooth-movements-with-javascript
// let mouseX = 0;
// let mouseY = 0;

var $ = require("jquery");

$(window).scroll(function(){
    $(".nameheader").css("opacity", 1 - $(window).scrollTop() / 300);
    $(".about").css("opacity", 0 + $(window).scrollTop() / 300);
  });

// document.addEventListener("mousemove", function(event){
//         const ball = document.querySelector("#ball");
//         mouseX = event.pageX;
//         mouseY = event.pageY;
//         ball.style.left = mouseX + "px";
//         ball.style.top = mouseY + "px";
// })

$(window).bind('mousemove', function(e){
    $('#ball').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});


export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = { user: [] };
      }

      async componentDidMount() {
        await fetch(`https://api.github.com/users/aleks-gdb`)
            .then(response => response.json())
            .then(data => {this.setState({user: data})});
        console.log(this.state.user);
      }

    render(){
        return(
            <div>
                {/* <Navigation/> */}
                <header className="nameheader">
                    <h1>
                        Aleksandra
                    </h1>
                    <h1>
                        Dziewulska
                    </h1>
                    <div id="ball"></div>
                </header>
                <div className="about" aos="fade-down">
                    <h1>Hello</h1>
                    <p>My name is Aleksandra Dziewulska and I am currently a full time student
                       at California State University Long Beach. I plan to graduate in May 2020 with a B.S. in Computer Science.
                       I enjoy learning new technologies, creating web apps, and collaborating on projects.
                    </p>
                </div>
            </div>
        );
    }
}