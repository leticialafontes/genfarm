import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            GenFarm
          </Link>

          <div className="flex gap-4">
            <Link to="/categorias" className="hover:text-2xl font-bold">
              Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:text-2xl font-bold">
              Cadastrar categoria
            </Link>
            <Link to="/itens">Itens</Link>
            <Link to="/compras">Compras</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/sair">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
