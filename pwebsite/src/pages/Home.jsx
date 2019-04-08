import React, {Component} from 'react';

export default class Home extends Component{

// var i = 0;
// var txt = '.App text-align: center .App-logo animation: App-logo-spin infinite 20s linear; height: 40vmin; pointer-events: none;'; 

typeWriter()
{
    if(i < txt.length){
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

render(){
    return(
        <div className = "mainPage">
            <p>
            </p>
        </div>
    );
}
}