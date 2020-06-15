import React from 'react';
import '../Header/header.css';
import flag from "../Header/flag.jpg"


const Header = () => {

    let HeaderTitleText = " Spanish Lessons" 

    return (
        <>
        <div className="headerwrapper">
        
        <img src={flag} alt="Spanish Flag" className="headerLogo img-fluid" />
        <h1 className="headertext">{HeaderTitleText}</h1>
        </div>
        </>
    )
}


export default Header;