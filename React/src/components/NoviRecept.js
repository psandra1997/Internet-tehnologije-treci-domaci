
import {React, useState, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import ReceptLista from './ReceptLista';
import App from '../App';
import Recept from './Recept';


function NoviRecept(props){

  
  const[input,setInput]=useState('');

  const[rez, setRez]= useState([]);

   const addRecept = rec =>{
       const newRez= [rec,...rez]
       setRez(newRez)
       console.log(rec,...rez);
   }

  const inputRef= useRef(null)

useEffect(()=>{
  inputRef.current.focus()
})

const handleChange = e =>{
  setInput(e.target.value);
};

 
const handleSubmit = e => {
  e.preventDefault();
   props.onSubmit({
   id:Math.floor(Math.random()*10000),
   text:input
  })
  setInput("");
  
};


 return (


    <div clasName="recepti" style={{width:'250px', marginLeft:'200px'}}>
    <form onSubmit={handleSubmit}>
        <label><br></br>
        Izaberi vrstu recepta:
          <select>
                    <option value="predjelo">Predjelo</option>
                    <option value="dorucak">Doručak</option>
                    <option value="rucak">Ručak</option>
                    <option value="vecera">Večera</option>
                    <option value="slatko">Slatko</option>
                </select>
           <br></br> <br></br>
        Recept:<br></br>
        <textarea name="in2" value={input} id="textarea" onChange={handleChange} ref={inputRef} placeholder="Napisite recept:"
        style={{width:"250px",height:'100px'}}/><br></br>
     
            </label>
            <br></br><br></br>
            <input  className="dugmeForma" type="Submit" value="POSALJI" 
            style={{width:"90px",height:'30px',borderRadius:'30px',marginLeft:'100px',backgroundColor:'pink',fontStyle:'inherit', textAlign:"center"}}/>
 </form><br></br><br></br>
 <div clasName="rezultati">
 <div>
        <h1>Recepti:</h1>
        
        
    </div>
 <table>
        <thead>
            <tr>
            <th style={{width:"40px", textAlign:"center", fontSize:'15px'}}>Rang</th>
            <th style={{width:"80px", textAlign:"center", fontSize:'15px'}}>Recept:</th>
              </tr>
                    </thead>
                    
                </table>
 </div>
    </div>
    
 
);}
export default NoviRecept;