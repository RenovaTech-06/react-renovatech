import React, { useContext, useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Servicos from '../../../models/Servicos';
import { buscar } from '../../../services/Service';
import CardServicos from '../cardServicos/CardServicos';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaServicos() {
  const [servicos, setServicos] = useState<Servicos[]>([]);

  let navigate = useNavigate();

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  // useEffect(() => {
  //   if (token === '') {
  //     alert('Você precisa estar logado');
  //     navigate('/login');
  //   }
  // }, [token]);

  async function buscarServico() {
    try {
      await buscar('/servicos', setServicos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarServico();
  }, [servicos.length]);

  return (
    <>
      {servicos.length === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ThreeCircles
          visible={true}
          height="150"
          width="150"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />    
          </div> 
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {servicos.map((servico) => (
          <CardServicos key={servico.id} post={servico} />
        ))}
      </div>
    </>
  );
}

export default ListaServicos;