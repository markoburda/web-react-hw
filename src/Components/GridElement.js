import React from "react";
import "../style/gridElement.css"
// import "./index.css"

export default class GridElement extends React.Component{
    render() {
        return (
            <div className={`preview-container ${this.props.className}`}>
                <img src={this.props.img} alt=""/>
            </div>
        );
    }
}