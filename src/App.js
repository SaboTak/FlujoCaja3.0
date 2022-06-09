import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineCheck } from "react-icons/ai";

function App() {
  // var IngresosTotales = [{Ubicacion:2, Valor: 3, PeriodoReal: 1},{Ubicacion:2, Valor: 3, PeriodoReal: 6},{Ubicacion:2, Valor: 5, PeriodoReal: 1}];
  // var EgresosTotales = [{Ubicacion:2, Valor: 3, PeriodoReal: 1},{Ubicacion:2, Valor: 3, PeriodoReal: 6},{Ubicacion:2, Valor: 5, PeriodoReal: 1}];
  let IngresosTotales = [];
  let EgresosTotales = [];
  let valorAntIngre = [];

  const [Ingreso, setIngreso] = useState();
  const [Egreso, setEgreso] = useState();
  const [itemBarra, setItemBarra] = useState();
  const [itemIngreso, setItemIngreso] = useState([]);
  const [itemEgreso, setItemEgreso] = useState();
  ///solucion warning
  // console.log(Ingreso)
  // console.log(setIngreso)
  // console.log(Egreso)
  // console.log(setEgreso)
  ////
  useEffect(() => {
    ListaIngresos();
    ListaEgresos();
  }, [])

  const CargarEgresos = () => {
    console.log("entro");
    for (var g = 0; g > EgresosTotales.length; g++) {
      var egresoSeleccionado = document.getElementById("Egreso-" + g);
      console.log(egresoSeleccionado);
      egresoSeleccionado.classList.add("text-red-800");
      var egresoSeleccionadoPeriodo = document.getElementById(
        "ValorRealC-" + Egreso[g].PeriodoReal
      );
      console.log(egresoSeleccionadoPeriodo);
      egresoSeleccionadoPeriodo.textContent = Egreso[g].Ubicacion;
    }
  };

  const addIngreso = (event) => {
    event.preventDefault();
    let comprobacionvalorIngreso = localStorage.getItem("contadorIngreso");
    if (comprobacionvalorIngreso != null) {
      let valorIngreso = parseInt(comprobacionvalorIngreso) + 1;
      //console.log(valorIngreso);
      localStorage.setItem("contadorIngreso", valorIngreso);
    } else {
      let valorIngreso = "1";
      localStorage.setItem("contadorIngreso", valorIngreso);
    }
    let Ubicacion = event.target[0].value;
    let Valor = event.target[1].value;
    let PeriodoReal = event.target[2].value;
    let comprobacion = localStorage.getItem("Ingresos");
    //console.table(JSON.stringify(comprobacion));

    if (comprobacion != null) {
      localStorage.setItem(
        "Ingresos",
        comprobacion + JSON.stringify({ Ubicacion, Valor, PeriodoReal })
      );
    } else {
      localStorage.setItem(
        "Ingresos",
        JSON.stringify({ Ubicacion, Valor, PeriodoReal })
      );
    }
    var comprobacion2 = localStorage.getItem("Ingresos");
    IngresosTotales = comprobacion2;
    ListaIngresos();
    // console.log(IngresosTotales,"Agregado")
  };

  const addEgreso = (event) => {
    event.preventDefault();
    let comprobacionValorEgreso = localStorage.getItem("contadorEgreso");
    if (comprobacionValorEgreso != null) {
      let valorEgreso = parseInt(comprobacionValorEgreso) + 1;
      localStorage.setItem("contadorEgreso", valorEgreso);
    } else {
      let valorEgreso = "1";
      localStorage.setItem("contadorEgreso", valorEgreso);
    }
    const Ubicacion = event.target[0].value;
    const Valor = event.target[1].value;
    const PeriodoReal = event.target[2].value;
    let comprobacion = localStorage.getItem("Egresos");

    if (comprobacion != null) {
      localStorage.setItem(
        "Egresos",
        comprobacion + JSON.stringify({ Ubicacion, Valor, PeriodoReal })
      );
    } else {
      localStorage.setItem(
        "Egresos",
        JSON.stringify({ Ubicacion, Valor, PeriodoReal })
      );
    }
    var comprobacion2 = localStorage.getItem("Egresos");
    IngresosTotales = comprobacion2;
    ListaEgresos();
    // var valorAnteriorEgresos = [];
    // for (var k = 0; k < EgresosTotales.length; k++) {
    //   valorAnteriorEgresos.push(EgresosTotales[k]);
    // }
    // // EgresosTotales.push({Ubicacion,Valor,PeriodoReal});
    // valorAnteriorEgresos.push({ Ubicacion, Valor, PeriodoReal });
    // for (var o = 0; o < valorAnteriorEgresos.length; o++) {
    //   EgresosTotales.push(valorAnteriorEgresos[o]);
    // }
    // console.log(valorAnteriorEgresos);
    // ListaEgresos();
    // console.log(EgresosTotales, "Agregado");
  };

  const addCiclos = (e) => {
    e.preventDefault();
    var barraCiclos = e.target[0].value;
    var itemsBarra = [];
    for (var i = 0; i <= barraCiclos; i++) {
      itemsBarra.push(
        <li id={"Ciclo-" + i} className="float-left	">
          <div className="text-center -mt-16  -ml-20">
            <p
              id={"Ingreso-" + i}
              className="text-2xl 	text-green-600 text-white "
            >
              🠕
            </p>
            <p id={"ValorRealC-" + i}>1</p>
            <button className="bg-black rounded-xl w-6 h-6	"></button>
            <p>{i}</p>
            <p id={"Egreso-" + i} className="text-2xl 	text-white  ">
              🠗
            </p>
          </div>
        </li>
      );
    }
    setItemBarra(itemsBarra);
  };

  const ListaIngresos = () => {
    var itemIngreso = [];
    let valUbicacion;
    let valValor;
    let valPeriodoReal;

    // valorAntIngre.push(IngresosTotales);
    let contador = localStorage.getItem("contadorIngreso");
    contador = parseInt(contador);
    let comprobacion = localStorage.getItem("Ingresos");
    //console.log(comprobacion);

    for (var j = 0; j < contador; j++) {
      let posUbicacion = comprobacion.indexOf('{"Ubicacion":"');
      comprobacion = comprobacion.replace('{"Ubicacion":"', "");

      let posValor = comprobacion.indexOf('","Valor":"');
      valUbicacion = comprobacion.substr(posUbicacion, (posValor - posUbicacion));
      comprobacion = comprobacion.replace('","Valor":"', "");

      let posPeriodoReal = comprobacion.indexOf('","PeriodoReal":"');
      valValor = comprobacion.substr(posValor, (posPeriodoReal - posValor));
      comprobacion = comprobacion.replace('","PeriodoReal":"', "");

      let posfinal = comprobacion.indexOf('"}');
      valPeriodoReal = comprobacion.substr(posPeriodoReal, (posfinal - posPeriodoReal));
      comprobacion = comprobacion.replace('"}', "");

      itemIngreso.push({
        "valUbicacion": valUbicacion,
        "valValor": valValor,
        "valPeriodoReal": valPeriodoReal
      }
      );
    }
    setItemIngreso(itemIngreso);
  };

  const listadoIngresos = () => {
    var Ingreso = 
      <ul>
        {itemIngreso.map((data) => {
          return(
            <li className=" col-span-3 text-center  grid grid-cols-4 gap-2 py-2">
              <label> {data.valUbicacion} </label>
              <label> {data.valValor} </label>
              <label> {data.valPeriodoReal} </label>
              <button
                type="submit"
                className="btn bg-green-600 text-white rounded-full  w-7  h-7  text-center text-center mx-10 "
                onClick={() => DeleteArray(data.valUbicacion)}
              >
                X
              </button>
            </li>);
        })}
      </ul>
    //console.log("Ingreso", Ingreso)
    setIngreso(Ingreso);
  }

  const DeleteArray = (id) => {
    console.log(id);
  }

  const ListaEgresos = () => {
    var itemEgreso = [];
    let valUbicacion;
    let valValor;
    let valPeriodoReal;

    let contador = localStorage.getItem("contadorEgreso");
    contador = parseInt(contador);
    let comprobacion = localStorage.getItem("Egresos");
    //console.log(comprobacion);

    for (var j = 0; j < contador; j++) {
      let posUbicacion = comprobacion.indexOf('{"Ubicacion":"');
      comprobacion = comprobacion.replace('{"Ubicacion":"', "")

      let posValor = comprobacion.indexOf('","Valor":"');
      valUbicacion = comprobacion.substr(posUbicacion, (posValor - posUbicacion));
      comprobacion = comprobacion.replace('","Valor":"', "");

      let posPeriodoReal = comprobacion.indexOf('","PeriodoReal":"');
      valValor = comprobacion.substr(posValor, (posPeriodoReal - posValor));
      comprobacion = comprobacion.replace('","PeriodoReal":"', "");

      let posfinal = comprobacion.indexOf('"}');
      valPeriodoReal = comprobacion.substr(posPeriodoReal, (posfinal - posPeriodoReal));
      comprobacion = comprobacion.replace('"}', "");

      itemEgreso.push(
        <li
          key={valUbicacion}
          className=" col-span-3 text-center  grid grid-cols-4 gap-2 py-2"
        >
          <label> {valUbicacion} </label>
          <label> {valValor} </label>
          <label> {valPeriodoReal} </label>
          <button
            type="submit"
            className="btn bg-green-600 text-white rounded-full  w-7  h-7  text-center text-center mx-10 "
          >
            X
          </button>
        </li>
      );
    }
    setItemEgreso(itemEgreso);

  }

  return (
    <div className="">
      <header className="text-center bg-black text-white">
        <h1>Flujo de Caja</h1>
      </header>

      {/*   Cantidad de Ciclos   */}

      <form onSubmit={(e) => addCiclos(e)} className=" text-center ml-50	mt-4">
        <input
          className="text-black border-2 h-7   w-50 rounded-lg w-30"
          placeholder="Cantidad de Ciclos"
          type="number"
          name="Ciclos"
        />
        <button
          type="submit"
          className="btn bg-green-600 text-white rounded-full  w-6 px-1  h-6 mt-2  ml-4 text-center "
        >
          <AiOutlineCheck />
        </button>
      </form>

      {/*   //////////////////   */}

      {/*   Formularios   */}
      <div className="grid grid-cols-2 gap-2 ml-4 mr-4 pt-4">
        <div className="border rounded-md p-2">
          <h1 className="bg-green-600 rounded-md text-white p-1">INGRESOS</h1>
          <div>
            {Ingreso}
          </div>
          <div className="p-2">
            <form
              onSubmit={addIngreso}
              className=" grid grid-cols-4 p-x-2 gap-4"
            >
              <div className=" col-span-3 text-center  grid grid-cols-3 gap-2">
                <input
                  className="text-black border-b-2 h-7 rounded-lg"
                  placeholder="Ubicación"
                  type="number"
                  name="Ubicacion"
                />
                <input
                  className="text-black border-b-2 h-7 rounded-lg"
                  placeholder="Valor"
                  type="number"
                  name="Valor"
                />
                <input
                  className="text-black border-b-2 h-7 rounded-lg"
                  placeholder="Periodo"
                  type="number"
                  name="PeriodoReal"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn bg-green-600 text-white rounded-lg  w-full  h-7  text-center "
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border rounded-md p-2">
          <h1 className="bg-red-600 rounded-md text-white p-1">EGRESOS</h1>
          <div>
            <ul>
              <ul>{itemEgreso}</ul>
            </ul>
          </div>
          <div className="p-2">
            <form
              onSubmit={addEgreso}
              className=" grid grid-cols-4 p-x-2 gap-4"
            >
              <div className=" col-span-3 text-center  grid grid-cols-3 gap-2">
                <input
                  className="text-black border-b-2 h-7 rounded-lg"
                  placeholder="Ubicación"
                  type="number"
                  name="Ubicacion"
                />
                <input
                  className="text-black border-b-2 h-7 rounded-lg"
                  placeholder="Valor"
                  type="number"
                  name="Valor"
                />
                <input
                  className="text-black border-b-2 h-7 rounded-lg"
                  placeholder="Periodo"
                  type="number"
                  name="PeriodoReal"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn bg-red-600 text-white rounded-lg  w-full  h-7  text-center "
                >
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
        <ul id="Barra">{itemBarra}</ul>
      </div>
      {/* /////////////// */}
    </div>
  );
}

export default App;
