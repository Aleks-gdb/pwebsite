import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(
            <div id="about" name="about">
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