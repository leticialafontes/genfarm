import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";



function ListaCategorias() {

    // const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    // const { handleLogout } = useContext(AuthContext)

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            }
        }


    useEffect(() => {
        buscarCategoria()    
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;