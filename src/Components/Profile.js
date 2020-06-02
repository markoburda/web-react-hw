import React from 'react';

import '../style/videos.css';

export default class Videos extends React.Component {
    render() {
        return (
            <div className={'profile-container'}>
                <div className={"profile-avatar"}>
                <img src={this.props.img} alt="dave"/>
                </div>
                <div className="profile-text">
                    <h1 className={"text-emphasize"}>{this.props.name}</h1>
                    <p>{this.props.desc}</p>
                    <div className="btn-container">
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className={"visit-btn"}>Visit</button></a>;
                    </div>
                </div>
            </div>
        )
    }
}