import { motion, AnimatePresence } from "framer-motion";
import images from "../../../assets/imagenes";

const horarios = [
  {
    title: "Reunión gratis para empresas",
    time: "30 minutos.",
  },
  {
    title: "Conferencia pagada",
    time: "1 hora.",
  },
  {
    title: "Asesoría gratuita para emrprendedores",
    time: "30 minutos.",
  },
];

function ModalAgendaAqui({ closeModal }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-backdrop-modal flex justify-center items-center z-30 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-screen absolute" onClick={() => closeModal(false)}></div>
        <div className="bg-white shadow-services-card w-full relative p-6 rounded-2xl flex flex-col justify-center items-center max-w-5xl">
          <button
            className="bg-input-one w-5 h-5 rounded-2xl absolute top-2 right-2"
            onClick={() => closeModal("none")}
          >
            X
          </button>
          <img
            src={images.Glovo_icon____gravity.img}
            alt={images.Glovo_icon____gravity.info}
            title={images.Glovo_icon____gravity.info}
            className="w-[60px] sm:w-[100px]"
          />
          <h3 className="font-bold text-azul text-[14px] w-full] sm:text-[20px] lg:text-[24px]">
            Agencia Gravity
          </h3>
          <h4 className="text-[10px] sm:text-[16px] lg:text-[20px]">Contacto@agenciagravity.com</h4>
          <div className="mt-5 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:mt-10 lg:gap-10">
            {horarios.map((e) => (
              <div
                key={e.title}
                onClick={() => closeModal(e)}
                className="hover:scale-105 duration-300 flex justify-start items-center gap-3 p-3 rounded-2xl shadow-services-card cursor-pointer"
              >
                <img
                  src={images.Glovo_icon____gravity.img}
                  alt={images.Glovo_icon____gravity.info}
                  title={images.Glovo_icon____gravity.info}
                  className="w-[30px] self-start"
                />
                <div>
                  <h3 className="font-bold text-azul text-[14px] w-full] sm:text-[20px] lg:text-[24px]">
                    {e.title}
                  </h3>
                  <h4 className="text-[10px] sm:text-[16px] lg:text-[20px]">
                    Hora Perú <br />
                    {e.time}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalAgendaAqui;
