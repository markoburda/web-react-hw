import React from 'react';
import '../style/sidebar-element.css'

export default class SideBarElement extends React.Component {
    render() {
        return (
            <div className={"sidebar-element"}>
                <li><a href="#">{this.props.name}</a></li>
            </div>
        )
    }
}