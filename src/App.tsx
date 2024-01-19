import { useState, useEffect } from 'react'
//import data from './data.json'
import Items from './components/Items'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/items/")
        .then(string => string.json())
        .then(object => setItems(object))
}, [])

  //const tempData = [{"id":1,"title":"item 1","description":"desc item 1","date":"2024-01-17T23:00:00.000Z"},{"id":2,"title":"item 2","description":"desc item 2","date":"2024-01-16T23:00:00.000Z"}]
  //console.log("App:")
  //console.log(data)
  return (
    <>
        <Items data={items}></Items>       
    </>
  )
}

export default App
