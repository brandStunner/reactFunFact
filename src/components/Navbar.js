import React from "react";
import image from "../images/react-dark-logo.png"


function Navbar(props){
    
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={image}  className="nav-image"/>
            <h2>React Fun Facts </h2>
            {/* <h4 className="nav-items">Project-Fact</h4> */}

            <div className="toggler">
                <p className="toggler--light">Light</p>

                <div 
                className="toggler--slider"
                onClick={props.toggleDarkmode}
                >

                <div className="toggler--slider--circle"></div>    

                </div>
                <p className="dark-toggle">Dark</p>
            </div>
        </nav>
        
    )
}
export default Navbar
