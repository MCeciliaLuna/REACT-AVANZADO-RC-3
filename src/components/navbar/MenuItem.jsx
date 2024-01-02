import React from 'react';
import PropTypes from 'prop-types';



export const MenuItem = ({ itemData }) => {


  return (
    
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        { itemData.map( item => (
        <li className="nav-item" key={item.id}>
            <a
                className={`nav-link text-white`}
                aria-current="page"
                href="#"
            >
                { item.name }
            </a>
        </li>
        ))}
    </ul>
  )
}


MenuItem.defaultProps = {
    itemData: [
        { id: 1, name: 'Link-1'},
        { id: 2, name: 'Link-2'},
        { id: 3, name: 'Link-3'},
        { id: 4, name: 'Link-4'},
    ]
}

MenuItem.propTypes = {
    itemData: PropTypes.array,
}