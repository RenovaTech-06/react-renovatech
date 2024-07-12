import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Servicos from '../../../models/Servicos';
import SetorAtuacao from '../../../models/SetorAtuacao';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioServico() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  const [setorAtuacoes, setSetorAtuacoes] = useState<SetorAtuacao[]>([]);

  const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao>({
    id: 0,
    nome: '',
    descricao: '',
    servicos: null,
  });

  const [servico, setServico] = useState<Servicos>({
    id: 0,
    foto: '',
    contato: '',
    descricao: '',
    setorAtuacao: null,
    cliente: null,
  });

  async function buscarServicosPorId(id: string) {
    await buscar(`/servicos/${id}`, setServico, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarSetorAtuacaoPorId(id: string) {
    await buscar(`/setoratuacao/${id}`, setSetorAtuacao, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarSetorAtuacao() {
    await buscar('/setoratuacao', setSetorAtuacoes, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarSetorAtuacao();
    if (id !== undefined) {
      buscarServicosPorId(id);
      console.log(setorAtuacao);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      setorAtuacao: setorAtuacao,
    });
  }, [setorAtuacao]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      setorAtuacao: setorAtuacao,
      cliente: cliente,
    });
  }

  function retornar() {
    navigate('/servicos');
  }

  async function gerarNovaServico(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ servico });

    if (id !== undefined) {
      try {
        await atualizar(`/servicos`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Serviço atualizado com sucesso','sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente','info');
          handleLogout();
        } else {
          toastAlerta('Erro ao atualizar o Serviço','erro');
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Serviço cadastrado com sucesso','sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente','info');
          handleLogout();
        } else {
          toastAlerta('Erro ao cadastrar o Serviço','erro');
        }
      }
    }
  }

  const carregandoSetorAtuacao = servico.descricao === '';
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Serviços' : 'Cadastrar Serviços'}</h1>

      <form onSubmit={gerarNovaServico} className="flex flex-col w-1/2 gap-4">
        
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Imagem do serviço</label>
          <input
            value={servico.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Adicione uma imagem que defina seu serviço"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contato">Contato do serviço</label>
          <input
            value={servico.contato}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Contato"
            name="contato"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Texto do Serviço</label>
          <input
            value={servico.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Setor de atuação do Serviço</p>
          <select name="setorAtuacao" id="setorAtuacao" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarSetorAtuacaoPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um Setor de Atuação</option>
            {setorAtuacoes.map((setorAtuacao) => (
              <option key={setorAtuacao.id} value={setorAtuacao.id}>{setorAtuacao.nome}</option>
            ))}
          </select>
        </div>
        <button disabled={carregandoSetorAtuacao} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoSetorAtuacao ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioServico;
