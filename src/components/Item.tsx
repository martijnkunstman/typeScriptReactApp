import './Item.css'
function Item(props:any) {
    const {data} = props;
    console.log("Item:");
    console.log(data);
    return(
      <>
          <div className="item" key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.date}</p>
          </div> 
      </>
    )    
  }  
  export default Item
  