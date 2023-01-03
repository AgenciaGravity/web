import images from "../../../assets/imagenes";
import { useForm } from "react-hook-form";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function FormYellow() {
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
      .then(() => {
        savedData = true;
      })
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
    <div className=" w-full h-full sm:hidden">
      <div className="flex my-4">
        <div>
          <h3 className="text-naranja ml-8 text-[14px] font-bold w-[170px] sm:text-[16px] sm:w-auto sm:ml-0 lg:text-[35px]">
            ¿No sabes por donde comenzar?
          </h3>
          <p className="text-white ml-8 text-[12px] w-[185px] sm:w-auto sm:pt-2 sm:pb-4 sm:ml-0 lg:text-[21px] lg:w-[555px]">
            Cuéntanos cuál es tu marca y accede a una asesoría gratuita.
          </p>
        </div>
        <img
          className="w-[22%] max-w-[100px] mr-5 sm:hidden "
          src={images.Human_012}
        />
      </div>
      <form
        onSubmit={handleSubmit(sendMessage)}
        className="bg-naranja flex flex-col justify-center items-end w-full p-7 gap-3 rounded-3xl sm:hidden"
      >
        <input
          className="w-full py-1 px-2 rounded-2xl text-[10px] outline-none"
          type="text"
          placeholder="Nombre"
          {...register("name")}
          required
        />
        <input
          className="w-full py-1 px-2 rounded-2xl text-[10px] outline-none"
          type="text"
          placeholder="Telefono"
          {...register("phone")}
          required
        />
        <input
          className="w-full py-1 px-2 rounded-2xl text-[10px] outline-none"
          type="email"
          placeholder="Correo"
          {...register("email")}
          required
        />
        <textarea
          className="resize-none w-full py-1 px-2 rounded-2xl h-[80px] text-[10px] outline-none"
          placeholder="Mensaje"
          {...register("message")}
          required
        ></textarea>
        <div className="flex justify-between w-full">
          <h4 className="ml-5 text-[10px]">{message}</h4>
          <button className="hover:scale-110 duration-300 flex gap-3 items-center bg-azul rounded-2xl text-white py-1 px-3 text-[10px]">
            Enviar <img src={images.Arrow_List} alt="Flechita" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormYellow;
