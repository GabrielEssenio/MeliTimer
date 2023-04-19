/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../App.css';
import { BsLayoutSidebarInset } from 'react-icons/bs';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-main">
      <button className="sidebar-button-open" onClick={ toggleSidebar }>
        <BsLayoutSidebarInset />
      </button>

      <div className={ `sidebar ${isOpen ? 'open' : ''}` }>
        <div className="sidebar-header">
          <h3 className="sidebar-h3">Paginas</h3>
          <button className="sidebar-button" onClick={ toggleSidebar }>X</button>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-ul">
            <li className="sidebar-li">Daily</li>
            <li className="sidebar-li">TBT</li>
          </ul>
        </nav>
      </div>
    </div>

  );
}

export default Sidebar;
