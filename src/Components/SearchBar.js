import React from "react";
import "../style/search-bar.css"
import { Redirect, useHistory, withRouter} from "react-router-dom";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.history.push(`/specs/${this.textInput.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit} className={"search-container"}>
                <input type="text" placeholder={"Search:"} className={"search-bar"} ref={(input) => this.textInput = input} onChange={this.handleChange.bind(this)}/>
                <input type="submit" className={"submit-btn"} value={"Go"}/>
            </form>
        );
    }
}

export default withRouter(SearchBar)