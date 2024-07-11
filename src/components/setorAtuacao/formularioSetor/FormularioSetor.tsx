import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import SetorAtuacao from '../../../models/SetorAtuacao';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormularioSetor() {

    const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao>({} as SetorAtuacao);

    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    const { cliente, handleLogout } = useContext(AuthContext);
    const token = cliente.token;
  
    async function buscarPorId(id: string) {
      await buscar(`/setoratuacao/${id}`, setSetorAtuacao, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setSetorAtuacao({
        ...setorAtuacao,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(setorAtuacao))
    }
  
    async function gerarNovoSetor(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/setoratuacao`, setorAtuacao, setSetorAtuacao, {
            headers: {
              'Authorization': token
            }
          })
  
          alert('Setor Atualizado com sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('O token expirou, favor logar novamente')
            handleLogout()
          } else {
            alert('Erro ao atualizar o Setor de Atuação')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/setoratuacao`, setorAtuacao, setSetorAtuacao, {
            headers: {
              'Authorization': token
            }
          })
  
          alert('Setor de Atuação cadastrado com sucesso')
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('O token expirou, favor logar novamente')
            handleLogout()
          } else {
            alert('Erro ao cadastrar o Setor de Atuação')
          }
        }
      }
  
      retornar()
    }
  
    function retornar() {
      navigate("/setoratuacao")
    }
  
    useEffect(() => {
      if (token === '') {
        alert('Você precisa estar logado');
        navigate('/login');
      }
    }, [token]);
   

  return (
    <>
        <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo Setor' : 'Editar Setor'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoSetor}>
        
      <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome do Setor de Atuação</label>
          <input
            value={setorAtuacao.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={setorAtuacao.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
    </>
  )
}

export default FormularioSetor