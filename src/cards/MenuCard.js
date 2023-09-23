import React from 'react'
import { IMG_CON_URL } from "../config";


function MenuCard({ name, imageId }) {

  return (
    <div className="w-56 h-48 my-2 p-1 shadow-md hover:scale-105">
      <img className='w-40 h-40 rounded-md' src={IMG_CON_URL + imageId} alt="" />
      <h4 className='font-semibold'>{name}</h4>
    </div>
  );
}

export default MenuCard