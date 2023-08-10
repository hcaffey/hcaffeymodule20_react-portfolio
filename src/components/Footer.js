import React from "react";
import '../App.css';

const Footer = ()=> {
    return(
        <footer style={{fontFamily: 'Josefin Sans, sans-serif'}} className="footer">
      <div className="background">
        <div className="app-wrapper">
          <div className="social-links">
            <p className = 'footlink'>More Links </p>
            <a href="mailto:haydencaffey32@gmail.com">Email</a>
            <a href="https://github.com/hcaffey">GitHub</a>
            <a href="">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
    )
};

export default Footer;