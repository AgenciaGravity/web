import images from "../../../assets/imagenes";
import { useState } from "react";
import React from "react";
import axios from "axios";

function SubscribeHome() {
  const [emoji, setEmoji] = useState("normal");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmoji("write");
  };

  const submitEmail = (e) => {
    e.preventDefault();
    setMessage("Enviando...")
    axios
      .post("https://apigravity.agenciagravity.com/api/v1/suscribe", { email })
      .then((res) => {
        setEmoji("send");
        setMessage(res.data.message);
      })
      .catch((err) => setMessage("Ocurrio un error, intenta nuevamente."));
  };

  return (
    <div
      className="overflow-hidden flex justify-center items-center h-32 lg:h-60"
      id="SuscribeHome"
      style={{
        background:
          "linear-gradient(90deg, rgb(255,255,255) 50%, rgb(246,182,95) 50%)",
      }}
    >
      <div className="flex justify-between items-center h-full px-5 max-w-6xl w-full lg:p-0">
        <div className="flex justify-center items-end h-full w-4/12 pt-7">
          <picture className="relative mr-1">
            <img
              className="w-full max-w-[145px] lg:max-w-[250px]"
              src={images.Human_001.img}
              alt={images.Human_001.info}
              title={images.Human_001.info}
            />
            <span className="flex justify-center items-center text-[13px] w-[20%] h-[25%] absolute top-[15px] right-[3px] sm:text-[20px] lg:text-[35px] lg:top-[32px] lg:right-[6px]">
              {emoji === "normal" ? "😁" : emoji === "write" ? "🧐" : "🥳"}
            </span>
          </picture>
        </div>
        <div className="bg-naranja w-4/6 flex justify-between items-center relative py-4 pl-4 h-full sm:justify-center">
          <form
            onSubmit={submitEmail}
            className="w-full flex flex-col items-start justify-center sm:ml-[10%]"
          >
            <label className="-mb-2 text-[12px] font-bold text-azul sm:-mb-0 sm:text-center sm:text-[16px] lg:text-2x lg:mb-0">
              Suscríbete a nuestro mailing:
            </label>
            <div className="flex w-full bg-white p-1 rounded-3xl mt-3 max-w-[190px] sm:max-w-[260px] lg:max-w-[350px] lg:p-2">
              <input
                type="email"
                className="border-none text-[10px] outline-none h-full w-full sm:text-[12px] lg:text-[15px]"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => changeEmail(e)}
                required
              ></input>
              <button>
                <img
                  src={images.Arrow.img}
                  className="mr-3 w-[10px] cursor-pointer sm:w-[12px]"
                  alt={images.Arrow.info}
                  title={images.Arrow.info}
                />
              </button>
            </div>
            <span
              className={`text-[8px] mt-2 sm:text-[11px] sm:w-[350px] sm:text-start ${
                message !== null ? "opacity-100" : "opacity-0	"
              }`}
            >
              {message}
            </span>
          </form>
          <div className="hidden sm:block sm:absolute bottom-0 -right-1">
            <div className="bg-azul w-14 aspect-square	flex justify-center items-center p-2 rounded-full sm:absolute -top-8 right-5 lg:w-24 lg:right-14 lg:-top-14">
              <img
                src={images.circleCard.img}
                className="w-full lg:w-[90%]"
                alt={images.circleCard.info}
                title={images.circleCard.info}
              />
            </div>
            <div className="bg-naranja shadow-services-card w-20 h-10 rounded-t-full lg:w-40 lg:h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeHome;
