import React from "react";

export default function Home() {
  return (
    <div className="container"> 
      <header className="header">
        <h1 className="container">CAMAÇARI-BA</h1>
       </header>     
        <div className="conteudo container">                     
          <div className="principal d-flex justify-content-center row">            
          <div className="linha col-sm">
              <h2>Arembepe</h2>
              <img className="m-2" src= "..//img/Arembepe1.jpeg"alt=""/>
              <img className="m-2" src= "..//img/Arembepe2.jpeg"alt=""/>
          </div>
          <div className="linha col-sm">
             <h2>Barra do Jacuípe</h2>
              <img className="m-2" src="..//img/BarraJacuipe1.jpeg"alt=""/>
              <img className="m-2" src="..//img/BarraJacuipe6.jpeg"alt=""/>
          </div>
          <div className="linha col-sm">
              <h2>Itacimirim</h2>
              <img className="m-2" src="..//img/Itacimirim5.jpg"alt=""/>
              <img className="m-2" src="..//img/Itacimirim6.jpg"alt=""/>
            </div>
          </div>
        </div>
    </div>
  );
}
