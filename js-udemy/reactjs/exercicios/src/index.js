import React from "react"
import ReactDOM from "react-dom"
import Primeiro from "./components/Primeiro"
import BomDia from "./components/BomDia"
import { BoaTarde, BoaNoite } from "./components/Multiplos"
import Saudacao from "./components/Saudacao"

ReactDOM.render(
  <Saudacao tipo="Bom dia" nome="Pedro" />,
  document.getElementById("root")
)

// ReactDOM.render(<Primeiro />, document.getElementById("root"))

// ReactDOM.render(<BomDia nome="Pedro" />, document.getElementById("root"))

// ReactDOM.render(
//   <>
//     <BomDia nome="Pedro" />
//     <BoaTarde nome="Pedro" />
//     <BoaNoite nome="Pedro" />
//   </>,
//   document.getElementById("root")
// )
