import "../src/UsuarioSaida.css";
import React, {Component, useEffect} from "react";

class UsuarioSaida extends Component {
    constructor(props){
        super(props);

        this.state = {
            nome: "Maria da Silva",
            idade: 0
        };
    }

    changeUsuarioSaida = () => {
        this.setState ({
            nome: this.props.nome,
        })  
     }
    
    render(props){
        return(
            <div className={`borderDiv`}>
                <p>Login: {this.props.nome}</p>
                <p>{this.state.nome} ainda gosta de brincar de jogar bola!</p>
                <button type="button" onClick={this.changeUsuarioSaida}>Mudar Parágrafo</button>
            </div>
        )
    }
}

export default UsuarioSaida;