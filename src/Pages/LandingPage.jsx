import React, { Component } from 'react';
import { ProjectsData } from "../ProjectsData"
import ProjectGalleryElement from '../Components/ProjectGalleryElement'
import "../Styles/Pages/LandingPageStyle.css"

class LandingPage extends Component {
    render() {
        return (
                <div id="about-me" className="ProjectGalleryContainer">
                    <div className="ProjectGalleryHeader">
                        <h1 >Welcome to my portfolio</h1>
                        <div className='AboutMeBlock'>
                            <img src="me.jpg"></img>
                            <div>
                                <p>
                                    My passion for creating games started when I was little, playing games like Final Fantasy, Rogue Galaxy, and other JRPGs. At some point in school, we were free to pick an assignment on our own, and I decided to make a game in RPG Maker. This led me into game development, and I completed an MBO at Sint Lucas and an HBO at Breda University of Applied Sciences. After graduation, I started at a company that was making training and simulation games. There I discovered how cool it is to create games that combine fun and teaching.
                                </p>
                                <p>
                                    It really motivates me to work together with a multidisciplinary team to create a meaningful experience for the player. I like creating prototypes and finding out together with designers what’s fun. My game engine of choice is Unity, and I’m able to quickly prototype new features and games with it.  With experience in Cinemachine, XR, UI Toolkit (Runtime and Editor), Localization, and more, I like to discover new ways to create meaningful experiences.
                                </p>
                                <p>
                                    Besides Unity, I also made multiple games in Unreal and can also create web application with React or Angular.
                                </p>
                                <p>

                                    If you’re curious about my projects, check them out below :)
                                </p>
                            </div>
                        </div>
                    </div>
                    <h1 id="projects">Projects</h1>
                    <div className="ProjectItemsContainer">
                        {ProjectsData.map((projectInfo) => (<ProjectGalleryElement projectInfo={projectInfo} />))}
                    </div>
                </div>
        );
    }
}

export default LandingPage;