import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Servicos from '../../../models/Servicos'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarServico() {
  const [servico, setServico] = useState<Servicos>({} as Servicos)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { cliente, handleLogout } = useContext(AuthContext)
  const token = cliente.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/servicos")
  }

  async function deletarServico() {
    try {
      await deletar(`/servicos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Serviço apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar Serviço', 'erro')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar serviço</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o serviço a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Servico</header>
        <div className="p-4">
          <p className='text-xl h-full'>{cliente.razaoSocial}</p>
          <p>{servico.descricao}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarServico}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarServico