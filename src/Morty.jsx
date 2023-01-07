import UserBox from "./Morty";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Resident from './ResidentInfo'

function Morty() {
  const[rickObject, setRickObject]=useState({});
  //estado para controlar input

 const[search, setSearch]=useState('')


  useEffect(()=>{
const randomId=Math.floor(Math.random()*20 +1)
axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
.then(res=> setRickObject(res.data))

  },[])
  const searchType = ()=>{
    
axios.get(`https://rickandmortyapi.com/api/location/${search}`)
.then(res=>setRickObject(res.data))
  }
 console.log(rickObject)

 

  return (

  
    <div className="App">
       
    <div className="head"></div>

      <header className="header1">

      <input className="input" type="text"  placeholder="type a Location id"  
   value={search} onChange={e=>setSearch(e.target.value)}/>
   <button className="button1" onClick={searchType}>Search location</button>
      </header>
      <div className="box1">  
      
      <h1 className="principal">{rickObject.name}</h1>
      <div className="box2">

<h2>Type: <span>{rickObject.type}</span></h2>
<h2>Dimension: <span>{rickObject.dimension}</span></h2>
<h2>Population: <span>{rickObject.residents?.length}</span></h2>
      </div>

        </div>

<main>
  <section className="one">
  { 
      rickObject.residents?.map(link=>(
        <div className="resident">
        <Resident link={link} rickObject={rickObject} key={link}/>
        </div>
      ))
      
   }
        </section>
    
   
  
      
  <p>{rickObject.residents?.[0]}</p>
  
  </main>

    </div>
    


  );
  
}

export default Morty;

