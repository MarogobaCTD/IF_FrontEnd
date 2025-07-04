import { useState, useEffect } from 'react';
import Tarefa from './Tarefas';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [chave, setChave] = useState("");

  const addTarefas = (event) => {  
    if (event.key === "Enter" || event.key === 13 || event.type === "click"){
      setTarefas([...tarefas, texto]);
      setChave(event.type === "click" ? event.type : event.key);
      toast('Adicionado com sucesso!', {
        icon: '👏',
      });
    }
  }

  const removerTarefa = (chave) => {
    const tmpArray = [...tarefas];
    tmpArray.splice(chave, 1);
    setTarefas(tmpArray);
    toast.success('Item Excluído!');
  }

  const alterarTarefa = (texto, chave) => {
    const tmpArray = [...tarefas];
    tmpArray.splice(chave, 1, texto);
    setTarefas(tmpArray);
  }

  useEffect(()=>{
    if (chave === "Enter" || chave === 13 || chave === "click") {
      setTexto("");
      setChave("");
    }
  },[chave])

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-group p-5">
          <input type="text" className="form-control"
            placeholder="Adicionar Tarefa"
            value={texto} 
            onChange={(event) => setTexto(event.target.value)} 
            onKeyDown={(e) => addTarefas(e)}/>
            <span className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={(event) => {addTarefas(event)}}>+</button>
            </span>    
        </div>
      </header>
      <Tarefa lista={tarefas} removerTarefa={removerTarefa} alterarTarefa={alterarTarefa} />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
