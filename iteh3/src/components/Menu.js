import React, { useState } from 'react';
import NoviRecept from './NoviRecept';
import slika1 from './slika/plazma.png';
import slika2 from './slika/metalac.png';
import slika3 from './slika/zlatibor.jpg';


function Menu() {



   const [klik, setKlik]= useState(1);

   const klikMenu= (index)=>{
       setKlik(index);
   }

    return (
        
        <div className="container" >
            <h1 style={{color:"black", textAlign:'center', fontSize:'35px'}}>Pošalji recept i pobedi 2021.</h1>
            <div className="bloc-tabs">
             
            <div className={klik === 1 ? "tabs active-tabs":"tabs"}
            onClick={()=>klikMenu(1)}>Pocetna</div>
            <div className={klik === 2 ? "tabs active-tabs":"tabs"}
            onClick={()=>klikMenu(2)}>Novi recept</div>
            <div className={klik === 3 ? "tabs active-tabs":"tabs"}
            onClick={()=>klikMenu(3)}>Nagrade</div>
            </div>
            <div className="content-tabs">

            <div className={klik === 1 ? "content active-content":"content"}>
            <h2 style={{color:"#b68ae9", textAlign:'center', fontSize:'30px'}}>Nagradna igra!</h2><hr/>
            <div className="text1"><br></br>
                <p style={{color:"rgb(17, 99, 92)", textAlign:'center', fontSize:'25px', fontStyle:'italic'}}>Kuvanje je umetnost, tehnologija, nauka i zanat pripremanja hrane za konzumaciju. Tehnike kuhanja i sastojci uveliko variraju u celom svetu, od pečenja hrane na otvorenom ognju do upotrebe električnih štednjaka, pečenja u različitim vrstama pećnica, odražavajući jedinstvene ekološke, ekonomske i kulturne tradicije i trendove. </p>
            <br/><p style={{color:"Green", fontSize:'25px'}}>Ukoliko imaš neobičan recept pošalji i osvoji nagradu.</p>
           <br></br><br></br> <button className="dugme1" onClick={()=>klikMenu(2)}>Pošalji!</button>
            </div>
            
            </div>

            <div className={klik === 2 ? "content active-content":"content"}>
                <NoviRecept  style = {{
                    color: "red",
                    fontSize:'16px',
                    fontStyle:'italic',
                    backgroundColor:"yellow",
                    borderRadius:'25px'
                }}></NoviRecept>
            </div>
            <div className={klik === 3 ? "content active-content":"content"}>
            <p style={{fontSize:'20px'}}>Nagrade:<hr/>
Svakog dana 50 knjiga Plazmasticarnica! <img src={slika1} style={{width:'250px', display:'flex', marginLeft:'200px'}}></img><hr/>

<br></br>Svake nedelje 30 Metalac serpe za kuvanje.<img style={{width:'350px',display:'flex',marginLeft:'200px', borderRadius:'250px'}} src={slika2}></img>
<hr/>Svakog meseca vikend putovanje za dvoje Zlatibor i poseta El Paso City parku.
<img style={{width:'350px', borderRadius:'250px',display:'flex',marginLeft:'200px'}} src={slika3}></img>
</p>
       </div>
       </div>
       
       
       </div>
             
       
    )
}
export default Menu;