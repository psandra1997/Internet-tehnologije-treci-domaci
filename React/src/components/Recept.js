import React, { useState } from 'react';
import ReceptLista from './ReceptLista';

function Recept({rez}){

  
    return rez.map((rec, index) => (
        <div key={index}>

<div key={rec.id} > {rec.id}&nbsp;  {rec.text}
</div>

        </div>
    ))
}
export default Recept