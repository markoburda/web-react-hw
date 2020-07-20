import React from 'react';

import '../style/specs.css';
import GetSpecs from "./getSpecs";

export default class Specs extends React.Component {
    render() {
        return(<GetSpecs deviceName={this.props.match.params.devicename}/>);
    }
}