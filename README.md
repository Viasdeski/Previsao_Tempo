# Previsão do Temppo
=======

A Weather App é uma aplicação web simples que permite que você verifique a previsão do tempo atual para uma cidade. A aplicação utiliza a API do [WeatherAPI](https://www.weatherapi.com/) para obter as informações do tempo.

## Funcionamento
------------

Ao abrir a aplicação, você verá um campo de entrada onde poderá digitar o nome da cidade e do estado que deseja consultar a previsão do tempo. Após digitar o nome da cidade e do estado, clique no botão "Pesquisar" para buscar as informações do tempo.

As informações exibidas incluem:

* Ícone da condição do tempo
* Nome da cidade e do estado
* Temperatura atual em graus Celsius
* Sensação térmica em graus Celsius
* Condição do tempo (por exemplo, ensolarado, nublado, chuvoso)
* Velocidade do vento em km/h
* Data e hora da última atualização das informações do tempo

## Como Testar
-----------

Para testar a Aplicação, siga estas etapas:

1. Clone este repositório em sua máquina local usando o comando `git clone https://github.com/seu-usuario/weather-app.git`.
2. Navegue até o diretório do projeto usando o comando `cd previsao-do-tempo`.
3. Instale as dependências do projeto executando o comando `npm install`.
4. Lembre de adicionar no arquivo `App.js` em `const key = "SUA_CHAVE_AQUI"` a sua chave cadastrada no WeatherAPI.
5. Inicie a aplicação executando o comando `npm start`.
6. Abra a aplicação em seu navegador, digite o nome de uma cidade e seu estado no campo de entrada e clique no botão "Pesquisar" para ver as informações do tempo.

## Observações
-----------

* Busque pesquisar a cidade digitando seu nome e seu estado para um retorno mais exato.
* A aplicação utiliza o formato de data "dd-mm-yyyy HH:mm" para exibir a data e hora da última atualização das informações do tempo.

## Tecnologias Utilizadas
----------------------

* React
* Axios
* Bootstrap

## Licença
-------
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
