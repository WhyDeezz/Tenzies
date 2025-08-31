
import React from "react"

import Confetti from 'react-confetti'


export default function App()
{
  const [dice ,setdice ] = React.useState(()=> {
    let array = []
    for (let i = 0 ; i < 10; i++)
      {
        let randomInteger = Math.floor(Math.random() * 5);
        array.push({number:randomInteger+1 , toggle:true})
      }
    return array
  })
  

  function Roll()
  {
    setdice(()=> {
    let array = []
    for (let i = 0 ; i < 10; i++)
      {
        if (dice[i].toggle)
        {

          let randomInteger = Math.floor(Math.random() * 5)
          array.push({number:randomInteger+1 , toggle:true})
        }
        else
        {
          array.push({number : dice[i].number , toggle:false})
        }
      }

    return array})
   
  }
  function NotRoll(id)
  {
    setdice(prevdice => prevdice.map((die,i)=> id == i ? {...die ,toggle:!die.toggle} : die))
    
  }

  function Won()
  {
    let winnernumber = dice[0].number
  
    for(let i = 0 ; i < 10 ; i++)
      {
        if (( dice[0].number != dice[i].number))
        {
          return false
        }
        if(dice[i].toggle)
        {
          return false
         
        }
      }
    console.log("Won!!")
    return true
  }
  




  return(
    <main>
      
      <div className="gridcontainer"> 
        <h1>Tenzies</h1>
        <p>Roll the dice until all are same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grids" >  
          {dice.map((die,i) => (<button key={i} className={`grid ${!die.toggle ? "held" : ""}`} onClick={()=>NotRoll(i)}>{die.number}</button>))}
          {(!Won()) && <button onClick={Roll} className="RollButton">Roll</button>}
          {(Won()) && <Confetti width={1470} height={822}/>}
        </div>
         {(Won()) && <h1 className="wintext">YOU WON!!!!!!!</h1>}
      </div>
    </main>

  )
}