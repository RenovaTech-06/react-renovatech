import React, { useContext, useEffect, useState } from 'react'
import CardServicos from '../cardServicos/CardServicos';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import SetorAtuacao from '../../../models/SetorAtuacao';

function ServicosPorSetor() {
  const navigate = useNavigate()
  const [setor, setSetor] = useState<SetorAtuacao>({} as SetorAtuacao);
  const { id } = useParams<{ id: string }>();
  const { cliente } = useContext(AuthContext);
  const token = cliente.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info')
      navigate('/login')
    }
  }, [token])

  async function buscarSetorPorId() {
    await buscar(`/setoratuacao/${id}`, setSetor ,{
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    buscarSetorPorId()
  }, [id])

  return (
    <>
    <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Serviços do Setor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {setor.servicos?.length === 0 && <div>
              aqui vem toda a tela de não temos serviço
            </div>}
        {setor.servicos?.map((servico) => (
          <CardServicos key={servico.id} post={servico} />
        ))}
      </div>
    </div>
    </>
  )
}

export default ServicosPorSetor