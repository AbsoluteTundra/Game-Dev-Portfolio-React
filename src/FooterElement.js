import React, { Component } from 'react';
import "./Styles/Footer.css"


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
               </footer>
        );
    }
}

export default FooterElement