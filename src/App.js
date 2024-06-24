import axios from "axios";
import React, { useState } from "react";
import { WeatherInfo } from "./components/WeatherInfo";

function App() {

  const [city, setCity] = useState("");
  const [weatherData, setweatherData] = useState(null);


  const key = "SUA_CHAVE_AQUI"

  const handleInputChangeCity = (e) => {
    setCity(e.target.value);
  };


  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}$lang=pt`
      );
      setweatherData(response.data);
    } catch (error) {
      console.error('Não foi possível buscar a previsão do tempo', error);
    }
  };


  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#top">
          Previsão do Tempo - Vítor
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron">

          <h1>
            Verifique a previsão do tempo para uma cidade!
          </h1>

          <p className="lead">
            Digite o nome do <b>Cidade</b> e do <b>Estado</b> para pesquisar a previsão do tempo!
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Digite o nome da Cidade e do Estado"
                onChange={handleInputChangeCity}
                className="form-control"
                value={city}>
              </input>
            </div>
          </div>

          <button onClick={getWeatherData} className="btn btn-primary btn-lg">Pesquisar</button>

          <div className="mt-4 d-flex aling-items-center">           
            <WeatherInfo weatherData={weatherData} />
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
