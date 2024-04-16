import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Breadcrumbs = ({ currentLink }) => {
  return (
    <div className="breadcrumbs">
      <NavLink to="/">
        <div><FaHome /></div>
      </NavLink>
      {/* Render the currentLink prop */}
      <span>{currentLink}</span>
    </div>
  );
}

export default Breadcrumbs;
