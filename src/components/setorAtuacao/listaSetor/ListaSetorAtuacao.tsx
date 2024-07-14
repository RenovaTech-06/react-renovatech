import React, { useContext, useEffect, useState } from 'react'
import SetorAtuacao from '../../../models/SetorAtuacao';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { ThreeCircles } from 'react-loader-spinner';
import CardSetorAtuacao from '../cardSetor/CardSetorAtuacao';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaSetorAtuacao() {

  const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao[]>([]);
  const [buscarTermo, setBuscarTermo] = useState<string>('');

  let navigate = useNavigate();

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  async function buscarSetorAtuacao() {
    try {
      await buscar('/setoratuacao', setSetorAtuacao, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarSetorAtuacao();
  }, [setorAtuacao.length]);

  const filtroSetorAtuacao = setorAtuacao.filter((setorAtuacao) =>
    setorAtuacao.nome.toLowerCase().includes(buscarTermo.toLowerCase())
);
  

  return (
    <>

     <div className=" py-4 max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl mb-6">We are just
                getting started!</h2>
            <p className="mb-4">We are creating a tool that helps you be more productive and efficient when building
                websites and webapps</p>
      </div>

        <div className="container flex flex-col my-10 mx-auto w-1/2">
              <input 
                  type="text" placeholder="Buscar Setor de Atuação" value={buscarTermo}
                        onChange={(e) => setBuscarTermo(e.target.value)}
                        className="p-4 border-2 pl-10  mb-4 bg-[#e9f5db] placeholder-lime-900"/>
        </div>
      
      
        {setorAtuacao.length === 0 && (
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
      
      
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtroSetorAtuacao.map((setorAtuacao) => (
              <>
                  <CardSetorAtuacao key={setorAtuacao.id} setorAtuacao={setorAtuacao} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaSetorAtuacao