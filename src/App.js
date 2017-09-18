import React, { Component } from 'react';

import apis from './Api';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      produtos:[],
      carregando: false

    }
  }

  componentDidMount() {
    this.setState({ carregando: true });
    apis.produtosApi()
      .then((res) => {
        this.setState({
          produtos: res.data,
          carregando: false
          })
     // this.setState({"products":res.data})
      console.log(res.data);
    })
  }
  
  render() {
    return (
      <div className="grey lighten-5 blue-grey-text">
        <div id="header" className="container grey lighten-4">

          <h1>Comanda</h1>

        </div>
        <div> 
          <ul id = "produtos" className="container grey lighten-4">
                {this.state.produtos.map(produto => {
                  return (
                    <li key={produto.id}>
                      {produto.nome}
                    </li>
                    )
                  })
                }
          </ul> 
        </div>
      </div>
    )
  }
}

export default App;
