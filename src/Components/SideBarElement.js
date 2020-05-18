import React from 'react';
import '../style/sidebar-element.css'
import SideBarDropDown from "./SidebarDropdown";

export default class SideBarElement extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            name : props.name,
            toggle: false
        }
    }
    toggleDropDown(){
        this.setState({
            toggle: !this.state.toggle
        });
        console.log(this.state.toggle);
        // return <SideBarDropDown brand={this.props.name}/>
    }

    render() {
        if(!this.state.toggle){
        return (
            <div className={"sidebar-element"}>
                {/*<li><a href="#">{this.props.name}</a></li>*/}
                <h1 onClick={() => this.toggleDropDown()}>{this.state.name}</h1>
            </div>
        )
        }
        else{
            return(
            <div className={"sidebar-element"}>
                {/*<li><a href="#">{this.props.name}</a></li>*/}
                <h1 onClick={() => this.toggleDropDown()}>{this.state.name}</h1>
                <SideBarDropDown brand={this.state.name}/>
            </div>
            )
        }
    }
}