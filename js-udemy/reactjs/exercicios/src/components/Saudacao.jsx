import React, { Component } from "react"

export default class Saudacao extends Component {
  constructor(props) {
    super(props)

    this.setTipo = this.setTipo.bind(this)

    this.state = {
      tipo: "fala",
      nome: "pedro",
    }
  }

  setTipo(e) {
    this.setState({ tipo: e.target.value })
  }

  render() {
    const { tipo, nome } = this.state

    return (
      <>
        <h1>
          {tipo} {nome}
          <hr />
          <input
            type="text"
            name=""
            id=""
            placeholder="Tipo"
            value={tipo}
            onChange={this.setTipo}
          />
          <input type="text" name="" id="" placeholder="Nome" value={nome} />
        </h1>
      </>
    )
  }
}
