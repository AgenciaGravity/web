import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/imagenes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

function ModalEbook({ closeModal }) {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    setMessage("Enviando...")
    axios
      .post("https://apigravity.agenciagravity.com/api/v1/ebook-data", e)
      .then(() => {
        navigate("/descargar-ebook");
      })
      .catch(() => setMessage("Ocurrio un error, intentalo de nuevo"));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-backdrop-modal flex justify-center items-center z-40 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-screen absolute" onClick={() => closeModal(false)}></div>
        <div className="bg-white shadow-services-card w-full relative p-6 rounded-2xl flex flex-col justify-center items-center max-w-5xl sm:p-12 sm:flex-row sm:justify-between z-50">
          <button
            className="bg-input-one w-5 h-5 rounded-2xl absolute top-2 right-2"
            onClick={() => closeModal(false)}
          >
            X
          </button>
          <img
            src={images.astronautGift}
            alt="Astronauta"
            className="hidden w-[200px] sm:block sm:w-[30%]"
          />
          <div>
            <h3 className="font-bold text-azul text-center text-[14px] w-[272px] sm:w-[90%] sm:text-[20px] sm:text-start lg:text-[35px] lg:w-[650px]">
              Aprende todos los distintos modelos de análisis.
            </h3>
            <form
              onSubmit={handleSubmit(submit)}
              className="w-full rounded-2xl sm:shadow-services-card sm:p-3 sm:px-8 sm:mt-5"
            >
              <div className="my-3 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="outline-none w-full rounded-2xl py-1 px-4 text-[10px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                  {...register("name")}
                  required
                />
                <input
                  type="email"
                  placeholder="Correo"
                  className="outline-none w-full rounded-2xl py-1 px-4 text-[10px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                  {...register("email")}
                  required
                />
              </div>
              <div className="relative">
                <label className="text-[10px] text-modal-text sm:text-[16px] lg:text-[19px]">
                  ¿Como conociste a Agencia Gravity?
                </label>
                <ul className="text-[10px] text-modal-text flex flex-col sm:gap-2 sm:mt-2">
                  <li className="flex items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      id="modal_ebook_publicidad"
                      className="aspect-square w-[8px] rounded-full border-modal-text sm:w-[12px]"
                      {...register("advertising")}
                    />
                    <label
                      htmlFor="modal_ebook_publicidad"
                      className="sm:text-[12px] lg:text-[19px]"
                    >
                      Publicidad
                    </label>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      id="modal_ebook_redes"
                      className="aspect-square w-[8px] rounded-full border-modal-text sm:w-[12px]"
                      {...register("socialNetworks")}
                    />
                    <label
                      htmlFor="modal_ebook_redes"
                      className="sm:text-[12px] lg:text-[19px]"
                    >
                      Redes Sociales
                    </label>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      id="modal_ebook_web"
                      className="aspect-square w-[8px] rounded-full border-modal-text sm:w-[12px]"
                      {...register("webPage")}
                    />
                    <label
                      htmlFor="modal_ebook_web"
                      className="sm:text-[12px] lg:text-[19px]"
                    >
                      Pagina Web
                    </label>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      id="modal_ebook_otro"
                      className="aspect-square w-[8px] rounded-full border-modal-text sm:w-[12px]"
                      {...register("other")}
                    />
                    <label
                      htmlFor="modal_ebook_otro"
                      className="sm:text-[12px] lg:text-[19px]"
                    >
                      Otro
                    </label>
                  </li>
                </ul>
                <h4 className="text-[12px] text-azul mt-2 lg:text-[19px]">{message}</h4>
                <button className="text-[10px] bg-azul text-white py-1 px-3 rounded-2xl mt-4 sm:text-[16px] sm:px-10">
                  Obtener
                </button>
                <img
                  src={images.Human_005}
                  alt="Human"
                  className="w-[90px] absolute right-0 bottom-0 sm:hidden"
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalEbook;
