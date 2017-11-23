import React from 'react';

export class Contador extends React.Component {
  constructor(props){
    super(props);
    // initializamos el estado
    this.state = {
      contador: 0,
      apretado: false
    };
   // this.sumar = this.sumar.bind(this); // asi le cambio el this a la funcion suma, para q acceda a this.contador, (forma vieja)
  }
  //nueva forma seria agregar arrow function a sumar para que acceda al this
  sumar = () => {
    // hay q llamar a setState con una funcion, IMPORTANTE LOS () DESPUES DE LA =>
    // La funcion se usa para cuando necesito el valor anterior de la props
    let suma = true;
    if(this.props.tope){
      if(this.state.contador>=this.props.tope){
        suma = false;  //llego el tope
        if(this.props.onTopeAlcanzado){
          this.props.onTopeAlcanzado();
        } 
      }
    }
    if(suma) this.setState((oldState, props) => ({
        contador: oldState.contador+1
      })
    );  
    console.log(`suma: ${this.state.contador}`);
  }
  apretar = () => {
    this.setState({apretado: true})
  }
  desapretar = () => {
    this.setState({apretado: false})
  }
  render() {
    return (
      <section>
        <button 
          style={{
            backgroundColor: this.state.apretado ? 'Yellow' : ''
          }}
          onMouseDown={this.apretar}
          onMouseUp={this.desapretar}
          onClick={this.sumar}>Apretame</button>
        <p>{this.state.contador}</p>
      </section>
    )
  }
}