import React from "react";
import SetorAtuacao from "../../../models/SetorAtuacao";
import { Link } from "react-router-dom";
import { Trash, Pencil } from "@phosphor-icons/react";

interface CardSetorAtuacaoProps {
  setorAtuacao: SetorAtuacao;
}

function CardSetorAtuacao({ setorAtuacao }: CardSetorAtuacaoProps) {
  return (
    <div className="border flex flex-col rounded-[8px] overflow-hidden relative shadow-lg">
      <header className="pt-12 py-8 px-6 bg-green-800 text-white font-bold text-2xl">
        {setorAtuacao.nome}
      </header>
      <div className="p-4">
        <p>{setorAtuacao.descricao}</p>
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



// import React from 'react'
// import SetorAtuacao from '../../../models/SetorAtuacao'
// import { Link } from 'react-router-dom'


// interface CardSetorAtuacaoProps {
//     setorAtuacao : SetorAtuacao
//    }

// function CardSetorAtuacao({setorAtuacao}: CardSetorAtuacaoProps) {

//   return (
//     <>
//       <div className='border flex flex-col rounded-[8px] overflow-hidden justify-between'>
//       <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>{setorAtuacao.nome}</header>
//             <div className='p-4 '>
//                 {/* <h4 className='text-lg font-semibold uppercase'>{setorAtuacao.nome}</h4> */}
//                 <p>{setorAtuacao.descricao}</p>
//             </div>
//       <div className="flex">
//         <Link to={`/editarSetorAtuacao/${setorAtuacao.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
//           <button>Editar</button>
//         </Link>
//         <Link to={`/deletarSetorAtuacao/${setorAtuacao.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
//           <button>Deletar</button>
//         </Link>
//       </div>
//     </div>
//     </>
//   )
// }

// export default CardSetorAtuacao
