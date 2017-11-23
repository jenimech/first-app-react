import React from 'react';
import PropTypes from 'prop-types'

// este es un componente con estado se usa this.props, si pongo el import react con {Component} puedo usar solo component, sino React.Component
export class ListaChucherias extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items || []
        }
    }
    onClick = (value, action) => {
        console.log('action : ', action);
        this.props.onItemSelected(value, action);
    }
    componentWillReceiveProps(newProps) {
        console.log("newProps: ", newProps);
        this.setState((oldState) => {
            return {
                items: oldState.items || []
            }
        })
    }
    render() {
        return (
            <section>
              <h2 className="" 
                style={{
                    color: this.props.color || "red",
                    backgroundColor: "antiquewhite",
                    padding: "20px",
                    fontSize: "36px"
                  }}>Lista
              </h2>
              <ul>
                  { this.props.items.map(
                      (item, i) => 
                        <li key={i}>{item.nombre}
                        <button onClick={()=>this.onClick(item, "edit")}>Editar</button>
                        <button onClick={()=>this.onClick(item, "delete")}>Eliminar</button>
                        </li>
                    ) 
                  }
              </ul>
            </section>
              
          );
    }
}
// este es un componente sin estado se usa props
// export const ListaChucherias = (props) => {
//     // const getChucherias = () => {
//     // const arrayLis = [2, 3, 4].map(item => <li>{item}</li>)
//     // }
//     return (
//       <section>
//         <h2 className="" 
//           style={{
//               color: props.color || "red",
//               backgroundColor: "antiquewhite",
//               padding: "20px",
//               fontSize: "36px"
//             }}>Lista
//         </h2>
//         <ul>
//             { [2, 3, 4].map(item => 
//                 <li>{item}</li>) 
//             }
//         </ul>
//       </section>
        
//     );
// }

ListaChucherias.PropTypes = {
    color: PropTypes.string
}

// tambien tenemos las default props
ListaChucherias.defaultProps = {
    color: "blue"
}