
import ImagensSVG from './components/Imagens';
import CabHeader from './components/CabHeader';
import Apresentacao from './components/Apresentacao';
import CulturaCard, { type CulturaCardData } from './components/CulturaCard';
import MensagemTcc from './components/MensagemTcc';
import RodFooter from './components/RodFooter';
import { useState } from 'react';

function App() {
    const isUserLoggedIn: boolean = true;
    
    const [atividades, setAtividades] = useState<CulturaCardData[]>([
        {
            id: 1,
            nome: "Cadastro de Usuários",
            descricao: "Realizará o cadastro dos usuários que trabalharam com o sistema.",
            previsao: "Agosto/2025",
            imageUrl: "./src/icons/usuarios.png",
            emExecucao: true, // Este terá um badge de destaque
        },
        {
            id: 2,
            nome: "Cadastro dos Agentes",
            descricao: "Realizará o cadastro dos agentes culturais (artistas) os quais poderão posteriormente cadastrar a sua função e seu portifólio.",
            previsao: "Setembro/2025",
            imageUrl: "./src/icons/agentes.png",
        },
        {
            id: 3,
            nome: "Cadastro dos Proponentes",
            descricao: "Realizará o cadastro dos Proponentes que trabalharam com os projetos aprovados para realizar a administração e acompanhamento dos projetos.",
            previsao: "Outubro/2025",
            imageUrl: "./src/icons/projetos.png",
        },
        {
            id: 4,
            nome: "Cadastro de Atividades",
            descricao: "Permitirá ao contratado registrar as atividades do projeto documentando com fotos, vídeos e resumo da atividade no dia e horários agendados.",
            previsao: "Setembro/2025",
            imageUrl: "./src/icons/atividades.png",
        },        
        {
            id: 5,
            nome: "Processo de Pagamento",
            descricao: "Processará os pagamentos dos artistas conforme as datas de pagamentos com a aprovação do relatório de atividades por período trabalhado.",
            previsao: "Outubro/2025",
            imageUrl: "./src/icons/pagamentos.png",            
        },
        {
            id: 6,
            nome: "Dashboard dos Projetos",
            descricao: "Permitirá acompanhar o desenvolvimento dos projetos verificando possíveis atrasos, demandas criadas, pagamentos e outras atividades.",
            previsao: "Outubro/2025",
            imageUrl: "./src/icons/dashboard.png",
        },
    ]);


    const [searchTerm, setSearchTerm] = useState<string>('');

    const addNewAtividades = () => {
        // Cria uma nova atividade
        const NewAtividades: CulturaCardData = {
            id: atividades.length + 1,
            nome: 'Cadastro do Projeto',
            descricao: 'Novo projeto a ser executado na plataforma',
            previsao: '25/12/2025',
            imageUrl: './src/icons/arte.png'
        };

        // IMPORTANTE: Criamos um novo array (imutabilidade)
        // Espalhamos (...) as atividades existentes e adicionamos o novo
        setAtividades([...atividades, NewAtividades]);
    };

    // Função para lidar com mudanças no campo de busca
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Filtragem das atividades com base no termo de busca
    const filteredAtividades = atividades.filter(atividade =>
        atividade.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    /* console.log(searchTerm);  */

    return (
        <div className="container-fluid bg-warning">
            <ImagensSVG />

            <div className="container-Msg">    
                <CabHeader />            
                <MensagemTcc isUserLoggedIn={isUserLoggedIn} />                
            </div>

            <main className="container"> 
                
                   <Apresentacao />
                   {/* Sessão de busca */}
                   <section className="my-4">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar atividades..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <span className="input-group-text">
                                        <i className="bi bi-search"></i>🔍
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>  
                    {/* Sessão dos cards de atividaes */}                      
                    <section className="my-5">
                        <h2 className="text-center mb-4">Implementações</h2>
                        {/* mudado o map para passar todo o elemento para a estrutura CulturaCard - limpado a passagem item a item*/}
                        <div className="row">
                            {filteredAtividades.length > 0 ? (
                              filteredAtividades.map(atividades => (
                                <CulturaCard
                                    key={atividades.id}
                                    atividade={atividades}                                    
                                /> ))
                            ) : (
                                <div className='col-12 text-center'>
                                    <p className="lead">Nenhum produto encontrado com esse termo.</p>    
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Seção de Adição */}
                    <div className="row mb-4">
                       <div className="col-md-4 mx-auto">
                          <button
                            className="btn btn-success w-100"
                            onClick={addNewAtividades}
                          >
                            Adicionar Atividade
                        </button>
                    </div>
                </div>
                             
            </main>
            <RodFooter />  
        </div>
    );
}

export default App;