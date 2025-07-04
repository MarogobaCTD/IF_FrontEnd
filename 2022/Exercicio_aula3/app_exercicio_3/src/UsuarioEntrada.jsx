import UsuarioSaida from "./UsuarioSaida";
import { Component } from "react";
import "../src/UsuarioEntrada.css"


class UsuarioEntrada extends Component {
   
        constructor(props){
            super(props);
    
            this.state = {
                nome: "Props.nome",
            };
        }

        changeUsuarioEntrada = (e) => {
            this.setState ({
                nome: e.target.value,
            })  
        }
        
        render(props){
            return (
                <div>
                    <input className="input" 
                    type="text"
                    onChange={this.changeUsuarioEntrada}
                    />
                    {/*<h1>{user}</h1>*/}
                    <UsuarioSaida nome={this.state.nome}/>
                </div>

            );
        }
}

export default UsuarioEntrada;