import React from 'react'
import Foto from '../../assets/Foto.png'
import Logo from '../../assets/logo_micro1.png'

const Micro1 = () => {
  return (
    <section className='mt-36'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Descripcion */}

            <div className='sm:p-10 md:p-15 lg:p-30 xl:p-36'>
                <img src={Logo} alt="Logo de la pagina web"/>
                <p className='py-12 text-white'>
                  Este es el 1er Micro_Proyecto que he desarrollado.
                  Aquí podemos ver un navbar, un logo, una imagen de 
                  Fondo y texto. Las imagenes son de la ciudad de
                  Tokio, Japon.
                </p>
            </div>

            {/* Imagen */}
            <div>
                <img src={Foto} alt='Foto de una avenida'/>
            </div>
        </div>
    </section>
  )
}

export default Micro1