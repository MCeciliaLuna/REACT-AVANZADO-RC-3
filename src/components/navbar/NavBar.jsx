import React from 'react'
import { MenuItem } from './MenuItem';

import menuData from '../../data/Menu.json';

export const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuItem itemData={menuData} />
          {/* <CustomSearch /> */}
        </div>
        
      </div>
    </nav>
  )
}
