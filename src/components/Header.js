import React, {Component} from 'react';
import "../App.css";

// Edge 20+
var isEdge = document.documentMode || /Edge/.test(navigator.userAgent);

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            user: [],
            check: isEdge
        };
      }

    render(){
        return(
            <div id="header" name="header">
                <header className="nameheader">
                    <h1 className={(this.state.check ? 'true' : 'false')}>
                        Aleksandra
                    </h1>
                    <h1 className={(this.state.check ? 'true' : 'false')}>
                        Dziewulska
                    </h1>
                </header>
            </div>
        );
    }
}