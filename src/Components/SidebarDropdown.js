import React from 'react';
import "../style/sidebar-dropdown.css"
import {Link} from "react-router-dom";

export default class SideBarDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
            brand: props.brand,
            drop: false
        }
    }

    componentDidMount() {
        const API_TOKEN = "87fcfd79654e5cf5c71a569148d4b6da96b3f4f8858e3337";

        var url = "https://fonoapi.freshpixl.com/v1/getlatest?brand=" + this.state.brand + "&limit=5&token=" + API_TOKEN;
        fetch(url).then(data => data.json()).then(data => {
            console.log("Data: " + data);
            this.setState({
                items: data,
                isLoaded: true
            })
        });
    }

    render() {
        var {items, isLoaded} = this.state;

        if(!isLoaded){
            // return <p className={"err"}>Server is not responding</p>;
            return null;
        }
        else {
            console.log("Return div");
            return (
                <ul className={"device-list"}>{this.state.items.map((item) => (<li key={item.DeviceName} className={"list-link"}><Link to={{pathname: `specs/${item.DeviceName}`, state: {deviceName: item.DeviceName}}}>{item.DeviceName}</Link></li>))}</ul>
            )
        }
    }
}