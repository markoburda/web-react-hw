import React from "react";
import "../style/gridElement.css"
import {Link} from "react-router-dom";
// import "./index.css"

export default class GridElement extends React.Component{
    render() {
        return (
            <div className={`preview-container ${this.props.className}`}>
                <Link to={{pathname: `specs/${this.props.brandName}`, state: {deviceName: this.props.brandName}}}><img src={this.props.img} alt=""/></Link>
            </div>
        );
    }
}