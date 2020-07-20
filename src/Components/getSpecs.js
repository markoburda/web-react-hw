import React from "react";
import "../style/specs.css"

export default class GetSpecs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
            deviceName: props.deviceName,
            timeout: false
        }
    }

    componentDidMount() {
        const API_TOKEN = "87fcfd79654e5cf5c71a569148d4b6da96b3f4f8858e3337";

        var url = "https://fonoapi.freshpixl.com/v1/getdevice?device=" + this.state.deviceName + "&token=" + API_TOKEN;
        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    items: data[0],
                    isLoaded: true
                });
            });
    }

    render() {
        var {isLoaded, items} = this.state;

        if(!isLoaded || items === undefined){
                return <h1 className={"not-found"}>Seems like there are no results for this search. We're deeply sorry.</h1>
            }
        else {
            return (
                <div className={'specs-container'}>
                    <div className="specs-header">
                        <img src={require("../img/SVG/Phone art.svg")} alt="phone art" className={"phone-art"}/>
                        <div className="header-right">
                            <h1>{items.DeviceName}</h1>
                            <ul>
                                <li><p>{items.size} <br/>
                                    {items.resolution}</p>
                                </li>
                                <li><p>{items.single}
                                </p>
                                </li>
                                <li><p>{items.internal} <br/>
                                    {items.chipset}</p>
                                </li>
                                <li>{items.battery_c}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"specs-section"}>
                        <h1>body</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Weight</h2>
                                <p>{items.weight}</p>
                            </div>
                            <div className="specs-column">
                                <h2>Features</h2>
                                <p>{items.body_c}</p>
                            </div>
                            <div className="specs-column">
                                <h2>Dimensions</h2>
                                <p>{items.dimensions}</p>
                            </div>
                        </div>
                        <h1>DISPLAY</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Type</h2>
                                <p>{items.type}</p>
                            </div>
                            <div className="specs-column">
                                <h2>Size</h2>
                                <p>{items.size}</p>
                            </div>
                            <div className="specs-column">
                                <h2>Resolution</h2>
                                <p>{items.resolution}</p>
                            </div>
                        </div>
                        <h1>platform</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>OS</h2>
                                <p>{items.os}</p>
                            </div>
                            <div className="specs-column">
                                <h2>Chipset</h2>
                                <p>{items.chipset}</p>
                            </div>
                            <div className="specs-column">
                                <h2>GPU</h2>
                                <p>{items.gpu}</p>
                            </div>
                        </div>
                        <h1>features</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Sensors</h2>
                                <p>{items.sensors}</p>
                            </div>
                            <div className="specs-column">
                                <h2>NFC</h2>
                                <p>{items.nfc}</p>
                            </div>
                        </div>
                        <h1>battery</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Charging</h2>
                                <p>{items.battery_c}<br/>
                                    {items.charging}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
};
