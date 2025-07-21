// 1. Definindo a Interface de Props com TypeScript
interface CulturaCardProps {
    title: string;
    description: string;
    prevision: number;
    imageUrl: string;
    isFeatured?: boolean; //Opcional
}

// 2. Componente usando tipagem TypeScript direta
function CulturaCard({
    title,
    description,
    prevision,
    imageUrl,
    isFeatured
}: CulturaCardProps) {

    return (
        <div className="col-md-4 mb-4">
            {/* Card com estilo uniforme para todos os produtos */}
            <div className="card h-100 border">
                {/* Badge para produtos destacados */}
                {isFeatured && (
                    <div className="position-absolute top-0 end-0 p-2">
                        <span className="badge bg-primary">Destaque</span>
                    </div>
                )}

                <img
                    src={imageUrl}
                    className="card-img-top"
                    alt={title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mb-3">{description}</p>
                    <p className="card-text fw-bold fs-5 mb-3">
                        Desenv. (mês): {prevision} 
                    </p>
                    <a href="#" className="btn btn-primary">
                        Ver Detalhes
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CulturaCard;