import React, { useState } from 'react';
import NoviRecept from './NoviRecept';
import Recept from './Recept';


function ReceptLista(){
   const[rez, setRez]= useState([]);

   const addRecept = rec =>{
       const newRez= [rec,...rez]
       setRez(newRez)
       console.log(rec,...rez);
   }

 return(

    <div>
        <h1 style={{width:'250px', marginLeft:'200px'}}>Vas recept:</h1>
        <NoviRecept onSubmit={addRecept} />
        <Recept rez={rez}/>
    </div>
 )
}
export default ReceptLista;