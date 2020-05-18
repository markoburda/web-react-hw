import React from "react";
import "../style/search-bar.css"
import { useHistory } from "react-router-dom";

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const history = useHistory();
        history.push(`/specs/${this.textInput.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form className={"search-container"}>
                <input type="text" placeholder={"Search:"} className={"search-bar"} ref={(input) => this.textInput = input}/>
                <input type="submit" onClick={this.handleSubmit.bind(this)} className={"submit-btn"} value={"Go"}/>
            </form>
        );
    }
}