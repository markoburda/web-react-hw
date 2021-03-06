import React from 'react';

import "../style/header.css"
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className={"logo"}><img src={require("../img/logo-proto.svg")} alt="logo"/></div>
                <ul>
                    <Link to="/">
                        <li><p>home</p></li>
                    </Link>
                    <Link to="/videos">
                        <li><p>videos</p></li>
                    </Link>
                    <Link to="/about">
                        <li className={'about'}><p>about</p></li>
                    </Link>
                    <SearchBar/>
                </ul>
            </div>
        )
    }
}