import React from 'react';

import "../style/footer.css"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="links-container">
                    <img src={require("../img/SVG/insta.svg")} alt="instagram"/>
                    <img src={require("../img/SVG/twitter.svg")} alt="twitter"/>
                    <img src={require("../img/SVG/linkedin.svg")} alt="linkedin"/>
                </div>
                    <p>Marko Burda 2020</p>
            </div>
        )
    }
}