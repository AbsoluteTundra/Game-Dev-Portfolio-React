import React, { Component } from 'react';
import NavigationBarElement from '../NavigationBarElement'
import FooterElement from '../FooterElement'

class AboutMePage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
            <NavigationBarElement pageSwitcher={this.props.pageSwitcher}/>
            <div className="AboutMeContainer">
              <div className="AboutMeHeader"></div>
            </div>
            <FooterElement/>
          </div>
        );
    }
}

export default AboutMePage;