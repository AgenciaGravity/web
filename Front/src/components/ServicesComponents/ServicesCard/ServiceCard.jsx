import images from "../../../assets/imagenes";
import { motion } from "framer-motion";
import { useState } from "react";
import ModalBrand from "../../Modals/ModalBrand/ModalBrand";

function ServiceCard({ data }) {
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
    <>
      <motion.div
        className="py-[10px] flex__center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: data.id / 2, duration: 1 }}
        onClick={() => openModalServices(data)}
      >
        <div className="shadow-services-card flex gap-3 mt-4 rounded-xl w-80 h-32 p-2 justify-center items-center">
          <img
            className="w-16 h-16"
            src={images[data.img]}
            alt="Imagen de Servicios"
          />
          <div>
            <h4 className="text-azul font-bold text-sm">{data.title}</h4>
            <p className="text-azul text-xs">{data.paragraph}</p>
          </div>
        </div>
      </motion.div>
      {selectedId && <ModalBrand closeModal={closeModal} dataCard={dataCard} />}
    </>
  );
}

export default ServiceCard;
