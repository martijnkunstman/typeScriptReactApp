import './Item.css'
import { Link } from "react-router-dom";
function Item(props:any) {
    const {data} = props;
    return(
      <>
          <div className="item">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.date}</p>
            <Link to={`/item/${data.id}`}>details</Link>
          </div> 
      </>
    )    
  }  
  export default Item
  