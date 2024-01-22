import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import './ItemDetail.css'
function ItemDetail() {
  const {id} = useParams()
  const [item, setItem] = useState({title: "", description: "", date: ""});

  useEffect(() => {
    fetch(`http://localhost:3000/item/${id}`)
      .then((string) => string.json())
      .then((object) => setItem(object[0]));
  }, []);

    return(
      <>
          <div className="itemdetail">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </div> 
      </>
    )    
  }  
  export default ItemDetail
  