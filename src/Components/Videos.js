import React from 'react';

import '../style/videos.css';
import Profile from "./Profile";

export default class Videos extends React.Component {
    render() {
        const daveDesc = "Hey everyone! My name is Dave and I make quality videos about useful tech.\n" +
            "If you're into that kinda stuff, subscribe!\n" +
            "\n" +
            "Thanks for all the support =)";

        return (
            <div className={'videos-container'}>
                <div className="profiles">
                    <Profile img={require("../img/Dave.jpeg")} name={"Dave Lee"} desc={daveDesc}
                             link={"https://www.youtube.com/channel/UCVYamHliCI9rw1tHR1xbkfw"}/>
                    <Profile img={require("../img/mkbhd.jpg")} name={"Marques Brownlee"}
                             desc={"MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"}
                             link={"https://www.youtube.com/user/marquesbrownlee/"}/>
                    <Profile link={"https://www.youtube.com/user/zollotech"} img={require("../img/zollo.jpg")}
                             desc={"The latest tech reviews, news and how to's on phones, gadgets, hardware, software and more ..."}
                             name={"zollotech"}/>
                    <Profile link={"https://www.youtube.com/user/JerryRigEverything"} img={require("../img/jre.jpg")}
                             name={"JerryRigEverything"}
                             desc={"I review technology from the inside with smartphone durability tests and teardown videos! Mixed with other projects and things I enjoy. Like drones & fixing random things."}/>
                </div>
            </div>
        )
    }
}