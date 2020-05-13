import React from 'react';

import '../style/home.css';
import PreviewGrid from "./PreviewGrid";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import SideBar from "./SideBar";

export default class Header extends React.Component {
    render() {
        return (
            <div className={'container container-a'}>
                <aside>
                    <SideBar className="sidebar"/>
                </aside>
                <section>
                    <div  className={"grid-title"}><p>latest smartphones</p></div>
                    <PreviewGrid/>
                    <p className={"grid-desc"}>Click on the <b>first</b> smartphone <br/> to get a taste <br/>of what the specs page looks like.</p>
                </section>
            </div>
        )
    }
}