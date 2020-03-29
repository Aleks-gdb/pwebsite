import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import About from '../components/About';
import "../App.css";
import Github from '../components/Github';

var $ = require("jquery");

$(window).scroll(function(){
    $(".nameheader").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".about").css("opacity", 0 + $(window).scrollTop() / 500);
  });

export default class Home extends Component{

    render(){
        return(
            <div>
                <Navigation/>
                <Header/>
                <About />
                <Github />
            </div>
        );
    }
}