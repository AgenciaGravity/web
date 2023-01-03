import ModalAgendaAqui from "../../Modals/ModalAgendaAqui/ModalAgendaAqui";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import ModalDetails from "../../Modals/ModalDetails/ModalDetails";

function Header() {
  const [openModal, setOpenModal] = useState("none");
  const typed = useRef(null);
  const text = useRef(null);

  const closeModal = (e) => {
    setOpenModal(e);
  };

  useEffect(() => {
    const options = {
      strings: [
        "branding",
        "diseño web",
        "estrategia de redes",
        "diseño de post",
        "packaging",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    typed.current = new Typed(text.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <header className="max-h-[250px] h-alto-header bg-image-header bg-center bg-cover lg:max-h-[600px]">
      <div className="h-full max-w-6xl m-auto pl-5 pt-10 lg:pt-40">
        <h1 className="text-2xl font-bold lg:text-5xl lg:leading-[69px] lg:tracking-widest text-white">
          ¿Necesita <span className="text-naranja" ref={text}></span>?
        </h1>
        <h2 className="text-xl font-light text-white leading-normal tracking-normal lg:text-5xl lg:leading-[58px] lg:tracking-widest">
          ¡Vamos en contra de la <span className="text-naranja">gravedad</span>,
          <br />
          llevamos su marca a lo <span className="text-naranja">alto</span>!
        </h2>
        <button
          onClick={() => setOpenModal("one")}
          className="hover:scale-110 duration-300 text-[14px] bg-naranja py-1 px-4 font-bold text-azul rounded-full mt-4 sm:text-[16px] lg:text-[22px] lg:px-10 lg:mt-8"
        >
          Agenda aquí
        </button>
      </div>
      {openModal === "one" && <ModalAgendaAqui closeModal={closeModal} />}
      {typeof openModal === "object" && (
        <ModalDetails closeModal={closeModal} data={openModal} />
      )}
    </header>
  );
}

export default Header;
