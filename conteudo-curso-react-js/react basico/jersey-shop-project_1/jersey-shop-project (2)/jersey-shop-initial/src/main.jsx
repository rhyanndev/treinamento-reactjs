//  Importando funções do react para rodar a Aplicação
// JSX permite trabalhar com HTML e JS ao mesmo tempo
// Sepração em componentes, sempre com letra maíuscula

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Função .render -> Vai fazer com que o projeto apareça no browser
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
