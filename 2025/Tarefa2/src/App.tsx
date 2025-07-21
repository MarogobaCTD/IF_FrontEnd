
import ImagensSVG from './components/Imagens';
import CabHeader from './components/CabHeader';
import Apresentacao from './components/Apresentacao';
import CulturaCard from './components/CulturaCard';
import MensagemTcc from './components/MensagemTcc';
import RodFooter from './components/RodFooter';
import { atividades } from './dados/atividades';

function App() {
    const isUserLoggedIn: boolean = true;
   
    return (
        <div className="container-fluid bg-warning">
            <ImagensSVG />

            <div className="container-Msg">    
                <CabHeader />            
                <MensagemTcc isUserLoggedIn={isUserLoggedIn} />                
            </div>

            <div className="container">
                <main>                          
                   <Apresentacao />
                   <section className="my-5">
                        <h2 className="text-center mb-4">Implementações</h2>
                        <div className="row">
                            {atividades.map(item =>
                                <CulturaCard
                                    nome={item.nome}
                                    descricao={item.descricao}
                                    previsao={item.previsao}
                                    imageUrl={item.imageUrl}
                                    emExecucao={item.emExecucao}
                                />
                            )}
                        </div>
                    </section>
                </main>
                             
            </div>
            <RodFooter />  
        </div>
    );
}

export default App;