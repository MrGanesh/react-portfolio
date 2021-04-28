import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from './styles/GlobalStyle'
import App from "./App";
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <>
  <BrowserRouter>
<App />
</BrowserRouter>
<GlobalStyle />
</>
, document.getElementById("root"));
