import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const ResidentInfo = ({link, rickObject}) => {

    const[card, setCard]=useState({});
    
    useEffect(()=>{
axios.get(link)
.then(res=> setCard(res.data))
          

    },[])
console.log(card)
    return (
        <div className='links'>
       
     <img className='imageC' src={card.image} alt="" />
     <div className='date'>
     <h2>{card.name}</h2>
     <h3>Status: {card.status}</h3>
     <h3>Origin: {card.origin?.name}</h3>
     <h3>Episodes: {card.episode?.length}</h3>
     
   
    
</div>
            
        </div>
    );
};

export default ResidentInfo;



