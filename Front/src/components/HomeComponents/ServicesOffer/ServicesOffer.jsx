import ModalEbook from "../../Modals/ModalEbook/ModalEbook";
import Countdown, { zeroPad } from "react-countdown";
import images from "../../../assets/imagenes";
import { useEffect, useState } from "react";
import React from "react";

function ServiceOffer() {
  const [openModalEbbok, setOpenModalEbook] = useState(false);
  const time = 259200000;

  useEffect(() => {
    if (loop == null) {
      localStorage.setItem("loop", Date.now());
    }
  }, []);

  const loop = localStorage.getItem("loop");

  const closeModal = (e) => {
    setOpenModalEbook(e);
  };

  const renderer = ({ completed, formatted }) => {
    if (completed) {
      localStorage.setItem("loop", Date.now());
      return (
        <div className="flex gap-2 my-4 lg:my-10">
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            0
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            0
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            0
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            0
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            0
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            0
          </div>
          <img
            className="w-[36px] sm:w-[56px] lg:w-[102px]"
            src={images.clock.img}
            alt={images.clock.info}
            title={images.clock.info}
          />
        </div>
      );
    } else {
      return (
        <div className="flex gap-2 my-4 lg:my-10">
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            {zeroPad(formatted.hours).split("")[0]}
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            {zeroPad(formatted.hours).split("")[1]}
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            {zeroPad(formatted.minutes).split("")[0]}
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            {zeroPad(formatted.minutes).split("")[1]}
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
            <div className="bg-azul w-[6px] aspect-square rounded-full sm:w-[12px] lg:w-[18px]"></div>
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            {zeroPad(formatted.seconds).split("")[0]}
          </div>
          <div className="bg-azul text-naranja w-[26px] h-[36px] text-[20px] flex justify-center items-center rounded-[7px] font-bold sm:w-[38px] sm:h-[56px] sm:text-[40px] lg:w-[82px] lg:h-[110px] lg:text-[70px] lg:rounded-[18px]">
            {zeroPad(formatted.seconds).split("")[1]}
          </div>
          <img
            className="w-[36px] sm:w-[56px] lg:w-[102px]"
            src={images.clock.img}
            alt={images.clock.info}
            title={images.clock.info}
          />
        </div>
      );
    }
  };

  return (
    <div
      className="w-full px-5 py-10 flex justify-center items-center"
      id="Ebook"
    >
      <div className="bg-griss shadow-services-card max-w-6xl rounded-[20px] relative px-10 py-7 w-full">
        <p className="bg-naranja font-bold text-azul text-[13px] py-1 px-5 -rotate-45 rounded-3xl absolute top-2 -left-6 sm:text-[18px] lg:text-[36px] lg:px-16 lg:top-10 lg:-left-16">
          ¡GRATIS!
        </p>
        <div className="sm:flex">
          <div className="hidden justify-center items-end w-[50%] p-5 max-w-md sm:flex">
            <img src={images.astronautGift.img} alt={images.astronautGift.info} title={images.astronautGift.info} />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-azul font-bold text-center text-[16px] sm:text-[18px] lg:text-[35px]">
              Aprende todos los distintos
              <br /> modelos de análisis.
            </h2>
            <Countdown
              date={+loop + time}
              renderer={renderer}
              daysInHours={true}
            />
            <p className="hidden text-azul text-[13px] w-[100%] sm:block lg:text-[20px]">
              Accede a nuestras 10 plantillas informativas 100% gratuitas por
              tiempo limitado:
              <br />
              Aprende todo lo que necesitas saber sobre los distintos tipos de
              análisis más efectivos en el rubro, con ello podrá potenciar su
              marca al máximo, entender los conceptos para poner en acción este
              nuevo conocimiento y así pueda lograr alcanzar su próxima meta u
              objetivo.
            </p>
            <p className="text-azul text-[10px] w-[263px] sm:hidden">
              Accede del a nuestros 3 E-Books de manera 100% gratuita por tiempo
              limitado.
              <br />
              Aprende todo de Marketing digital, Branding y Marca personal con
              lo cual podras potenciar tu marca al maximo,
            </p>
            <h4 className="text-azul font-bold self-start text-[13px] my-2 sm:text-[18px] lg:text-[20px]">
              ¡OBTENLOS AHORA!
            </h4>
            <button
              className="hover:scale-110 duration-300 bg-azul text-naranja font-bold py-1 px-3 rounded-3xl mt-3 text-[8px] self-end sm:text-[13px] lg:text-[21px] lg:px-7"
              onClick={() => setOpenModalEbook(true)}
            >
              Los quiero
            </button>
          </div>
        </div>
      </div>
      {openModalEbbok && <ModalEbook closeModal={closeModal} />}
    </div>
  );
}

export default ServiceOffer;
