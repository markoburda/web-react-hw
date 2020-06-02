import React from 'react';

import '../style/reviews.css';

export default class Reviews extends React.Component {
    render() {
        return (
                <h1 className={"review-desc"}>{this.props.desc}</h1>
        )
    }
}