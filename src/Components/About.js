import React from 'react';

import '../style/about.css';

export default class About extends React.Component {
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
                        <li>Watch video reviews from our most favored youtube tech reviewers</li>
                    </ul>

                    <p>Side notes:</p>
                    <ul>
                        <li>The site can now fetch information from <b>Fono Api</b>. Unfortunately, some newer devices are not included and thus the phone database is somewhat outdated.</li>
                        <li>The sidebar is fully functional and now expands upon clicking the brand name. The number of models for every brand is limited to 5 to preserve space, but can be changed to a maximum of 100.</li>
                    </ul>

                    {/*<p>Future vision:</p>*/}
                    {/*<ul>*/}
                    {/*    <li>Automatic database API to fetch and update information</li>*/}
                    {/*    <li>Reviews section</li>*/}
                    {/*    <li>Review sections to expand upon clicking "Read more"</li>*/}
                    {/*    <li>Working sidebar links</li>*/}
                    {/*    <li>Reviewer profile: expand to reveal a video upon clicking the dropdown button</li>*/}
                    {/*    <li>Animations triggered on scrolling</li>*/}
                    {/*    <li>Better icons</li>*/}
                    {/*    <li>Background images</li>*/}
                    {/*    <li>More content!</li>*/}
                    {/*    <li>Fix negative space, clipping issues, etc.</li>*/}
                    {/*    <li>And so on..</li>*/}
                    {/*</ul>*/}
                    {/*<p>Why 90% of this most likely won't ever be implemented?</p>*/}
                    {/*<p>So much to do, so little time... (╥_╥)</p>*/}
                </div>
                <div className="about-image">
                    <img src={require("../img/smartphone-vector.svg")} alt=""/>
                </div>
            </div>
        )
    }
}