import React from 'react'
import { IMG_CON_URL } from "../config";
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

function MenuCard({ name, imageId, id }) {
  const dispatch = useDispatch();
  const handleOnclickAdd = (name, imageId, id)=>{

    dispatch(addItem({name, imageId, id}))
  }
  const handleOnclickRemove = (item)=>{
    dispatch(removeItem(item))
  }
  return (
    <div className="w-60 h-72 my-2 p-1 shadow-md hover:scale-105">
      <img
        className="w-40 h-40 rounded-md"
        src={IMG_CON_URL + imageId}
        alt=""
      />
      <h4 className="font-semibold">{name}</h4>
      <button
        className="p-2 m-2 bg-green-300"
        onClick={() => {
          handleOnclickAdd(name, imageId, id);
        }}
      >
        {" "}
        Add Items
      </button>
      <button
        className="p-2 m-2 bg-red-300"
        onClick={() => {
          handleOnclickRemove(id);
        }}
      >
        {" "}
        Remove
      </button>
    </div>
  );
}

export default MenuCard