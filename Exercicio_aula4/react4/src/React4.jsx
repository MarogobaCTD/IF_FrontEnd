import { useEffect, useState } from "react";

const React4 = (props) =>{

    const[logado, setLogado] = useState(false);
    let login = {Texto: "Por favor faça o Login.", Imagem: "Reprovado.jpg"}
    const[img, setImg] = useState(login);

    let btnLabel;
    if (logado){
        btnLabel = "Logout";
    } else {
        btnLabel = "Login";
    }

    function handleLogado(){
        if (!logado){
            setImg({Texto: "Seja bem-vindo!", Imagem: "Aprovado.jpg"});
        } else {
            setImg(login); 
        }
        setLogado(!logado);
        console.log(logado);
    }

    return (
        <>
            <div className="container m-0">
                <p className={logado ? "text-success" : "text-danger"}>Esse texto contêm {props.Texto.length} caracteres</p>
            </div>
            <div  className="container m-0">
                <div>
                    <h1 className={logado ? "text-success" : "text-danger"}>{img.Texto}</h1>
                    <img src={img.Imagem} width="30%" alt="Imagem"/>
                </div>
                <button 
                className={logado ? "btn btn-success" : "btn btn-danger"}
                onClick={() => handleLogado()}
                >{btnLabel}</button>
            </div>
            
        </>
    )
}

export default React4;