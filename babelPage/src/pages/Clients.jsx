import { useFetch } from "../api/useFetch";

export default function Clients() {
    const { data, loading, error } = useFetch("/api/db.json");

    const company = data?.clients || [];

    if (loading) return <p>Cargando clientes</p>
    if (error) return <p>Error {error.message}</p>

    return (
        <>
            <div className="container">
                {company.length > 0 ? (
                    <ul className="logoTable">
                        {company.map((client, index) => (
                            <li key={index}>
                                <img src={client.logo || '/images/default-logo.jpg'} alt={`Logo de ${client.name}`} />
                                <p>{client.name}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay datos disponibles.</p>
                )}
            </div>
        </>
    )
}