import HojaDeProductos from "../../assets/Docs/Hoja de servicios - Agencia Gravity.pdf";
import { ServiceCard, EvilServiceCard, Footer } from "../../components";
import animationData from "../../assets/lottie/20221012_COHETE_V4.0.json";
import servicesData from "../../utils/services.json";
import images from "../../assets/imagenes";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormYellow from "../../components/HomeComponents/FormYellow/FormYellow";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const links = [
  {
    title: "Servicios",
    to: "Services",
  },
  {
    title: "Cuentanos",
    to: "Cuentanos",
  },
];

function Services() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    setMessage("Enviando...");
    let savedData = false;
    let templateParams = {
      form_name: "Contacto",
      from_name: e.name,
      from_email: e.email,
      message: e.message,
    };

    await axios
      .post("https://apigravity.agenciagravity.com/api/v1/form-yellow", e)
      .then(() => (savedData = true))
      .catch(() => setMessage("Ocurrio un error, intenta de nuevo."));

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

  const defaultOptions = {
    loop: false,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3
        className=" text-center text-azul text-2xl font-bold m-3 lg:hidden"
        id="Services"
      >
        Servicios
      </h3>
      <div className="bg-azul py-4 px-5 sm:px-0 sm:py-10">
        <div className="max-w-6xl m-auto flex justify-around items-center sm:flex-col">
          <section className="flex flex-col gap-4 w-40 mb-4 sm:w-full border-solid sm:items-center sm:max-w-[610px] sm:border-b-2 sm:pb-5">
            <h3 className="text-sm font-bold text-naranja sm:text-2xl">
              Descarga nuestra hoja de servicios
            </h3>
            <p className="text-xs text-white leading-5 sm:text-[16px] sm:w-[450px] sm:text-center">
              Obtén más detalles de todos nuestros servicios, al igual de los
              métodos de pago y cronograma de entrega.
            </p>
            <a
              href={HojaDeProductos}
              download="Hoja de servicios - Agencia Gravity"
              className="hover:scale-110 cursor-pointer duration-300 flex gap-3 w-[120px] sm:w-auto text-[14px] bg-naranja py-1 px-4 font-bold text-azul rounded-full mt-4 sm:text-[16px] lg:text-[22px] lg:px-10 lg:mt-0"
            >
              Descargar{" "}
              <img
                src={images.Arrow.img}
                alt={images.Arrow.info}
                title={images.Arrow.info}
                className="rotate-90"
              />
            </a>
          </section>
          <section className="flex justify-around items-center sm:w-full">
            <img
              className="w-36 sm:w-40 lg:w-72"
              src={images.Human_005.img}
              alt={images.Human_005.info}
              title={images.Human_005.info}
            />
            <div className="hidden sm:flex sm:flex-col lg:w-3/5">
              {servicesData.map((e) => (
                <EvilServiceCard data={e} key={e.id} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center sm:hidden">
        {servicesData.map((e) => (
          <ServiceCard data={e} key={e.id} />
        ))}
      </div>
      <div
        className="mt-10 mb-5 w-full bg-azul p-5 sm:bg-transparent sm:my-4 sm:py-0 sm:relative lg:p-0"
        id="Cuentanos"
      >
        <div className="box__background hidden absolute top-0 left-0 w-full h-full justify-between items-center gap-[20px] sm:grid">
          <div className="h-full z-[-2] bg-azul"></div>
          <div className="h-full z-[-2] bg-naranja"></div>
        </div>
        <div className="container__services_page w-full justify-between items-center max-w-6xl m-auto sm:h-full sm:gap-[20px] sm:grid lg:py-0">
          <section className="hidden relative sm:flex bg-azul sm:pr-4 sm:h-72 lg:h-96 w-full z-10 justify-start items-center">
            <div>
              <h4 className="text-naranja text-2xl font-bold lg:text-4xl">
                Cuéntanos:
              </h4>
              <p className="text-xs text-white lg:text-[17px] sm:mt-4">
                ¿Cuál es el siguiente paso que va a dar tu marca? <br />
                <br />
                Cotiza aquí.
              </p>
            </div>
            <div className="w-40 absolute bottom-0 right-4 lg:w-72">
              <Lottie
                options={{ animationData: animationData, ...defaultOptions }}
              />
            </div>
          </section>
          <form
            onSubmit={handleSubmit(sendMessage)}
            className="hidden flex-col w-full h-full lg:bg-naranja justify-center items-end lg:items-center p-7 gap-3 rounded-3xl sm:flex z-10 lg:py-7 lg:px-14 sm:rounded-none"
          >
            <input
              className="outline-none w-full py-1 px-2 rounded-2xl text-[10px]  lg:text-[15px] lg:py-2 lg:px-4 lg:rounded-3xl"
              type="text"
              placeholder="Nombre"
              {...register("name")}
              required
            />
            <input
              className="outline-none w-full py-1 px-2 rounded-2xl text-[10px]  lg:text-[15px] lg:py-2 lg:px-4 lg:rounded-3xl"
              type="text"
              placeholder="Telefono"
              {...register("phone")}
              required
            />
            <input
              className="outline-none w-full py-1 px-2 rounded-2xl text-[10px]  lg:text-[15px] lg:py-2 lg:px-4 lg:rounded-3xl"
              type="text"
              placeholder="Correo"
              {...register("email")}
              required
            />
            <textarea
              className="outline-none resize-none w-full py-1 px-2 rounded-2xl h-[80px] text-[10px]  lg:text-[15px] lg:py-2 lg:px-4 lg:rounded-3xl"
              placeholder="Mensaje"
              {...register("message")}
              required
            ></textarea>
            <div className="flex justify-between w-full">
              <h4 className="ml-5 text-[16px] text-white">{message}</h4>
              <button className="hover:scale-110 duration-300 flex gap-3 items-center bg-azul rounded-2xl text-white py-1 px-4 text-[10px] lg:self-end lg:text-[15px]">
                Enviar{" "}
                <img
                  src={images.Arrow_List.img}
                  alt={images.Arrow_List.info}
                  title={images.Arrow_List.info}
                />
              </button>
            </div>
          </form>
          <FormYellow />
        </div>
      </div>
      <Footer links={links} />
    </motion.div>
  );
}

export default Services;
