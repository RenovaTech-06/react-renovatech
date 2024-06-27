import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-orange-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>RENOVATECH</div>

            <div className='flex gap-4'>
              <Link to='/' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Serviços</div>
              <div className='hover:underline'>Categorias</div>
              <Link to='/contato' className='hover:underline'>Contato</Link>
              <Link to='/sobre' className='hover:underline'>Sobre Nós</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar