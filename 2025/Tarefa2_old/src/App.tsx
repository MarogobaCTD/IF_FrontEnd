import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-primary">
        Hello, React 19 + Vite + Bootstrap 5!
      </h1>

      <p className="lead">Você clicou <strong>{count}</strong> vezes.</p>

      <Button
        variant="success"
        onClick={() => setCount(prev => prev + 1)}
      >
        Clique aqui
      </Button>
    </div>
  );
}


// src/App.tsx
/*import ProductCard from './components/CulturaCard';

function App() {
    const appTitle: string = "Minha Aplicação com React, TS e Bootstrap!";
    const subTitle: string = "Construindo interfaces incríveis, passo a passo.";
    const isUserLoggedIn: boolean = true;

    // Dados para nossos ProductCards
    const products = [
        {
            id: 1,
            title: "Notebook Gamer",
            description: "Performance extrema para jogos e tarefas pesadas.",
            prevision: 1,
            imageUrl: "images/notebook.png",
            isFeatured: true, // Este terá um badge de destaque
        },
        {
            id: 2,
            title: "Mouse Ergonômico",
            description: "Conforto e precisão para longas horas de uso.",
            prevision: 2,
            imageUrl: "images/mouse.png",
        },
        {
            id: 3,
            title: "Teclado Mecânico",
            description: "Switches responsivos e iluminação customizável.",
            prevision: 3,
            imageUrl: "images/teclado.png",
        }
    ];

    return (
        <div className="container-fluid">
            <header
                className="py-4 px-3 m-3 text-white text-center"
                style={{ backgroundColor: '#563d7c' }}
            >
              <section id="Menu" className="bg-warning">
                <nav className="navbar navbar-expand-sm bg-black p-2 text-white">
                    <div className="container-fluid text-black p-1">            
                        <a href="#" className="navbar-brand d-flex align-items-center">                
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" 
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto me-2" role="img" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/>
                              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                            </svg>
                            <span className="fw-bold text-warning fs-4">Ori-GenSys</span>                
                        </a>
                                          
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#links">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="links">
                          <ul className="nav nav-pills"> 
                            <li className="nav-item"><a href="#" className="nav-link bg-warning text-black active" aria-current="page">Home</a></li> 
                            <li className="nav-item"><a href="#" className="nav-link text-warning">Funcionalidades</a></li> 
                            <li className="nav-item"><a href="#" className="nav-link text-warning">Contato</a></li> 
                            <li className="nav-item"><a href="#" className="nav-link text-warning">Sobre</a></li>             
                            <li className="nav-item d-sm-inline"><a href="#" className="btn btn-danger border border-outline-warning">Login</a></li>
                          </ul>
                        </div>
                    </div>  
                </nav>
              </section>      
            </header>

            <div className="container">
                <main>
                    <p className="lead">
                        Bem-vindo à nossa exploração de React, TypeScript e Bootstrap.
                        Vamos aprender a construir componentes incríveis!
                    </p>

                   // { Status da aplicação }
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

                    //{SEÇÃO DE PRODUTOS }
                    <section className="my-5">
                        <h2 className="text-center mb-4">Nossos Produtos</h2>
                        <div className="row">
                            //{Produtos apresentados individualmente}
                            <ProductCard
                                title={products[0].title}
                                description={products[0].description}
                                prevision={products[0].prevision}
                                imageUrl={products[0].imageUrl}
                                isFeatured={products[0].isFeatured}
                            />
                            <ProductCard
                                title={products[1].title}
                                description={products[1].description}
                                prevision={products[1].prevision}
                                imageUrl={products[1].imageUrl}
                            />
                            <ProductCard
                                title={products[2].title}
                                description={products[2].description}
                                prevision={products[2].prevision}
                                imageUrl={products[2].imageUrl}
                                isFeatured={false}
                            />
                        </div>
                    </section>

                </main>

                <footer className="mt-5 py-4 border-top">
                    <p className="text-center text-muted">© {new Date().getFullYear()} Seu Nome/Empresa. Aula de React.</p>
                </footer>
            </div>
        </div>
    );
}*/
/*export default App;*/