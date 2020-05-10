import React from 'react';

// import '../style/index.css'
import "../style/grid-preview.css"
import GridElement from "./GridElement";

export default class PreviewGrid extends React.Component {
    render() {
        return (
            <div className="container container-a">
                <div className={"grid-container"}>
                    <GridElement className = "preview-container-a" img = {require("../img/op8pro.jpg")}/>
                    <GridElement className = "preview-highlight" img = {require("../img/s20ultra.jpg")}/>
                    <GridElement className = "preview-container-b" img = {require("../img/ixs.jpg")}/>
                    <GridElement className = "preview-container-c" img = {require("../img/i11pro-1.jpg")}/>
                    <GridElement className = "preview-container-d" img = {require("../img/ise2020.jpg")}/>
                    <GridElement className = "preview-container-e" img = {require("../img/minote10.jpg")}/>
                    <GridElement className = "preview-container-f" img = {require("../img/pixel4.jpg")}/>
                </div>
            </div>
        )
    }
}