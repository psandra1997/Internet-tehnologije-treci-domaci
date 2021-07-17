
import React from 'react';

function NoviRecept(){
   /*const [recepti,setRecepti]=useState({
        id:"",
        polje:"",
        completed:false
    });
     // function Dodaj(e){
       //   e.preventDefault();
         // if( polje.trim()){
           //   DodajRecept({ id:uuidv4()});
          //}
      }
 // function receptiPromeni(e){
   //   setRecepti({...recepti,polje: e.target.value});
  //}
*/
 return (


    <div clasName="recepti">
    <form onSubmit="">
        <label><br></br>
        Izaberi vrstu recepta:
          <select value="">
                    <option value="predjelo">Predjelo</option>
                    <option value="dorucak">Doručak</option>
                    <option value="rucak">Ručak</option>
                    <option value="vecera">Večera</option>
                    <option value="slatko">Slatko</option>
                </select><br></br><br></br>
        Naziv:
            <input type="text" placeholder="Naziv recepta" className="polje" />
            <textarea className="textarea" placeholder="Potrebni sastojak:"/><br></br>
     
            </label>
            <button >POSALJI</button>

 </form>
    </div>
 
);}
export default NoviRecept;