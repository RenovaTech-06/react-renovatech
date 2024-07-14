import React, { useContext, useEffect, useState } from 'react'
import CardServicos from '../cardServicos/CardServicos';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import SetorAtuacao from '../../../models/SetorAtuacao';
import Servicos from '../../../models/Servicos';

function ServicosPorSetor() {
  const navigate = useNavigate()
  const [setor, setSetor] = useState<SetorAtuacao>({} as SetorAtuacao);
  const { id } = useParams<{ id: string }>();
  const { cliente } = useContext(AuthContext);
  const token = cliente.token;


  const [servicos, setServicos] = useState<Servicos[]>([]);
  const [buscarTermo, setBuscarTermo] = useState<string>('');

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

  const filtroServicos = servicos.filter((servico) =>
    servico.cliente?.razaoSocial.toLowerCase().includes(buscarTermo.toLowerCase())
);



  return (
    <>

        <div className="container flex flex-col my-10 mx-auto w-1/2">
            <input
                type="text" placeholder="Buscar por Serviço" value={buscarTermo}
                onChange={(e) => setBuscarTermo(e.target.value)}
                className="p-4 border-2 pl-10  mb-4 bg-[#e9f5db] placeholder-lime-900"/>
        </div>

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