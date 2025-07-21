// 1. Definindo a Interface de Props com TypeScript
interface CulturaCardProps {
    nome: string;
    descricao: string;
    previsao: string;
    imageUrl: string;
    emExecucao?: boolean; //Opcional
}

// 2. Componente usando tipagem TypeScript direta
function CulturaCard({
    nome,
    descricao,
    previsao,
    imageUrl,
    emExecucao
}: CulturaCardProps) {

    return (
        <div className="col-lg-4 mb-4">
            {/* Card com estilo uniforme para todos os produtos */}
            <div className={emExecucao ? "card border border-2 border-danger" : "card h-100 border"}>
                {/* Badge para produtos destacados */}
                {emExecucao && (
                    <div className="position-center top-0 end-0 p-2">
                        <span className="card-header text-center text-white bg-danger">Primeiro a ser implementado</span>
                    </div>
                )}

                <img
                    src={imageUrl}
                    className="card-img-top"
                    alt={nome}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{nome}</h5>
                    <p className="card-text mb-3">{descricao}</p>
                    {emExecucao && (<p className="card-text text-danger fw-bold fs-5 mb-3">
                        Desenv. (mês): {previsao} 
                    </p>)}
                    <a href="#" className="btn btn-primary">
                        Ver Detalhes
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CulturaCard;