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
            <header className="nameheader">
                <h1>
                    Aleksandra
                </h1>
                <h1>
                    Dziewulska
                </h1>
                {/* <div id="ball"></div> */}
            </header>
        );
    }
}