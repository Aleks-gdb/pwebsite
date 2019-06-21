import React, {Component} from 'react';
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

    constructor(props){
        super(props);
        this.state = {
            mode: true, //dark mode by default, false for light mode
        }
        this.enter = this.enter.bind(this)
    }

    enter(){
        console.log(this.state.mode);
    }

    render(){
        return(
            <div>
                <Navigation/>
                <header className="nameheader" onClick={this.enter}>
                    <h1>
                        Aleksandra
                    </h1>
                    <h1>
                        Dziewulska
                    </h1>
                    <div id="ball"></div>
                </header>
                <div class="about" aos="fade-down">
                    <h1>Hello</h1>
                </div>
            </div>
        );
    }
}