import React from 'react'
import './Header.css'
const Header = () => { 
    return (  
      <header>
        <img className="pix" style={{height: "100px", width: "10%"}}
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
        />
        <h1>Meme Generator</h1>
      </header>
    );
}
 
export default Header;