import './App.css';

import {useState} from 'react'
import { Data } from './Data.js'

function App() {

  const [searchTerm , setSearchTerm] = useState('') 

  return (
    <div className="App">
      <h1>Search Your Favorite Restaurants:</h1>
      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
      {Data.filter(
        (val)=> {
          if(searchTerm === ""){
            return val
          }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }
      ).map((val , key) => {
        return <div className="user" key={key}>
          <div className="img">
            <img height="80em" src={val.image} alt="" />
          </div>
          <div className="title">
            <h3> {val.title} </h3> 
            <p>{val.catch}</p>
          </div>
          <div className="rating">
              {Array(val.rating)
                .fill()
                .map((_, i) => (
                <p>🌟</p>
                ))}
            </div>
          </div>
      })}
        
    </div>
  );
}

export default App;
