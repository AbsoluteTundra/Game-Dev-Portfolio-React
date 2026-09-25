import React, { Component } from 'react';
import "../Styles/Components/Footer.css"
import GithubLogo from "/public/logos/GitHub_Invertocat_White.svg?react"
import LinkedInLogo from "/public/logos/linkedin.svg?react"
import ItchLogo from  "/public/logos/itchio-logo-textless-white.svg?react"


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
               <a href="https://www.linkedin.com/in/michel-van-der-linden-0796315b/">
                   <LinkedInLogo className="FooterIcon"/>
               </a>
               <a href="https://github.com/AbsoluteTundra">
                   <GithubLogo className="FooterIcon"/>
               </a>
               <a href="https://itch.io/profile/absolutetundragames">
                   <ItchLogo className="FooterIcon"/>
               </a>
            </footer>
        );
    }
}

export default FooterElement