import React from 'react';

// import '../style/index.css'
import "../style/grid-preview.css"
import GridElement from "./GridElement";

export default class PreviewGrid extends React.Component {
    render() {
        return (
            <div className="container container-a">
                <div className={"grid-container"}>
                    <GridElement className = "preview-container-a" img = {require("../img/akrales_181017_3028_0009.1540080382.jpg")} brandName={"razer phone"}/>
                    <GridElement className = "preview-highlight" img = {require("../img/op8pro.jpg")} brandName={"oneplus 7t pro"}/>
                    <GridElement className = "preview-container-b" img = {require("../img/iphone-x-review-photos-image1-ahdsiyvum0.jpg")} brandName={"apple iphone x"}/>
                    <GridElement className = "preview-container-c" img = {require("../img/iphone-xr-review-feat.jpg")} brandName={"apple iphone xr"}/>
                    <GridElement className = "preview-container-d" img = {require("../img/motorola-razr-2019-handson-06.jpg")} brandName={"motorola razr 2019"}/>
                    <GridElement className = "preview-container-e" img = {require("../img/sony-xperia-xz3-review-image1-szdv1r7kjt.jpg")} brandName={"sony xperia xz3"}/>
                    <GridElement className = "preview-container-f" img = {require("../img/pixel_3_xl_hidenotch_01.jpg")} brandName={"google pixel 3"}/>
                </div>
            </div>
        )
    }
}