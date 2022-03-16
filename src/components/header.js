import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Header = () => {

    const options = [
        'Get ETH',
        'Stake ETH',
        'Run a Node',
        'Stable Coin',
        'Wallets'
        ]

    return (

        <div className="headerBar">
            <div className="logoRegion">
                <div className="ethpng"><img src='/eth.png' /></div>
                <div className="drpdwn">
                    <Dropdown 
                        placeholder="Select an option"
                        value="Use&nbsp;Ethereum"
                        options={options}/>
                </div>
                <div className="drpdwn">
                    <Dropdown 
                        placeholder="Select an option"
                        value="Learn"
                        options={options}/>
                </div>
                <div className="drpdwn">
                    <Dropdown 
                        placeholder="Select an option"
                        value="Develope"
                        options={options}/>
                </div>
                <div className="drpdwn">
                    <Dropdown 
                        placeholder="Select an option"
                        value="Enterprise"
                        options={options}/>
                </div>
                <div className="drpdwn">
                    <Dropdown 
                        placeholder="Select an option"
                        value="Community"
                        options={options}/>
                </div>
            </div>
            <div className="searchRegion">
                <div className="rightdwn">
                    <input type = 'text' className="search" placeholder="Search" />
                </div>
                <div className="rightdwn">                    
                    <img src = '/sun.svg' style={{height:'60%',marginTop:'10px',marginLeft:'10px'}}/>
                </div>
                <div className="rightdwn">                    
                    <img src = '/earth.svg' style={{height:'60%',marginTop:'10px',marginLeft:'10px'}}/>
                    <font style={{  marginTop:'15px'}}>&nbsp;&nbsp;English</font>
                </div>
            </div>
        </div>
        
    );
}

export default Header;