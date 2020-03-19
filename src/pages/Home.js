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

// Edge 20+
var isEdge = document.documentMode || /Edge/.test(navigator.userAgent);

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            user: [],
            check: isEdge
        };
      }

      async componentDidMount() {
        await fetch(`https://api.github.com/users/aleks-gdb`)
            .then(response => response.json())
            .then(data => {this.setState({user: data})});
        console.log(this.state.user);
        console.log(this.state.check);
      }

    render(){
        return(
            <div>
                {/* <Navigation/> */}
                <header className="nameheader">
                    <h1 class={(this.state.check ? 'true' : 'false')} >
                        Aleksandra
                    </h1>
                    <h1 class={(this.state.check ? 'true' : 'false')}>
                        Dziewulska
                    </h1>
                    {!this.state.check ? <div id="ball"></div> : <div></div>}
                </header>
                <div className="about" aos="fade-down">
                    <h1>Hi, I'm Aleks!</h1>
                    <p>I am currently a full time student at California State University Long Beach. 
                       I plan to graduate in May 2020 with a B.S. in Computer Science.
                       I enjoy learning new technologies, creating web apps, and collaborating on projects. <br/><br/>
                    </p>
                </div>
            </div>
        );
    }
}