import CarouselImages from "../../CarouselImages/CarouselImages";
import clients from "../../../utils/clients.json";
import images from "../../../assets/imagenes";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectsHome() {
  const [selectedTab, setSelectedTab] = useState(clients.data[0]);

  return (
    <div id="Projects">
      <h3
        className="text-2xl font-bold my-5 text-center text-azul sm:my-8 lg:text-4xl"
        id="AbautHeader"
      >
        Nuestros proyectos
      </h3>
      <ul className="flex justify-center items-center gap-[15px] mb-5 lg:gap-[50px]">
        {clients.data.map((item) => (
          <li
            key={item.name}
            className="flex justify-center cursor-pointer relative"
            onClick={() => setSelectedTab(item)}
          >
            <img
              className="w-[57px] aspect-square sm:w-[70px]"
              src={images[item.img.icon]}
              alt={item.name}
            />
            {item === selectedTab ? (
              <motion.div className="select_proyect" layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul>
      <div className="min-h-[250px] lg:min-h-[350px]">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedTab ? <CarouselImages img={selectedTab.img} /> : "😋"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectsHome;
