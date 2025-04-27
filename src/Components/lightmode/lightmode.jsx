import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './lightmode.css';

const Lightmode = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleTheme = () => {
      setIsLightMode(!isLightMode);
      document.body.classList.toggle("light_theme", !isLightMode);
      document.body.classList.toggle("dark_theme", isLightMode);
    };

  return (
    <div className="light-mode">
      <input type="checkbox" id="lightmode-toggle" className="input-lightmode" checked={isLightMode} onChange={toggleTheme}/>
      <label htmlFor="lightmode-toggle" className="label-lightmode"></label>
      <FontAwesomeIcon icon={isLightMode ? faSun : faMoon} className='icon'/>
    </div>
  );
}

export default Lightmode;
