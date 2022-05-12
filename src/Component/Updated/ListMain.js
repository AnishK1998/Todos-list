import React from 'react'
import "./ListMain.css"

export const ListMain = () => {
  return (
    <div>
       <div className='main_div'>
         <div className="center_div">
          <br/>
          <h1> ToDo List</h1>
          <br/>
          <input type="text" placeholder='Add your list' />
          <button className="newBtn"> +</button>
         <br/>
         <ol>
           <li>
             buy an apple
           </li>
         </ol>
         </div>

       </div>
    </div>
  )
}
