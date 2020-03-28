import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import About from '../components/About';
import "../App.css";
//https://www.superhi.com/video/smooth-movements-with-javascript
// let mouseX = 0;
// let mouseY = 0;

var $ = require("jquery");

$(window).scroll(function(){
    $(".nameheader").css("opacity", 1 - $(window).scrollTop() / 300);
    $(".about").css("opacity", 0 + $(window).scrollTop() / 300);
  });

// Edge 20+
var isEdge = document.documentMode || /Edge/.test(navigator.userAgent);

export default class Home extends Component{

    //   async componentDidMount() {
    //     await fetch(`https://api.github.com/users/aleks-gdb`)
    //         .then(response => response.json())
    //         .then(data => {this.setState({user: data})});
    //     console.log(this.state.user);
    //     console.log(this.state.check);
    //   }

    render(){
        return(
            <div>
                <Navigation/>
                <Header/>
                <About />
            </div>
        );
    }
}