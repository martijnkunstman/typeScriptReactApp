//import React from 'react'
import Item from './Item'
import './Items.css'

function Items(props:any) {
  const {data} = props;
  console.log("Items:");
  console.log(data);
  return(
    <div className="items">
    {
      data.map((item: any) => (
        <Item data={item}></Item>      
      ))
    }    
    </div>
  )  
}

export default Items
