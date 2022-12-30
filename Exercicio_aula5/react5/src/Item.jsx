import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const Item = (props) => {

    const [texto, setTexto] = useState("");
    const [cor, setCor] = useState(false);

    const handleTexto = () => {
        setTexto(props.descricao);
        pegaTexto(props.descricao);
    }

    const alterarTexto = (event) => {
        if (event.key === "Enter" || event.key === 13 || event.key === "Tab" || event.key === 9) {
          props.alterarTarefa(texto, props.chave);
          pegaTexto(texto);
          event.preventDefault();
        }
    }

    const removerTarefa = (chave) => {
        props.removerTarefa(chave);
    }

    const pegaTexto = (texto) => {
        if (texto.toUpperCase().search("ESTUDAR") >= 0 ||
            texto.toUpperCase().search("LER") >= 0){
            setCor(true);
        } else {
            setCor(false);
        }
    }

    useEffect(()=>{
        handleTexto();
    }, [cor])

    useEffect(() => {
        handleTexto();
    }, [props.descricao])

    return (
        <>
            <input className={`form-control ${cor ? "bg-info" : ""}`} 
                id="input-item"
                type="text" value={texto}
                onChange={(event) => setTexto(event.target.value)}
                onKeyDown={(e) => alterarTexto(e)} />
            <button 
                className="btn btn-danger m-0 px-3" 
                id="btn-item"
                type="button" 
                onClick={() => removerTarefa(props.chave)}>X</button>
        </>
    )
}

export default Item;