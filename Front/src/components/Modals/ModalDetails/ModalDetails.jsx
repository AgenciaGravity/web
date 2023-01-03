import { motion, AnimatePresence } from "framer-motion";
import images from "../../../assets/imagenes";
import hours from "../../../utils/time.json";
import { useForm } from "react-hook-form";
import { es } from "date-fns/locale";
import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import axios from "axios";
import emailjs from "@emailjs/browser";

let colStartClasses = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ModalDetails({ closeModal, data }) {
  const { register, handleSubmit } = useForm();
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const [selectedHour, setSelectedHour] = useState(1);
  const typeHour = data.time === "1 hora." ? "complete" : "middle";
  const [changeForm, setChangeForm] = useState(true);
  const [budget, setBudget] = useState(true);
  const [message, setMessage] = useState("");

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const submit = async (e) => {
    setMessage("Enviando...");
    let savedData = false;
    let templateParams = {
      name: e.name + " " + e.lastName,
      phone: e.phone,
      eventType: data.title,
      email: e.email,
      message: e.message,
      date: format(selectedDay, "do 'de' MMMM yyyy", {
        locale: es,
      }),
      time: hours.middle[selectedHour].view,
      budget: budget,
    };

    await axios
      .post(
        "https://apigravity.agenciagravity.com/api/v1/events",
        templateParams
      )
      .then(() => (savedData = true))
      .catch(() => {
        setMessage("Ocurrio un error, intenta de nuevo.");
      });

    if (savedData) {
      emailjs
        .send(
          "service_sd7uy4e",
          "template_lkgqx19",
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
        className="fixed top-0 left-0 w-full h-screen bg-backdrop-modal flex justify-center items-center z-30 px-5 py-16"
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-screen absolute"
          onClick={() => closeModal(false)}
        ></div>
        <div className="bg-white overflow-y-scroll overflow-x-hidden shadow-services-card w-full h-full relative p-6 rounded-2xl flex flex-col items-center sm:flex-row sm:items-start sm:gap-[20px] max-w-5xl lg:gap-10 sm:justify-end sm:h-auto">
          <button
            className="bg-input-one w-5 h-5 rounded-2xl absolute top-2 right-2"
            onClick={() => closeModal("none")}
          >
            X
          </button>
          <div className="w-full sm:max-w-[200px] sm:self-start lg:max-w-[30%] lg:sticky lg:top-0 lg:left-0">
            <img
              src={images.Glovo_icon____gravity}
              alt="Glovo Gravity"
              className="w-[60px] sm:w-[100px] m-auto"
            />
            <div className="w-[65%] relative flex flex-col justify-start items-center self-start mt-4 p-3 rounded-2xl shadow-services-card sm:w-full ">
              <img
                src={images.Human_014}
                alt="Astronaut"
                className="absolute -right-[70px] w-[101px] sm:hidden"
              />
              <span className="flex items-center w-full text-[13px] lg:text-[16px]">
                <img
                  src={images.Glovo_icon____gravity}
                  alt="Glovo Gravity"
                  className="w-[30px] self-start lg:w-[50px]"
                />
                Agencia Gravity
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-azul text-[13px] w-full lg:text-[16px]">
                  {data.title}
                </h3>
                <h4 className="text-[13px] lg:text-[16px]">
                  Hora Perú <br />
                  {data.time}
                </h4>
                <p className="text-[13px] lg:text-[16px]">
                  Los detalles de la conferencia web se proporcionan en la
                  confirmación.
                </p>
              </div>
              <div className={changeForm ? "sm:h-[320px] lg:h-[115px]" : "sm:h-[170px] lg:h-[220px]"}></div>
              <span className="text-[8px] w-full mt-3 lg:text-[12px]">
                951378145 / contacto@agenciagravity.com
              </span>
            </div>
          </div>
          <SwitchTransition>
            <CSSTransition
              key={changeForm ? "Goodbye, world!" : "Hello, world!"}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              <div className="w-full sm:max-w-[70%]">
                {changeForm ? (
                  <div>
                    <h3 className="font-bold text-azul text-[13px] w-full my-4 ml-3 lg:text-[24px]">
                      Selecciona una fecha y hora:
                    </h3>
                    <div className="w-full flex flex-col lg:flex-row lg:gap-5">
                      <div className="flex justify-center items-center relative w-full">
                        <button
                          type="button"
                          onClick={previousMonth}
                          className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 absolute -left-6"
                        >
                          &lt;
                        </button>
                        <div className="p-3 rounded-2xl shadow-services-card w-full">
                          <div className="flex items-center mb-3">
                            <h2 className="flex-auto text-[13px] font-bold text-azul lg:text-[20px] capitalize">
                              {format(firstDayCurrentMonth, "MMMM yyyy", {
                                locale: es,
                              })}
                            </h2>
                          </div>
                          <div className="grid grid-cols-7 text-[13px] leading-6 text-center text-azul font-bold lg:text-[20px]">
                            <div>D</div>
                            <div>L</div>
                            <div>M</div>
                            <div>X</div>
                            <div>J</div>
                            <div>V</div>
                            <div>S</div>
                          </div>
                          <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                              <div
                                key={day.toString()}
                                className={classNames(
                                  dayIdx === 0 && colStartClasses[getDay(day)],
                                  format(day, "eeee") == "Saturday" &&
                                    "opacity-40 pointer-events-none	",
                                  format(day, "eeee") == "Sunday" &&
                                    "opacity-40 pointer-events-none	",
                                  "py-1.5"
                                )}
                              >
                                <button
                                  type="button"
                                  onClick={() => setSelectedDay(day)}
                                  className={classNames(
                                    isEqual(day, selectedDay) && "text-white",
                                    !isEqual(day, selectedDay) &&
                                      isToday(day) &&
                                      "text-azul font-bold text-[15px]",
                                    !isEqual(day, selectedDay) &&
                                      !isToday(day) &&
                                      isSameMonth(day, firstDayCurrentMonth) &&
                                      "text-gray-900",
                                    !isEqual(day, selectedDay) &&
                                      !isToday(day) &&
                                      !isSameMonth(day, firstDayCurrentMonth) &&
                                      "text-gray-400",
                                    isEqual(day, selectedDay) &&
                                      isToday(day) &&
                                      "bg-red-500",
                                    isEqual(day, selectedDay) &&
                                      !isToday(day) &&
                                      "bg-azul",
                                    !isEqual(day, selectedDay) &&
                                      "hover:bg-gray-200",
                                    (isEqual(day, selectedDay) ||
                                      isToday(day)) &&
                                      "font-semibold",
                                    "mx-auto flex h-6 w-6 items-center justify-center rounded-full text-[13px] lg:text-[16px] lg:h-10 lg:w-10"
                                  )}
                                >
                                  <time dateTime={format(day, "yyyy-MM-dd")}>
                                    {format(day, "d")}
                                  </time>
                                </button>
                              </div>
                            ))}
                          </div>
                          <h3 className="mt-4 flex-auto text-[13px] font-bold text-azul lg:text-[20px] capitalize">
                            Hora Perú
                          </h3>
                        </div>
                        <button
                          onClick={nextMonth}
                          type="button"
                          className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 absolute -right-6"
                        >
                          &gt;
                        </button>
                      </div>
                      <Swiper
                     modules={[Navigation, Thumbs]}
                      navigation={true}
                      grabCursor={true}
                        direction={"vertical"}
                        slidesPerView={screen.width >= 1124 ? 5 : 4}
                        className="mt-4 cursor-pointer py-1 px-2 max-w-[170px] w-full h-[270px] lg:h-[400px] lg:m-0 "
                      >
                        {hours[typeHour].map((i, index) => (
                          <SwiperSlide
                            key={index}
                            onClick={() => setSelectedHour(index)}
                          >
                            <div
                              className={`relative flex justify-center items-center duration-300 shadow-services-card rounded-2xl py-2 ${
                                index === selectedHour
                                  ? "bg-azul text-white scale-110 font-bold"
                                  : ""
                              }`}
                            >
                              {i.view}{" "}
                              <img
                                onClick={() => setChangeForm(false)}
                                src={images.Arrow_orange}
                                alt="Arrow Orange"
                                className={`w-[16px] opacity-0 absolute right-3 ${
                                  index === selectedHour
                                    ? "block opacity-100"
                                    : ""
                                }`}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-bold text-azul text-[13px] w-full my-4 ml-3 lg:text-[24px]">
                      Introduzca los detalles:
                    </h3>
                    <form
                      onSubmit={handleSubmit(submit)}
                      className=" w-full flex flex-col gap-2 justify-start items-center self-start mt-4 p-3 rounded-2xl shadow-services-card"
                    >
                      <div className="flex gap-2 w-full">
                        <input
                          type="text"
                          placeholder="Nombres"
                          {...register("name")}
                          className="outline-none w-full rounded-lg py-1 px-4 text-[13px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                        />
                        <input
                          type="text"
                          placeholder="Apellidos"
                          {...register("lastName")}
                          className="outline-none w-full rounded-lg py-1 px-4 text-[13px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Telefono"
                        {...register("phone")}
                        className="outline-none w-full rounded-lg py-1 px-4 text-[13px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                      />
                      <input
                        type="text"
                        placeholder="Correo"
                        {...register("email")}
                        className="outline-none w-full rounded-lg py-1 px-4 text-[13px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                      />
                      <textarea
                        placeholder="Cuéntanos sobre tu empresa"
                        {...register("message")}
                        className="resize-none h-[100px] outline-none w-full rounded-lg py-1 px-4 text-[13px] border-2 border-floating-color sm:text-[16px] lg:text-[19px]"
                      ></textarea>
                      <div className="w-full px-3">
                        <h3 className="text-[13px] w-full my-2 text-modal-text lg:text-[19px]">
                          ¿Cuál es tu rango de presupuesto?
                        </h3>
                        <ul className="text-[13px] text-modal-text flex flex-col sm:gap-2 sm:mt-2">
                          <li className="flex items-center justify-start gap-2">
                            <input
                              type="radio"
                              name="money"
                              id="200_500"
                              onChange={() => setBudget("200-500")}
                            />
                            <label
                              htmlFor="200_500"
                              className="sm:text-[12px] lg:text-[19px]"
                            >
                              200-500
                            </label>
                          </li>
                          <li className="flex items-center justify-start gap-2">
                            <input
                              type="radio"
                              name="money"
                              id="500_1000"
                              onChange={() => setBudget("500-1000")}
                            />
                            <label
                              htmlFor="500_1000"
                              className="sm:text-[12px] lg:text-[19px]"
                            >
                              500-1000
                            </label>
                          </li>
                          <li className="flex items-center justify-start gap-2">
                            <input
                              type="radio"
                              name="money"
                              id="1000_2000"
                              onChange={() => setBudget("1000-2000")}
                            />
                            <label
                              htmlFor="1000_2000"
                              className="sm:text-[12px] lg:text-[19px]"
                            >
                              1000-2000
                            </label>
                          </li>
                          <li className="flex items-center justify-start gap-2">
                            <input
                              type="radio"
                              name="money"
                              id="+2500"
                              onChange={() => setBudget("+2500")}
                            />
                            <label
                              htmlFor="+2500"
                              className="sm:text-[12px] lg:text-[19px]"
                            >
                              + 2500
                            </label>
                          </li>
                        </ul>
                        <div className="flex items-center mt-4 w-full">
                          <button className="text-[13px] bg-azul text-white py-1 px-3 rounded-lg sm:text-[16px] sm:px-10">
                            Programar evento
                          </button>
                          <h4 className="ml-5 text-[13px] text-azul">
                            {message}
                          </h4>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalDetails;
