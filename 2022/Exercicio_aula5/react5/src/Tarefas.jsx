import React, { useEffect, useState } from "react";
import Item from "./Item";

const Tarefas = (props) => {

    const [array, setArray] = useState([]);
    const [focusDiv, setFocusDiv] = useState(false);

    useEffect(() =>{
        setArray(props.lista)
    }, [props.lista]);

    if (array.length === 0){
        return (
            <>
            </>
        )
    }
    
    return (
        <ul>
            {array.map((tarefa, index) => (                
                <li className="list-group-item border-0" key={index} id={index}>
                    <div className="input-group px-5" onClick={setFocusDiv}>      
                        <input className="form-check-input me-1 mt-2" type="checkbox" value=""/>
                        <Item descricao={tarefa} chave={index} alterarTarefa={props.alterarTarefa} removerTarefa={props.removerTarefa}/>
                    </div>
                </li>
            ))}
        </ul>
        
    )
}

export default Tarefas;