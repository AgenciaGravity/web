import { motion, AnimatePresence } from "framer-motion";
import countries from "../../../utils/countries.json";
import images from "../../../assets/imagenes";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ModalBrand({ closeModal, dataCard }) {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function success(pos) {
      var crd = pos.coords;
      const data = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=5db0b8f0930d42bd8a2205054221706&q=${crd.latitude},${crd.longitude}&aqi=no`
      );
      const country = data.data.location.country;
      const dataCountry = countries.filter(
        (e) => e.name.toLowerCase() === country.toLowerCase()
      )[0];

      reset({
        country: dataCountry.name,
        telephone: dataCountry.dial_code,
      });
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const submit = async (e) => {
    e.formName = dataCard.title
    setMessage("Enviando...")
    let savedData = false;
    let templateParams = {
      from_name: e.name,
      from_email: e.email,
      message: e.message,
      form_name: dataCard.title,
      telephone: e.telephone,
      country: e.country,
    };

    await axios
      .post("https://apigravity.agenciagravity.com/api/v1/form-services", e)
      .then(() => savedData = true)
      .catch(() => {
        setMessage("Ocurrio un error, intenta de nuevo.");
      });

    if (savedData) {
      emailjs
        .send(
          "service_sd7uy4e",
          "template_ekmqs6l",
          templateParams,
          "sbPZF39SuEjHVmTJM"
        )
        .then(() => setMessage("Se envio correctamente."))
        .catch(() => setMessage("Ocurrio un error, intenta de nuevo."));
    }
  };

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
        <div className="bg-azul relative rounded-[30px] p-[20px] pt-[40px] max-w-5xl z-40 sm:px-20">
          <button
            className="bg-white w-5 h-5 rounded-2xl absolute top-4 right-4 leading-5"
            onClick={() => closeModal(false)}
          >
            X
          </button>
          <div className="flex relative">
            <div className="w-[70%]">
              <h3 className="text-white font-bold text-[20px] sm:text-[45px]">
                {dataCard.title}
              </h3>
              <p className="text-white text-[13px] w-[100%] sm:text-[14px] lg:text-[20px]">
                {dataCard.paragraph}
              </p>
            </div>
            <div className="w-[30%] aspect-square bg-white rounded-full flex justify-center items-center p-2 absolute right-0 sm:w-[100px] lg:w-[150px]">
              <img
                src={images[dataCard.img].img}
                alt={images[dataCard.img].info}
                title={images[dataCard.img].info}
                className="w-[70%]"
              />
            </div>
          </div>
          <form
            className="flex flex-col mt-5 gap-2 lg:mt-6 lg:gap-4"
            onSubmit={handleSubmit(submit)}
          >
            <div className="w-full sm:flex justify-between">
              <input
                type="text"
                placeholder="Nombre"
                {...register("name")}
                required
                className="outline-none text-white rounded-2xl p-1 px-3 text-[13px] bg-input-one w-full sm:w-[40%] lg:text-[16px]"
              />
              <div className="flex justify-between gap-2 w-full mt-2 sm:mt-0 sm:w-[59%]">
                <input
                  type="text"
                  placeholder="Pais"
                  {...register("country")}
                  required
                  className="outline-none text-white rounded-2xl p-1 px-3 text-[13px] bg-input-one sm:w-[49%] lg:text-[16px]"
                />
                <input
                  type="text"
                  placeholder="Telefono"
                  required
                  {...register("telephone")}
                  className="outline-none text-white rounded-2xl p-1 px-3 text-[13px] bg-input-one sm:w-[49%] lg:text-[16px]"
                />
              </div>
            </div>
            <div className="flex justify-between gap-2 w-full">
              <input
                type="text"
                placeholder="Empresa"
                required
                {...register("business")}
                className="outline-none text-white rounded-2xl p-1 px-3 text-[13px] bg-input-one sm:w-[40%] lg:text-[16px]"
              />
              <input
                type="email"
                placeholder="Correo"
                required
                {...register("email")}
                className="outline-none text-white rounded-2xl p-1 px-3 text-[13px] bg-input-one sm:w-[59%] lg:text-[16px]"
              />
            </div>
            <textarea
              placeholder="Te escuchamos..."
              {...register("message")}
              required
              className="outline-none text-white rounded-2xl p-1 px-3 text-[13px] bg-input-one h-[140px] resize-none lg:text-[16px]"
            ></textarea>
            <div className="flex justify-between w-full">
              <h4 className="ml-5 text-[13px] text-white">{message}</h4>
              <button className="bg-naranja flex py-1 px-3 items-center gap-2 self-end rounded-2xl font-bold text-[13px] lg:text-[16px]">
                Enviar{" "}
                <img src={images.Arrow.img} alt={images.Arrow.info} title={images.Arrow.info} className="w-[10px]" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalBrand;
