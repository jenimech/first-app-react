import React from 'react';
import { CampoTexto } from './CampoTexto'
import { Chucheria } from "./Chucheria";

export class FormChucheria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.item && this.props.item.nombre || "", 
            precio: this.props.item && this.props.item.precio || 0
        }
    }
    cambiaCampoFrom = (attr, value) => {
      this.setState({
          [attr]: value
      })
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            nombre: newProps.item && newProps.item.nombre || "",
            precio: newProps.item && newProps.item.precio || 0,
        })
    }
    agregar = (event) => {
      event.preventDefault();
      //si uso el paso 1 no hace falta nada, pero en el caso de paso 2 si
      const c = new Chucheria(this.state.nombre, this.state.precio) // esto es solo para el caso 2
      if(this.props.onAgregada) {
          this.props.onAgregada(c); //aqui está llamando a la funcion que hemos definido en la props
      }
      this.setState({
          nombre: "",
          precio: 0
      });
    }
    render() {
        return (
            <ContenedorFormulario>
                <form>
                    {
                        this.props.titulo ? <h2>{this.props.titulo}</h2> : null
                    }
                    <CampoTexto 
                    label="Nombre"
                    value={this.state.nombre}
                    onValueChanged={(v) => this.cambiaCampoFrom('nombre', v)}/>
                    <CampoTexto 
                    label="Precio" 
                    value={this.state.precio}
                    onValueChanged={(v) => this.cambiaCampoFrom('precio', v)} />
                    <button type="button" onClick={this.agregar}>Save</button>
                </form>
            </ContenedorFormulario>
        )
    }
}
//como este componente tiene contenido hay que mostrarlo con props.children
const ContenedorFormulario = (props) => {
    // console.log(props);
    return (
        <div>{props.children}</div>
    )
}