
function App() {

    const appTitle: string = "Minha Primeira Página React!";
    const welcomeMessage: string = "Explorando JSX, Componentes Funcionais, TypeScript e Bootstrap.";
    const isUserLoggedIn: boolean = false;

    return (

        <div className="container mt-4">
            <header className="p-3 mb-3 bg-dark text-white rounded text-center">

                <h1>{appTitle}</h1>
                <p className="lead">{welcomeMessage}</p>
            </header>

            <main>
                <div className="card mb-3">
                    <h5 className="card-title">JSX na Prática</h5>
                    <p>Data atual: {new Date().toLocaleTimeString()}</p>

                    {isUserLoggedIn ? ( 
                        <div className="alert alert-sucess" role="alert">
                            Status: Usuário Conectado! Bem-vindo(a)!
                        </div>
                    ) : (
                        <div className="alert alert-warning" role="alert">
                            Status: Usuário Desconectado! Por favor, conecte-se.
                        </div>
                    )}
                    <p className="mt-2">
                        <small>
                            Experimente mudar o valor da variável <code>isUserLoggedIn</code> no código fonte!
                        </small>
                    </p>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Elemento de Formulário Simples</h5>
                        <div className="mb-2">
                            <label htmlFor="exampleInput" className="form-label">Seu Nome:</label>
                            <input 
                              type="text"
                              id="exampleInput"
                              className="form-control"
                              placeholder="Digite seu nome aqui"
                            /> 
                        </div>
                        <button type="button" className="btn btn-primary">
                            Enviar (Visual)
                        </button>
                        <p className="form-text mt-1">
                            <small>
                                Este botão ainda não faz nada. Interatividade virá nas aulas futuras!
                            </small>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="pt-3 mt-4 text-muted border-top text-center">
                <p>@ {new Date().getFullYear()} Minha primeira Aula de React</p>
            </footer>
        </div>

    )

}

export default App;