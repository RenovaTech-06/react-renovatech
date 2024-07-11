import React from 'react'
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servicos'

interface CardServicoProps {
  post: Servicos
}

function CardServicos({post}: CardServicoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <img src={post.foto} className='w-full h-72 object-cover ' alt="Imagem ilustrativa do serviço fornecido" />
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={post.cliente?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.cliente?.razaoSocial}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.contato}</h4>
          <p>{post.descricao}</p>
          <p>Setor Atuação: {post.setorAtuacao?.descricao}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarServico/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarServico/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardServicos