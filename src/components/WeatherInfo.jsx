import React from "react";

export function WeatherInfo({ weatherData }) {

    if (!weatherData) return null;

    const { location, current } = weatherData;
    const { name, region, country, localtime } = location;
    const { temp_c, condition, feelslike_c, wind_kph} = current;
    const {icon} = condition;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}`

    }

    return (
        <div>
            <img src={icon} alt={condition.text}/> 
            <h2>{name}, {region} -  {country}</h2>
            <p>Temperatura: {temp_c}°C</p>
            <p>Sensação térmica: {feelslike_c}°C</p>
            <p>Condição: {condition.text}</p>
            <p>Velocidade do vento: {wind_kph} km/h</p>
            <p>Data e Hora: {formatDate(localtime)}</p>
        </div>
    );

};