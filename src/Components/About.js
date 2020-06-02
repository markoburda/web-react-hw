import React from 'react';

import '../style/about.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className={'about-container'}>
                <div className="about-text">
                    <h1>ABOUT PAGE</h1>
                    <p>This website is created with React App and uses yarn package manager <br/>
                    The purpose of this site is to provide useful and sometimes entertaining information <br/>
                        regarding latest smartphones.</p>
                    <p><b>Core features:</b></p>
                    <ul>
                        <li>Quickly view specifications of a smartphone by clicking on one of the images on the front page</li>
                        <li>Find the model you need using the left sidebar on the home page</li>
                        <li>Read reviews on smartphone models from various sources</li>
                        <li>Watch video reviews from our most favored youtube tech reviewers</li>
                    </ul>
                    <p>Future vision:</p>
                    <ul>
                        <li>Automatic database API to fetch and update information</li>
                        <li>Reviews section</li>
                        <li>Review sections to expand upon clicking "Read more"</li>
                        <li>Working sidebar links</li>
                        <li>Reviewer profile: expand to reveal a video upon clicking the dropdown button</li>
                        <li>Animations triggered on scrolling</li>
                        <li>Better icons</li>
                        <li>Background images</li>
                        <li>More content!</li>
                        <li>Fix negative space, clipping issues, etc.</li>
                        <li>And so on..</li>
                    </ul>
                    <p>Why 90% of this most likely won't ever be implemented?</p>
                    <p>So much to do, so little time... (╥_╥)</p>
                </div>
                <div className="about-image">
                    <img src={require("../img/smartphone-vector.svg")} alt=""/>
                </div>
            </div>
        )
    }
}