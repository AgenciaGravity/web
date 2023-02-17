import { useLocation } from "react-router-dom";
import images from "../../assets/imagenes";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation().pathname;

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };

  window.onscroll = () => {
    setOpenMenu(false);
  };

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-30 bg-white">
      <nav className="w-full flex justify-between items-center h-16 z-50 max-w-6xl m-auto">
        <Link
          className="ml-5 z-50 duration-500 hover:scale-105 lg:ml-0 animation__logo"
          to="/"
          onClick={() => setOpenMenu(false)}
        >
          <img
            className="w-32"
            src={images.Logo_nav.img}
            alt={images.Logo_nav.info}
            title={images.Logo_nav.info}
          />
        </Link>
        <label
          htmlFor="check"
          className="relative cursor-pointer w-[40px] h-[25px] z-50 lg:hidden"
        >
          <input
            id="check"
            type="checkbox"
            className="invisible hidden"
            onChange={(e) => setOpenMenu(e.target.checked)}
            checked={openMenu}
          />
          <span className="absolute w-[35px] h-[4px] bg-azul rounded-full inline-block duration-300 left-0 top-0 top"></span>
          <span className="absolute w-[35px] h-[4px] bg-azul rounded-full inline-block duration-300 left-0 top-[10px] middle"></span>
          <span className="absolute w-[35px] h-[4px] bg-azul rounded-full inline-block duration-300 left-0 bottom-0 bottom"></span>
        </label>
        <div
          className="bg-white fixed top-[64px] w-full h-screen flex justify-center items-center flex-col gap-10 z-50 duration-500 pb-44 lg:p-0 lg:w-[70%] lg:flex-row lg:justify-between lg:h-16 lg:bg-transparent lg:static"
          style={{ right: openMenu ? "0px" : "-100%" }}
        >
          <ul className="w-full px-10 flex flex-col text-lg text-center items-center lg:gap-5 lg:flex-row lg:mt-0">
            <li
              onClick={handleToggle}
              className="border-b-2 w-[80%] py-5 lg:hidden"
            >
              <Link
                to="/"
                className={
                  location === "/"
                    ? "scale-125 font-bold	text-azul border-b-2 border-azul"
                    : "text-azul"
                }
              >
                Inicio
              </Link>
            </li>
            <li
              onClick={handleToggle}
              className="border-b-2 w-[80%] py-5 lg:py-0 lg:w-auto lg:border-b-0"
            >
              <Link
                to="/nosotros"
                className={
                  location === "/nosotros"
                    ? "scale-125 font-bold	text-azul border-b-2 border-azul"
                    : "text-azul"
                }
              >
                Nosotros
              </Link>
            </li>
            <li className="hidden lg:flex">|</li>
            <li
              onClick={handleToggle}
              className="border-b-2 w-[80%] py-5 lg:py-0 lg:w-auto lg:border-b-0"
            >
              <Link
                to="/servicios"
                className={
                  location === "/servicios"
                    ? "scale-125 font-bold	text-azul border-b-2 border-azul"
                    : "text-azul"
                }
              >
                Servicios
              </Link>
            </li>
            <li className="hidden lg:flex">|</li>
            <li
              onClick={handleToggle}
              className="border-b-2 w-[80%] py-5 lg:py-0 lg:w-auto lg:border-b-0"
            >
              <Link
                to="/clientes"
                className={
                  location === "/clientes"
                    ? "scale-125 font-bold	text-azul border-b-2 border-azul"
                    : "text-azul"
                }
              >
                Clientes
              </Link>
            </li>
            <li className="hidden lg:flex">|</li>
            <li
              onClick={handleToggle}
              className="border-b-2 w-[80%] py-5 lg:py-0 lg:w-auto lg:border-b-0"
            >
              <Link
                to="/contacto"
                className={
                  location === "/contacto"
                    ? "scale-125 font-bold	text-azul border-b-2 border-azul"
                    : "text-azul"
                }
              >
                Contacto
              </Link>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li className="w-8 aspect-square">
              <a href="https://www.facebook.com/SomosGravity" target="_blank">
                <img src={images.Facebook_icon.img} alt={images.Facebook_icon.info} title={images.Facebook_icon.info} />
              </a>
            </li>
            <li className="w-8 aspect-square">
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
                target="_blank"
              >
                <img src={images.Linkdln_icon.img} alt={images.Linkdln_icon.info} title={images.Linkdln_icon.info} />
              </a>
            </li>
            <li className="w-8 aspect-square">
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
              >
                <img src={images.Instagram_icon.img} alt={images.Instagram_icon.info} title={images.Instagram_icon.info} />
              </a>
            </li>
            <li className="w-8 aspect-square">
              <a href="https://www.behance.net/gravityagencia" target="_blank">
                <img src={images.Be_icon.img} alt={images.Be_icon.info} title={images.Be_icon.info} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
