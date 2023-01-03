import images from "../../../assets/imagenes";
import { useForm } from "react-hook-form";
import axios from "axios";
import emailjs from "@emailjs/browser";
import FormYellow from "../FormYellow/FormYellow";
import { useState } from "react";

function StartHome() {
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
      .then(() => savedData = true)
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

  return (
    <div
      className="w-full bg-azul px-5 pb-5 relative mt-[60px] flex flex-col justify-center items-center sm:py-0 sm:h-[303px] lg:h-[500px] lg:px-0"
      id="StartHome"
    >
      <div className="max-w-6xl flex justify-between items-center py-2 w-full h-full sm:py-0">
        <FormYellow />
        <div className="hidden sm:block py-2 sm:py-0 sm:w-[55%] lg:w-[45%]">
          <h3 className="text-naranja ml-8 text-[14px] font-bold w-[170px] sm:text-[16px] sm:w-auto sm:ml-0 lg:text-[35px]">
            ¿No sabes por donde comenzar?
          </h3>
          <p className="text-white ml-8 text-[12px] w-[185px] sm:w-auto sm:pt-2 sm:pb-4 sm:ml-0 lg:text-[21px] lg:w-[555px]">
            Cuéntanos cuál es tu marca y accede a una asesoría gratuita.
          </p>
          <form
            onSubmit={handleSubmit(sendMessage)}
            className="flex flex-col justify-center items-end gap-3"
          >
            <div className="flex justify-between w-full gap-3">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-input-one w-full py-1 px-3 rounded-2xl text-[13px] text-white outline-none lg:text-[15px]"
                {...register("name")}
              />
              <input
                type="text"
                placeholder="Telefono"
                className="bg-input-one w-full py-1 px-3 rounded-2xl text-[13px] text-white outline-none lg:text-[15px]"
                {...register("phone")}
              />
            </div>
            <input
              type="email"
              className="bg-input-one w-full py-1 px-3 rounded-2xl text-[13px] text-white outline-none lg:text-[15px]"
              placeholder="correo@ejemplo.com"
              {...register("email")}
            />
            <textarea
              className="resize-none bg-input-one w-full py-1 px-3 rounded-2xl text-[13px] text-white outline-none h-[80px] lg:h-[141px] lg:text-[15px]"
              placeholder="Cuentanos sobre tu marca ..."
              {...register("message")}
            ></textarea>
            <div className="flex justify-between w-full">
              <h4 className="ml-5 text-[13px] text-white">{message}</h4>
              <button className="hover:scale-110 duration-300 text-[12.5px] bg-naranja text-azul font-bold flex py-1 px-3 rounded-2xl justify-between items-center gap-6 lg:text-[15px]">
                Enviar
                <img src={images.Arrow} alt="Flechita" className="w-[13px]" />
              </button>
            </div>
          </form>
        </div>
        <div className="hidden relative h-full w-[40%] bg-azul max-w-[275px] sm:block lg:max-w-none">
          <div className="bg-input-one w-[176px] h-[60px] rounded-3xl text-[12px] text-white absolute top-[15%] left-[10%] flex justify-center items-center text-center lg:w-[329px] lg:h-[120px] lg:left-[5%]">
            <p className="lg:hidden">
              Si tienes alguna duda <br />
              sobre nosotros escríbenos
            </p>
            <p className="text-[22px] hidden lg:block">
              Si tienes alguna duda <br />
              sobre nosotros estaremos <br />
              gustosos de responderte.
            </p>
          </div>
          <img
            src={images.Human_010}
            alt="Human Gravity"
            className="w-[135px] absolute -bottom-3 right-[3%] z-10 lg:w-[245px] lg:-bottom-[21px] lg:right-2"
          />
          <div className="w-[18%] rounded-l-[20px] h-full bg-naranja absolute top-0 right-0 lg:rounded-l-[25px]"></div>
        </div>
      </div>
    </div>
  );
}

export default StartHome;
