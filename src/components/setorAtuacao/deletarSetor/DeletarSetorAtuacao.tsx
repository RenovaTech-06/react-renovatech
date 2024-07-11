import React, { useContext, useEffect, useState } from 'react'
import SetorAtuacao from '../../../models/SetorAtuacao'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Service'

function DeletarSetorAtuacao() {

    const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao>({} as SetorAtuacao)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { cliente, handleLogout } = useContext(AuthContext)
    const token = cliente.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/setoratuacao/${id}`, setSetorAtuacao, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/setoratuacao")
    }

    async function deletarSetorAtuacao() {
        try {
            await deletar(`/setoratuacao/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Setor de Atuação apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Setor')
        }

        retornar()
    }

  return (
    <>
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Setor</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o Setor a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Setor de Atuação</header>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{setorAtuacao.nome}</h4>
                    <p>{setorAtuacao.descricao}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarSetorAtuacao}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DeletarSetorAtuacao