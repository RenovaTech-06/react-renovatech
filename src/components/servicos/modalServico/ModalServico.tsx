import React from 'react';
import FormularioServico from '../formularioServico/formularioServico';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalServico.css'

function ModalServico() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Serviço</button>} modal>
        <div>
          <FormularioServico />
        </div>
      </Popup>
    </>
  );
}

export default ModalServico;