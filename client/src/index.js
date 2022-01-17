import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './AppRouter'

import 'normalize.css/normalize.css';
import './styles/styles.scss'


const jsx = (
  <div>
    <AppRouter />
  </div>
)

ReactDOM.render(jsx, document.getElementById('root'))