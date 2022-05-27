import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AiOutlineCheck } from "react-icons/ai";


function App() {

  var IngresosTotales = [];
  var EgresosTotales = [];
  
  const [Ingreso, setIngreso] = useState();
  const [Egreso, setEgreso] = useState();
  const [itemBarra, setItemBarra] = useState();
  const [itemIngreso, setItemIngreso] = useState();
  const [itemEgreso, setItemEgreso] = useState();

  const addIngreso = (event) => {
    event.preventDefault();
      const Ubicacion= event.target[0].value;
      const Valor= event.target[1].value;
      const PeriodoReal= event.target[2].value;
      IngresosTotales.push({Ubicacion,Valor,PeriodoReal});
      ListaIngresos();
    console.log(IngresosTotales,"Agregado")
  }

  const addEgreso = (event) => {
    event.preventDefault();
    const Ubicacion= event.target[0].value;
    const Valor= event.target[1].value;
    const PeriodoReal= event.target[2].value;
    var valorAnteriorEgresos = [];
    for(var k = 0; k<EgresosTotales.length; k++){
      valorAnteriorEgresos.push(EgresosTotales[k]);
    }
    // EgresosTotales.push({Ubicacion,Valor,PeriodoReal});
    valorAnteriorEgresos.push({Ubicacion,Valor,PeriodoReal});
    for(var o = 0; o<valorAnteriorEgresos.length; o++){
      EgresosTotales.push(valorAnteriorEgresos[o]);
    }
    console.log(valorAnteriorEgresos)
    ListaEgresos();
    console.log(EgresosTotales, "Agregado")
  }


  const addCiclos = (e) => {
    e.preventDefault();
    var barraCiclos = e.target[0].value;
    var itemsBarra = [];
    for(var i = 0; i<=barraCiclos; i++){
      itemsBarra.push(
              <li id={"Ciclo-" +i} className="float-left	" >
                    <div className="text-center -mt-16  -ml-20">
                      <p className="text-2xl 	text-green-600 text-white ">🠕</p>
                      <p>1</p>
                      <button className="bg-black rounded-xl w-6 h-6	"></button>
                      <p>{i}</p>
                      <p className="text-2xl text-red-800	text-white ">🠗</p>
                    </div>
               </li>
      )
    }
    setItemBarra(itemsBarra);
  }
  
  const ListaIngresos = () => {
    var itemIngreso = [];
    for(var j = 0; j<IngresosTotales.length; j++){
      itemIngreso.push(
          <li key={IngresosTotales[j].Ubicacion} className=" col-span-3 text-center  grid grid-cols-4 gap-2 py-2">
                <label> {IngresosTotales[j].Ubicacion} </label>
                <label> {IngresosTotales[j].Valor} </label>
                <label> {IngresosTotales[j].PeriodoReal} </label>
                <button  type="submit" className="btn bg-green-600 text-white rounded-full  w-7  h-7  text-center text-center mx-10 ">
                    X
                </button>
          </li>
    )
    }
    setItemIngreso(itemIngreso);
  }

  const ListaEgresos = () => {
    var itemEgreso = [];
    for(var j = 0; j<EgresosTotales.length; j++){
      itemEgreso.push(
          <li key={EgresosTotales[j].Ubicacion} className=" col-span-3 text-center  grid grid-cols-4 gap-2 py-2">
                <label> {EgresosTotales[j].Ubicacion} </label>
                <label> {EgresosTotales[j].Valor} </label>
                <label> {EgresosTotales[j].PeriodoReal} </label>
                <button  type="submit" className="btn bg-green-600 text-white rounded-full  w-7  h-7  text-center text-center mx-10 ">
                    X
                </button>
          </li>
    )
    }
    setItemEgreso(itemEgreso);
  }
//   useEffect(() => {
//     ListaIngresos();
// }, [IngresosTotales]);



  return (
    <div className="">
      <header className="text-center bg-black text-white">
        <h1>Flujo de Caja</h1>
      </header>

        {/*   Cantidad de Ciclos   */}

          <form onSubmit={(e) => addCiclos(e)} className=" text-center ml-50	mt-4">
                  <input className="text-black border-2 h-7   w-50 rounded-lg w-30" placeholder="Cantidad de Ciclos" type="number" name="Ciclos"  />
                  <button type="submit" className="btn bg-green-600 text-white rounded-full  w-6 px-1  h-6 mt-2  ml-4 text-center ">
                                <AiOutlineCheck />
                  </button>
              </form>

        {/*   //////////////////   */}
      
      {/*   Formularios   */}
      <div className="grid grid-cols-2 gap-2 ml-4 mr-4 pt-4"> 
              <div className="border rounded-md p-2">
                  <h1 className="bg-green-600 rounded-md text-white p-1">
                      INGRESOS
                  </h1>
                  <div>
                        <ul >
                          {itemIngreso}
                        </ul>
                  </div>
                  <div className="p-2">
                      <form onSubmit={addIngreso} className=" grid grid-cols-4 p-x-2 gap-4">
                          <div className=" col-span-3 text-center  grid grid-cols-3 gap-2">
                              <input className="text-black border-b-2 h-7 rounded-lg" placeholder="Ubicación" type="number" name="Ubicacion"  />
                              <input className="text-black border-b-2 h-7 rounded-lg" placeholder="Valor" type="number" name="Valor"  />
                              <input className="text-black border-b-2 h-7 rounded-lg" placeholder="Periodo" type="number" name="PeriodoReal"  />
                          </div>
                          <div>
                          <button type="submit" className="btn bg-green-600 text-white rounded-lg  w-full  h-7  text-center ">
                              Agregar
                          </button>
                          </div>
                      </form>
                  </div>
              </div>   
              <div className="border rounded-md p-2"> 
                  <h1 className="bg-red-600 rounded-md text-white p-1">
                      EGRESOS 
                  </h1>
                  <div>
                      <ul>
                      <ul >
                          {itemEgreso}
                        </ul>

                      </ul>
                  </div>
                  <div className="p-2">
                      <form onSubmit={addEgreso} className=" grid grid-cols-4 p-x-2 gap-4">
                          <div className=" col-span-3 text-center  grid grid-cols-3 gap-2">
                              <input className="text-black border-b-2 h-7 rounded-lg" placeholder="Ubicación" type="number" name="Ubicacion" />
                              <input className="text-black border-b-2 h-7 rounded-lg" placeholder="Valor" type="number" name="Valor" />
                              <input className="text-black border-b-2 h-7 rounded-lg" placeholder="Periodo" type="number" name="PeriodoReal" />
                          </div>
                          <div>
                          <button type="submit" className="btn bg-red-600 text-white rounded-lg  w-full  h-7  text-center ">
                              Agregar
                          </button>
                          </div>
                      </form>
                  </div>
              </div>     
              
          </div>
          {/* /////////////// */}

          {/* /////Barra///// */}
          <div className=" mx-10 mt-40">
             <ul id="Barra">
               {itemBarra}
             </ul>
          </div>   
          {/* /////////////// */}

    </div>
  );
}

export default App;
