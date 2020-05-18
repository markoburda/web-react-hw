import React from "react";
import "../style/specs.css"

export default class GetSpecs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
            deviceName: props.deviceName,
        }
    }

    componentDidMount() {
        console.log("Name: " + this.state.deviceName);
        const API_TOKEN = "87fcfd79654e5cf5c71a569148d4b6da96b3f4f8858e3337";

        var url = "https://fonoapi.freshpixl.com/v1/getdevice?device=" + this.state.deviceName + "&token=" + API_TOKEN;
        fetch(url)
            .then(data => data.json())
            .then(data => {
                console.log("data:" + Object.entries(data[0]));
                this.setState({
                    items: data[0],
                    isLoaded: true
                })
            });
    }

    render() {
        var {isLoaded, items} = this.state;

        if(!isLoaded){
            return null;
        }
        else {
            console.log("Items:" + items);
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
                        {/*<h1>main camera</h1>*/}
                        {/*<div className="specs-row">*/}
                        {/*    <div className="specs-column">*/}
                        {/*        <h2>Quad</h2>*/}
                        {/*        <p> 48 MP, f/1.8, 25mm (wide), 1/1.43", 1.12µm, omnidirectional PDAF, Laser AF,*/}
                        {/*            OIS <br/>*/}
                        {/*            8 MP, f/2.4, (telephoto), 1/1.0µm, PDAF, OIS, 3x optical zoom <br/>*/}
                        {/*            48 MP, f/2.2, 14mm, 116° (ultrawide), 1/2.0", 0.8µm, PDAF <br/>*/}
                        {/*            5 MP, f/2.4, (depth)</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="specs-column">*/}
                        {/*        <h2>Features</h2>*/}
                        {/*        <p>Dual-LED flash, HDR, panorama</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="specs-column">*/}
                        {/*        <h2>Video</h2>*/}
                        {/*        <p>4K@30/60fps, 1080p@30/60/240fps, Auto HDR, gyro-EIS</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
