import React, { useContext, useEffect, useState } from 'react'
import SetorAtuacao from '../../../models/SetorAtuacao';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { Dna } from 'react-loader-spinner';
import CardSetorAtuacao from '../cardSetor/CardSetorAtuacao';

function ListaSetorAtuacao() {

  const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao[]>([]);

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
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarSetorAtuacao();
  }, [setorAtuacao.length]);
  

  return (
    <>
        {setorAtuacao.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className=" py-4 max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl mb-6">We are just
                getting started!</h2>
            <p className="mb-4">We are creating a tool that helps you be more productive and efficient when building
                websites and webapps</p>
      </div>


      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {setorAtuacao.map((setorAtuacao) => (
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