import { useEffect, useState } from 'react'

interface MensagemTcc{
  isUserLoggedIn: boolean
}

function MensagemTcc({isUserLoggedIn}: MensagemTcc) {

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
     <section>
       { !isUserLoggedIn && (
         <div className="alert alert-info my-2">          
            <h3>{mensagem}</h3>
         </div>
       )}              
       
        <div className="my-4 p-3 bg-light rounded shadow-sm">
            <h5 className="mb-3">Status da Aplicação</h5>
            <p>Data de hoje: {new Date().toLocaleDateString()}</p>
            {isUserLoggedIn ? (
                <div className="alert alert-success" role="alert">
                    Usuário está logado! Aproveite o conteúdo.
                </div>
            ) : (
                <div className="alert alert-warning" role="alert">
                    Usuário não está logado. <a href="#" className="alert-link">Faça login</a> para continuar.
                </div>
            )}
        </div>   
     </section>   
  )
}

export default MensagemTcc;
