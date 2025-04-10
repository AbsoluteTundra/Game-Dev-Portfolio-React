import React, { Component } from 'react';
import "../Styles/Components/Footer.css"


class FooterElement extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <footer>
               <a href="https://www.linkedin.com/in/michel-van-der-linden-0796315b/"><img className="FooterIcon" src="linkedin_logo.png"/></a>
               <a href="https://github.com/AbsoluteTundra"><img className="FooterIcon" src="github-mark-white.png"/></a>
               <a href="https://itch.io/profile/absolutetundragames"><img className="FooterIcon" src="itchio-logo-textless-white.png"/></a>
               </footer>
        );
    }
}

export default FooterElement