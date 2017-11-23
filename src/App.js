import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListaChucherias }  from './ListaChucherias'
import { Chucheria }        from './Chucheria';
import { FormChucheria }    from "./AgregarChucheria";
import { Contador }         from "./Contador";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chucherias: JSON.parse(localStorage.getItem("chucherias")) || [],
      seleccionada: null
    }
  }
  agregar = (nueva) => {
    // const nueva = new Chucheria("nueva chucheria", "25");
    this.setState((oldState, props) => {
      return {
        chucherias: [...oldState.chucherias, nueva]
      }
    }, () => this.save());
    
  }

  save(){
    localStorage.setItem("chucherias", JSON.stringify(this.state.chucherias))
  }

  editar = (editado) => {
    this.setState((oldState) => {
      const position = oldState.chucherias.indexOf(this.state.seleccionada);
      oldState.chucherias[position] = editado;
      return {
        chucherias: [...oldState.chucherias]
      }
    }, () => {
      this.save();  //agregar () no se guarda con save nada mas, hay que poner save()
      this.setState({seleccionada: null})
    });
  }

  showEditar = (item) => {
    console.log('show editar en app.js');
    console.log(item);
    this.setState({seleccionada: item})
  }
  
  cleanArray = ( actual ) => {
    var newArray = new Array();
    for( var i = 0, j = actual.length; i < j; i++ ){
        if ( actual[ i ] ){
          newArray.push( actual[ i ] );
      }
    }
    return newArray;
  }

  delete = (item) => {
    console.log('delete action app.js')
    this.setState((oldState) => {
      const position = oldState.chucherias.indexOf(item);
      delete oldState.chucherias[position];
      const newList = this.cleanArray(oldState.chucherias)
      console.log('new list: ', newList);
      return {
        chucherias: newList
      }
    }, this.save() );
  }
  getAction = (item, action) => {
    console.log('action app.js: ', action);
    if(action === 'edit'){
      this.showEditar(item);
    }
    if(action === 'delete') {
      this.delete(item);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chucherias</h1>
        </header>
        { getContador() }
        <main>
          <FormChucheria titulo="Agregar" onAgregada={this.agregar} />
          <ListaChucherias color="blue" items={this.state.chucherias} onItemSelected={(item, action) => this.getAction(item, action)}/>
          { this.state.seleccionada ? 
            <FormChucheria titulo="Editar"  onAgregada={this.editar} item={this.state.seleccionada}/> : null}
        </main>
      </div>
    );
  }
}

//le pongo false para no mostrarlo
const getContador = () => {
  false ? <Contador tope={5} onTopeAlcanzado={() => console.log("tope alcanzado")}/> : ''
}

export default App; // para que se pueda usar en otros archivo
