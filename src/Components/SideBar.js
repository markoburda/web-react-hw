import React from 'react';
import SideBarElement from './SideBarElement'
import '../style/sidebar.css'

export default class SideBar extends React.Component {
    render() {
        return (
            <div className={"sidebar-container"}>
                <ul>
                    <p className={"sidebar-title"}>Brands</p>
                <SideBarElement name = {"Acer"}/>
                    <SideBarElement name = {"Apple"}/>
                    <SideBarElement name = {"BlackBerry"}/>
                    <SideBarElement name = {"Gigabyte"}/>
                    <SideBarElement name = {"LG"}/>
                    <SideBarElement name = {"OnePlus"}/>
                    <SideBarElement name = {"OPPO"}/>
                    <SideBarElement name = {"Huawei"}/>
                    <SideBarElement name = {"Lenovo"}/>
                    <SideBarElement name = {"Meizu"}/>
                    <SideBarElement name = {"Motorola"}/>
                    <SideBarElement name = {"Samsung"}/>
                    <SideBarElement name = {"Sony"}/>
                    <SideBarElement name = {"Vivo"}/>
                    <SideBarElement name = {"Xiaomi"}/>
                    <SideBarElement name = {"ZTE"}/>
                </ul>
            </div>
        )
    }
}