import React from 'react';

import '../style/specs.css';

export default class Specs extends React.Component {
    render() {
        return (
            <div className={'specs-container'}>
                <div className="specs-header">
                    <img src={require("../img/op8pro-specs.png")} alt=""/>
                    <div className="header-right">
                        <h1>OnePlus 8 Pro</h1>
                        <ul>
                            <li>6.78"
                                1440x3168 pixels</li>
                            <li>48MP
                                2160p</li>
                            <li>8/12GB RAM
                                Snapdragon 865</li>
                            <li>4510mAh
                                Li-Po</li>
                        </ul>
                    </div>
                </div>
                    <div className={"specs-section"}>
                        <h1>body</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Weight</h2>
                                <p>199 g</p>
                            </div>
                            <div className="specs-column">
                                <h2>IP Rating</h2>
                                <p>IP68 dust/water resistant</p>
                            </div>
                            <div className="specs-column">
                                <h2>Dimensions</h2>
                                <p>165.3 x 74.4 x 8.5 mm </p>
                            </div>
                        </div>
                        <h1>DISPLAY</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Type</h2>
                                <p>Fluid AMOLED capacitive touchscreen, 1B colors</p>
                            </div>
                            <div className="specs-column">
                                <h2>Size</h2>
                                <p>6.78 inches, 111.7 cm2 (~90.8% screen-to-body ratio)</p>
                            </div>
                            <div className="specs-column">
                                <h2>Resolution</h2>
                                <p>1440 x 3168 pixels (~513 ppi density)</p>
                            </div>
                        </div>
                        <h1>platform</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>OS</h2>
                                <p>	Android 10, OxygenOS 10.0</p>
                            </div>
                            <div className="specs-column">
                                <h2>Chipset</h2>
                                <p>Qualcomm SM8250 Snapdragon 865 (7 nm+)</p>
                            </div>
                            <div className="specs-column">
                                <h2>GPU</h2>
                                <p>Adreno 650</p>
                            </div>
                        </div>
                        <h1>main camera</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Quad</h2>
                                <p>	48 MP, f/1.8, 25mm (wide), 1/1.43", 1.12µm, omnidirectional PDAF, Laser AF, OIS <br/>
                                    8 MP, f/2.4, (telephoto), 1/1.0µm, PDAF, OIS, 3x optical zoom <br/>
                                    48 MP, f/2.2, 14mm, 116° (ultrawide), 1/2.0", 0.8µm, PDAF <br/>
                                    5 MP, f/2.4, (depth)</p>
                            </div>
                            <div className="specs-column">
                                <h2>Features</h2>
                                <p>Dual-LED flash, HDR, panorama</p>
                            </div>
                            <div className="specs-column">
                                <h2>Video</h2>
                                <p>4K@30/60fps, 1080p@30/60/240fps, Auto HDR, gyro-EIS</p>
                            </div>
                        </div>
                        <h1>features</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Sensors</h2>
                                <p>Fingerprint (under display, optical), accelerometer, gyro, proximity, compass</p>
                            </div>
                        </div>
                        <h1>battery</h1>
                        <div className="specs-row">
                            <div className="specs-column">
                                <h2>Charging</h2>
                                <p>Non-removable Li-Po 4510 mAh battery <br/>
                                    Fast charging 30W, 50% in 23 min (advertised) <br/>
                                    Fast wireless charging 30W, 50% in 30 min (advertised) <br/>
                                    Reverse wireless charging 3W</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}