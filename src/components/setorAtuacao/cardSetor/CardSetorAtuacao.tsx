import React from 'react'
import SetorAtuacao from '../../../models/SetorAtuacao'
import { Link } from 'react-router-dom'


interface CardSetorAtuacaoProps {
    setorAtuacao : SetorAtuacao
   }

function CardSetorAtuacao({setorAtuacao}: CardSetorAtuacaoProps) {

  return (
    <>
      <div className='border flex flex-col rounded-[8px] overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>{setorAtuacao.nome}</header>
            <div className='p-4 '>
                {/* <h4 className='text-lg font-semibold uppercase'>{setorAtuacao.nome}</h4> */}
                <p>{setorAtuacao.descricao}</p>
            </div>
      <div className="flex">
        <Link to={`/editarSetorAtuacao/${setorAtuacao.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarSetorAtuacao/${setorAtuacao.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default CardSetorAtuacao
