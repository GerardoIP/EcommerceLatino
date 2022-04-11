import React, { Component } from 'react';
//Importar imagen de la carpeta images.
import logo from './images/statista-logo.png'
//Importar el estilo css de la carpeta css.
import './css/App.css';
//Importar Swal de Sweetalert2 para crear alertas.
import Swal from 'sweetalert2';

//Importar componentes
import Graficas from './components/Graficas';
import GrafMexico from './components/GrafMexico';
import GrafArgentina from './components/GrafArgentina';
import GrafBrasil from './components/GrafBrasil';
import GrafColombia from './components/GrafColombia';
import GrafPeru from './components/GrafPeru';
import GrafLat from './components/GrafLat';

//Cuando abra la página, cargue la gráfica automáticamente. 
window.onload = function () {
  document.getElementById("graficos").style.display = "block";
  document.getElementById("Mexico").style.display = "none";
  document.getElementById("Peru").style.display = "none";
  document.getElementById("Argentina").style.display = "none";
  document.getElementById("Colombia").style.display = "none";
  document.getElementById("Brasil").style.display = "none";
  document.getElementById("Latinoamerica").style.display = "none";
}

//Función para mostrar la gráfica dependiendo del país seleccionado.
function mostrarPais() {
  var pais = document.getElementById("pais").value;
  switch (pais) {
    case 'Todos':
      //Muestra la gráfica seleccionada y oculta las demás.
      document.getElementById("Argentina").style.display = "none";
      document.getElementById("graficos").style.display = "block";
      document.getElementById("Brasil").style.display = "none";
      document.getElementById("Mexico").style.display = "none";
      document.getElementById("Colombia").style.display = "none";
      document.getElementById("Peru").style.display = "none";
      document.getElementById("Latinoamerica").style.display = "none";
      break;
    case 'Argentina':
      document.getElementById("Argentina").style.display = "block";
      document.getElementById("graficos").style.display = "none";
      document.getElementById("Brasil").style.display = "none";
      document.getElementById("Mexico").style.display = "none";
      document.getElementById("Colombia").style.display = "none";
      document.getElementById("Peru").style.display = "none";
      document.getElementById("Latinoamerica").style.display = "none";
      break;
    case 'Brasil':
      document.getElementById("Argentina").style.display = "none";
      document.getElementById("graficos").style.display = "none";
      document.getElementById("Brasil").style.display = "block";
      document.getElementById("Mexico").style.display = "none";
      document.getElementById("Colombia").style.display = "none";
      document.getElementById("Peru").style.display = "none";
      document.getElementById("Latinoamerica").style.display = "none";
      break;
    case 'Colombia':
      document.getElementById("Argentina").style.display = "none";
      document.getElementById("graficos").style.display = "none";
      document.getElementById("Brasil").style.display = "none";
      document.getElementById("Mexico").style.display = "none";
      document.getElementById("Colombia").style.display = "block";
      document.getElementById("Peru").style.display = "none";
      document.getElementById("Latinoamerica").style.display = "none";
      break;
    case 'México':
      document.getElementById("Argentina").style.display = "none";
      document.getElementById("graficos").style.display = "none";
      document.getElementById("Brasil").style.display = "none";
      document.getElementById("Mexico").style.display = "block";
      document.getElementById("Colombia").style.display = "none";
      document.getElementById("Peru").style.display = "none";
      document.getElementById("Latinoamerica").style.display = "none";
      break;
    case 'Perú':
      document.getElementById("Argentina").style.display = "none";
      document.getElementById("graficos").style.display = "none";
      document.getElementById("Brasil").style.display = "none";
      document.getElementById("Mexico").style.display = "none";
      document.getElementById("Colombia").style.display = "none";
      document.getElementById("Peru").style.display = "block";
      document.getElementById("Latinoamerica").style.display = "none";
      break;
    case 'Latinoamérica y Caribe':
      document.getElementById("Argentina").style.display = "none";
      document.getElementById("graficos").style.display = "none";
      document.getElementById("Brasil").style.display = "none";
      document.getElementById("Mexico").style.display = "none";
      document.getElementById("Colombia").style.display = "none";
      document.getElementById("Peru").style.display = "none";
      document.getElementById("Latinoamerica").style.display = "block";
      break;
    default:
      //Muestra alerta
      Swal.fire({
        icon: 'error',
        title: '¡Oops...! parece que no has seleccionado ninguna opción.',
        text: 'Por favor, selecciona un país.',
        timer: 5000
      })
      break;
  }
}


function App() {
  return (
    <div className="App">

      {/* Header */}
      <nav class="navbar">
        <div class="container-fluid">
          <img class="logo" src={logo}></img>
        </div>
      </nav>

      {/* Título y descripción */}
      <div class="container titulo">
        <h2>El boom del E-commerce latinoamericano</h2>
        <h6 class="descripcion">Valor de las ventas online en países latinoamericanos entre 2019 y 2024
          (En miles de millones de dólares estadounideses)</h6>
      </div>

      {/* Contenedor de la gráfica y botones */}
      <div class="container grafica">
        <div class="row justify-content-md-center">
          <div class="col-md-2">
            {/* Select con opciones de los países */}
            <select class="form-select pais" id="pais" name="pais">
              <option selected>Selecciona un país</option>
              <option value="Todos">Todos los países</option>
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Perú">Perú</option>
              <option value="Latinoamérica y Caribe">Latinoamérica y Caribe</option>
            </select>
            {/* Botón de aceptar */}
            <button type="button" class="btn btn-primary btnAceptar" onClick={mostrarPais}>Aceptar</button>
          </div>
          {/* Gráficas */}
          <div id="graficos" class="col-md-8"><Graficas /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
          <div id="Mexico" class="col-md-8"><GrafMexico /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
          <div id="Argentina" class="col-md-8"><GrafArgentina /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
          <div id="Brasil" class="col-md-8"><GrafBrasil /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
          <div id="Colombia" class="col-md-8"><GrafColombia /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
          <div id="Peru" class="col-md-8"><GrafPeru /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
          <div id="Latinoamerica" class="col-md-8"><GrafLat /><p class="parrafo">Fuente: Statista Digital Market Outlook</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
