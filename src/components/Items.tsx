//import React from 'react'
import Item from './Item'
//import items from './data.json'
import './Items.css'
import { useState, useEffect } from "react";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items/")
      .then((string) => string.json())
      .then((object) => setItems(object));
  }, []);

  return(
    <div className="items">
    {
      items.map((item: any) => (
        <Item data={item} key={item.id}></Item>      
      ))
    }    
    </div>
  )  
}
export default Items
