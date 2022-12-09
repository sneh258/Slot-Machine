import React from 'react';
import Slot from './Slot';


const App = () =>{

    return(

     <>
         
        
        <h1 className='heading_style'> 
        <span> Welcome to 🎰 Slot Machine</span>
        </h1>


        <div className='slotmachine'>
        <Slot x= '😄' y= '😆' z= '😄'/>
        <Slot x= '😄' y= '😄' z= '😄'/>
        <Slot x= '😄' y= '🎅 ' z= '😄'/>
        </div>
     </>

    );

}






export default App;