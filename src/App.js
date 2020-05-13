import React from 'react';
import PreviewGrid from "./Components/PreviewGrid";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Videos from "./Components/Videos";
import Specs from "./Components/Specs";
import PhoneChart from "./Components/PhoneChart";


function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Header/>
                </header>
                <main>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/specs" component={Specs}/>
                            <Route path="/reviews" component={Reviews}/>
                            <Route path="/videos" component={Videos}/>
                            <Route path="/about" exact component={About}/>
                        </Switch>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
