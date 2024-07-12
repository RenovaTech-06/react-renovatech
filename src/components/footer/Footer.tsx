import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-green-700 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Renovatech | Copyright: Renovatech© 2024</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} />
              <InstagramLogo size={48} />
              <FacebookLogo size={48}  />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer