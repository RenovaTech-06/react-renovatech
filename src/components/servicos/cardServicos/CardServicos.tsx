// src/components/cardServicos/CardServicos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Servicos from '../../../models/Servicos';

interface CardServicoProps {
  post: Servicos;
}

function CardServicos({ post }: CardServicoProps) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105">
      <div>
      <img src={post.foto} className='w-full h-72 object-cover ' alt="Imagem ilustrativa do serviço fornecido" />
        <div className="flex items-center bg-indigo-500 p-4">
          <img
            src={post.cliente?.foto}
            alt={post.cliente?.razaoSocial}
            className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
          />
          <h3 className="ml-4 text-xl font-bold text-white">{post.cliente?.razaoSocial}</h3>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-700">{post.contato}</h4>
          <p className="mt-2 text-gray-600">{post.descricao}</p>
          <p className="mt-2 text-gray-600">Setor de Atuação: {post.setorAtuacao?.descricao}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarServico/${post.id}`} className="w-full">
          <button className="w-full py-3 text-white bg-indigo-500 hover:bg-indigo-700 transition-colors">Editar</button>
        </Link>
        <Link to={`/deletarServico/${post.id}`} className="w-full">
          <button className="w-full py-3 text-white bg-red-500 hover:bg-red-700 transition-colors">Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServicos