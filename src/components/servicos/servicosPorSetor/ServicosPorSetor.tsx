import React, { useContext, useEffect, useState } from 'react'
import CardServicos from '../cardServicos/CardServicos';
import { useParams } from 'react-router-dom';
import Servicos from '../../../models/Servicos';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';

function ServicosPorSetor() {

    const [servicos, setServicos] = useState<Servicos[]>([]);
  const { setorId } = useParams<{ setorId: string }>();
  const { cliente } = useContext(AuthContext);
  const token = cliente.token;

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        await buscar(`/servicos/${setorId}`, setServicos, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
      }
    };

    fetchServicos();
  }, [setorId, token]);




  return (
    <>
    <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Serviços do Setor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((servico) => (
          <CardServicos key={servico.id} post={servico} />
        ))}
      </div>
    </div>
    </>
  )
}

export default ServicosPorSetor