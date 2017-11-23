import React from 'react';

export class CampoTexto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        }
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({ value })  // value: value //pero como se llama igual se puede poner un solo value
        if(this.props.onValueChanged)
           this.props.onValueChanged(value);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }
    render(){
        return (
            <div>
                <label>{this.props.label}
                  <input value={this.state.value} type={this.props.type} onChange={this.onChange}/>
                </label>
            </div>
        )
    }
}