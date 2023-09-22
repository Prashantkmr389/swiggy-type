import React from 'react'
import { IMG_CON_URL } from "../config";


function MenuCard({ name, imageId }) {

  return (
    <div className="menuItems">
      <h4>{name}</h4>
      <img src={IMG_CON_URL + imageId} alt="" />
    </div>
  );
}

export default MenuCard