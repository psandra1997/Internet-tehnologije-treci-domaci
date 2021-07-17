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
            <h1>Šalji recept i pobedi 2021.</h1>
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
            <h2 style={{color:"#b68ae9", textAlign:'center'}}>Nagradna igra!</h2><hr/>
            <div className="text1"><br></br>
                <p>Kuvanje je umetnost, tehnologija, nauka i zanat pripremanja hrane za konzumaciju. Tehnike kuhanja i sastojci uveliko variraju u celom svetu, od pečenja hrane na otvorenom ognju do upotrebe električnih štednjaka, pečenja u različitim vrstama pećnica, odražavajući jedinstvene ekološke, ekonomske i kulturne tradicije i trendove. </p>
            <br/><p style={{color:"Green"}}>Ukoliko imaš neobičan recept pošalji i osvoji nagradu.</p>
            <button>Pošalji!</button>
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
            <p>Nagrade:<hr/>
<p/>Svakog dana 50 knjiga Plazmasticarnica! <img src={slika1}></img>

<br></br>Svake nedelje 30 Metalac serpe za kuvanje.<img src={slika2}></img>

Svakog meseca vikend putovanje za dvoje Zlatibor i poseta El Paso City parku.
<img src={slika3}></img>
</p>
       
       </div></div></div>
             
       
    )
}
export default Menu;