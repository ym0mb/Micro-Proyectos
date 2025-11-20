import React from 'react'
import Logo from '../../assets/logo_micro1.png'

// Arreglo con las opciones de la pagina: su id, link hacia X destino, texto
const navbarlinks = [
    {
        id:1,
        title:"Inicio",
        link:"/"
    },
    {
        id:2,
        title:"Todos los Servicios",
        link:"#"
    },
    {
        id:3,
        title:"Noticias",
        link:"#"
    },
    {
        id:4,
        title:"Fotos",
        link:"#"
    }
]

// Arreglo con Iniciar Sesion o Registrase
const navbarusers = [
    {
        id:1,
        title:"Iniciar Sesion",
        link:"#"
    },
    {
        id:2,
        title:"Registrarse",
        link:"#"
    } 
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900/40 backdrop-blur-md z-50">
      {/* Contenedor principal */}
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">

        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo de la pagina web" className="w-[100px]" />
        </div>

        {/* Navegación principal */}
        <div>
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-gray-400 sm:text-lg text-sm hover:text-white transition-transform hover:scale-110 transform inline-block duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación de usuario */}
        <div>
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarusers.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-white sm:text-lg text-sm hover:text-gray-400 transition-transform hover:scale-110 transform inline-block duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;