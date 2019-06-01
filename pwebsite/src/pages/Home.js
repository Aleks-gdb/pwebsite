import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import "../App.css";
//https://www.superhi.com/video/smooth-movements-with-javascript
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function(event){
        const ball = document.querySelector("#ball");
        mouseX = event.pageX;
        mouseY = event.pageY;
        ball.style.left = mouseX + "px";
        ball.style.top = mouseY + "px";
})

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
            <div className="page">
                {/* <Navigation/> */}
                <header className="nameheader" onClick={this.enter}>
                    <h1>
                        Aleksandra
                    </h1>
                    <h1>
                        Dziewulska
                    </h1>
                    <div id="ball"></div>
                </header>
            </div>
        );
    }
}