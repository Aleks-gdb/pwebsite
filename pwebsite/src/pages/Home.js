import React, {Component} from 'react';
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

render(){
    return(
        <div className="main">
            <div className="header">
                <h1 id="name">
                    Aleksandra<br/>Dziewulska
                </h1>
                <div id="ball"></div>
            </div>
            <div className="content">
                <h1>
                </h1>
            </div>
        </div>
    );
}
}