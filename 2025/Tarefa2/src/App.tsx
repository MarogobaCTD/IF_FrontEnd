import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [mensagem, setMensagem] = useState<string>('');

  function calcularDiasRestantes(dataEntrega: string): number {
    const hoje = new Date();
    const entrega = new Date(dataEntrega);

    hoje.setHours(0, 0, 0, 0);
    entrega.setHours(0, 0, 0, 0);

    const diffMs = entrega.getTime() - hoje.getTime();
    const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return dias;
  }

  useEffect(() => {
    const dias = calcularDiasRestantes('2026-03-30');

    if (dias > 0) {
      setMensagem(`Faltam ${dias} dia${dias === 1 ? '' : 's'} para a entrega do TCC.`);
    } else if (dias === 0) {
      setMensagem('Hoje é o dia da entrega do TCC!');
    } else {
      setMensagem(`O prazo terminou há ${Math.abs(dias)} dia${Math.abs(dias) === 1 ? '' : 's'}.`);
    }
  }, []); 

  return (
    <>
     <section>
      <div className="alert alert-info my-2">          
          <h3>{mensagem}</h3>
      </div>
     </section>      
    </>
  )
}

export default App
