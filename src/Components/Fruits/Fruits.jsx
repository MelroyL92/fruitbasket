import React from 'react';



function FruitsCounter ({fruitKinds, increment, decrement, fruitImage,reset, toggleFruits}) {

    return (

       <div className="parent-container" >
           {Object.keys(fruitKinds).map((fruit) => {
                return(
           <div key={fruit} className="child-container">
               <span> {fruitImage[fruit]}</span>
               <span><strong>{fruit}</strong> </span>
               <button onClick={() => decrement(fruit)}>-</button>
               <span>{fruitKinds[fruit]} </span>
               <button onClick={() => increment(fruit)}>+</button>
           </div>
           )})}
           <button onClick={() => toggleFruits(reset)}>reset</button>
       </div>
    )
}

export default FruitsCounter
