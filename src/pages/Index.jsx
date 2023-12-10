import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/clientes"
import Cliente from "../components/Cliente";

export function loader(){
    console.log(import.meta.env)
    const clientes = obtenerClientes()
    return clientes
}

function Index(){

    const clientes = useLoaderData();

    return (
        <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus clientes</p>

        {clientes.length ? (
            <table className="w-full bg-white shadow mt-5 table-auto">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="">Cliente</th>
                        <th className="">Contacto</th>
                        <th className="">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map( cliente => (
                        <Cliente
                            cliente = {cliente}
                            key = {cliente.id}
                        />
                    ))}
                </tbody>
            </table>
        ) : (
            <p className="text-center mt-10">No hay clientes</p>
        )}
        </>
    )
}

export default Index
