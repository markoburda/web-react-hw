import React from 'react';

import '../style/reviews.css';
import ReviewElement from "./ReviewElement";

export default class Reviews extends React.Component {
    render() {
        return (
            <div className={'reviews-container'}>
                <div className="img-container">
                    <img src="" alt=""/>
                </div>
                <ReviewElement desc={"IPHONE 2 SE PRO ULTRA LITE REVIEW SUCH 2017 MANY MAH"}/>
            </div>
        )
    }
}