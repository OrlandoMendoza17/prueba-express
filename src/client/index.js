import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const { ENV } = process.env

ReactDOM[
  ENV === "development"
    ? "render"
    : "hydrate"
](
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
)