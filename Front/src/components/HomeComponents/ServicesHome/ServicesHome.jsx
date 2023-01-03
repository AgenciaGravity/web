import ModalBrand from "../../Modals/ModalBrand/ModalBrand";
import services from "../../../utils/services.json";
import images from "../../../assets/imagenes";
import { useState } from "react";

function ServicesHome() {
  const [selectedId, setSelectedId] = useState(null);
  const [dataCard, setDataCard] = useState([]);

  const openModalServices = (e) => {
    setDataCard(e);
    setSelectedId(e.id);
  };

  const closeModal = (i) => {
    setSelectedId(i);
  };

  return (
    <div className="max-w-6xl m-auto px-5 lg:px-0" id="Services">
      <h3 className="text-2xl font-bold my-5 text-center text-azul sm:my-8 lg:text-4xl">
        Nuestros servicios
      </h3>
      <ul className="flex justify-between items-center flex-col gap-[20px] sm:flex-row">
        {services.map((card) => (
          <li
            key={card.id}
            className="w-[350px] cursor-pointer h-[170px] shadow-services-card p-[15px] flex justify-start items-center gap-[30px] rounded-[20px] duration-300 hover:scale-105 sm:flex-col sm:h-[294px] lg:w-[355px] lg:h-[432px]"
            onClick={() => openModalServices(card)}
          >
            <img
              src={images[card.img]}
              alt={card.alt}
              className="w-[70px] lg:w-[111px] lg:h-[130px]"
            />
            <div>
              <h4 className="text-[18px] text-azul font-bold text-start mb-[5px] sm:text-center lg:text-[33px]">
                {card.title}
              </h4>
              <p className="text-[12px] text-azul text-start sm:text-center lg:text-[21px]">
                {card.paragraph}
              </p>
            </div>
          </li>
        ))}
      </ul>
        {selectedId && (
          <ModalBrand closeModal={closeModal} dataCard={dataCard} />
        )}
    </div>
  );
}

export default ServicesHome;
