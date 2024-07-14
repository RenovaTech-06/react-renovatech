import React, { useContext, useState } from "react";
import SetorAtuacao from "../../../models/SetorAtuacao";
import { Link } from "react-router-dom";
import { Trash, Pencil } from "@phosphor-icons/react";
import { buscar } from "../../../services/Service";
import Servicos from "../../../models/Servicos";
import { toastAlerta } from "../../../util/toastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import CardServicos from "../../servicos/cardServicos/CardServicos";
import ServicosPorSetor from "../../servicos/servicosPorSetor/ServicosPorSetor";

interface CardSetorAtuacaoProps {
  setorAtuacao: SetorAtuacao;
}

function CardSetorAtuacao({ setorAtuacao }: CardSetorAtuacaoProps) {

  const [servicos, setServicos] = useState<Servicos[]>([]);
  const [mostrarServicos, setMostrarServicos] = useState<boolean>(false);

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  async function buscarServicos() {
    try {
      const response = await buscar(`/servicos/${setorAtuacao.id}`, setServicos, {
        headers: {
          Authorization: token,
        },
      });
      
    } catch (error: any) {
      toastAlerta('Erro ao buscar serviços', 'error');
    }
  }

  const handleMostrarServicos = async () => {
  
      await buscarServicos();
    
    setMostrarServicos(!mostrarServicos);
  };





  return (
    <div className="border flex flex-col rounded-[8px] overflow-hidden relative shadow-lg">
      <header className="pt-12 py-8 px-6 bg-green-800 text-white font-bold text-2xl">
        {setorAtuacao.nome}
      </header>
      <div className="p-4">
        <p>{setorAtuacao.descricao}</p>
      
       
        <button
          onClick={handleMostrarServicos}
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <Link to={`/servicos/${setorAtuacao.id}`}>
            Ver Serviços
            {/* <ServicosPorSetor/> */}
          </Link>
        </button>

        {/* {mostrarServicos && (
          <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {servicos.map((servico) => (
              <CardServicos key={servico.id} post={servico} />
            ))}
          </div>
        )} */}
  
      </div>
      
      <div className="absolute top-2 right-2 flex space-x-2">
        <Link
          to={`/editarSetorAtuacao/${setorAtuacao.id}`}
          className="text-slate-100 bg-purple-400 hover:bg-purple-800 rounded-full flex items-center justify-center w-8 h-8"
        >
          <span className="sr-only">Editar</span>
          <Pencil size={18} weight="fill" />
        </Link>
        <Link
          to={`/deletarSetorAtuacao/${setorAtuacao.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 rounded-full flex items-center justify-center w-8 h-8"
        >
          <span className="sr-only">Deletar</span>
          <Trash size={18} weight="fill" />
        </Link>
      </div>
    </div>
  );
}

export default CardSetorAtuacao;

