import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var IngresosTotales = [];
  var EgresosTotales = [];

  const [Ingreso, setIngreso] = useState();
  const [Egreso, setEgreso] = useState();

  const addIngreso = (event) => {
    event.preventDefault();
      const Ubicacion= event.target[0].value;
      const Valor= event.target[1].value;
      const PeriodoReal= event.target[2].value;
      IngresosTotales.push({Ubicacion,Valor,PeriodoReal});
    console.log(IngresosTotales,"Agregado")
  }

  const addEgreso = (event) => {
    event.preventDefault();
    const Ubicacion= event.target[0].value;
      const Valor= event.target[1].value;
      const PeriodoReal= event.target[2].value;
      EgresosTotales.push({Ubicacion,Valor,PeriodoReal});
    console.log(EgresosTotales, "Agregado")
  }

  
  const ListaIngresos = () => {
    return <ul>
            {IngresosTotales.map((item) => {
              return(
                <li key={item.Ubicacion} className=" col-span-3 text-center  grid grid-cols-4 gap-2 py-2">
                    <label> {item.Ubicacion} </label>
                    <label> {item.Valor} </label>
                    <label> {item.PeriodoReal} </label>
                    <button  type="submit" className="btn bg-green-600 text-white rounded-full  w-7  h-7  text-center text-center mx-16 ">
                        X
                    </button>
              </li>)
            })}
          </ul>
  }

  useEffect(() => {
    ListaIngresos();
}, [IngresosTotales]);
  return (
    <div className="">
      <header className="text-center bg-black text-white">
        <h1>Flujo de Caja</h1>
      </header>

      {/*   Formularios   */}
      <div className="grid grid-cols-2 gap-2 ml-4 mr-4 pt-4"> 
              <div className="border rounded-md p-2">
                  <h1 className="bg-green-600 rounded-md text-white p-1">
                      INGRESOS
                  </h1>
                  <div>
                        {ListaIngresos}
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
                      {EgresosTotales.map((item) => {
                        return <li key={item.Ubicacion} className=" col-span-3 text-center  grid grid-cols-4 gap-2 py-2">
                                <label> {item.Ubicacion} </label>
                                <label> {item.Valor} </label>
                                <label> {item.PeriodoReal} </label>
                                <button type="submit" className="btn bg-red-600 text-white rounded-full  w-7  h-7  text-center text-center mx-16 ">
                                    X
                                </button>
                              </li>
                      })}

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
             <ul>
               <li className="float-left	" >
                  <div className="text-center">
                    <p className="text-2xl	text-green-600">🠕</p>
                    <p>1</p>
                    <button className="bg-black rounded-xl w-6 h-6	"></button>
                    <p>1</p>
                    <p className="text-2xl text-red-800	">🠗</p>
                 </div>
               </li>
               
             </ul>
          </div>   
          {/* /////////////// */}

    </div>
  );
}

export default App;
