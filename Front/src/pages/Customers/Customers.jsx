import {
  CustomersHeader,
  CustomersData,
  CarouselImages,
  CustomerCard,
  Footer,
} from "../../components";
import { animateScroll as scroll } from "react-scroll";
import clientsJSON from "../../utils/clients.json";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  {
    title: "Clientes",
    to: "customers",
  },
  {
    title: "Mas proyectos",
    to: "moreProjects",
  },
];

function Customers() {
  const [index, setIndex] = useState(0);

  const changePage = (i) => {
    setIndex(i);
    scroll.scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3
        className="text-2xl font-bold mt-3 mb-3 text-center text-azul lg:hidden"
        id="AbautHeader"
      >
        Clientes
      </h3>
      <CustomersHeader
        name={clientsJSON.data[index].name}
        banner={clientsJSON.data[index].img.banner}
        description={clientsJSON.data[index].description.l}
      />
      <CustomersData
        name={clientsJSON.data[index].name}
        description={clientsJSON.data[index].description}
      />
      <CarouselImages img={clientsJSON.data[index].img} />
      <h3
        id="moreProjects"
        className="text-azul text-2xl font-bold my-5 flex justify-center lg:text-[36px] lg:mb-16"
      >
        Más de nuestro clientes
      </h3>
      <div className="w-full max-w-6xl m-auto px-5 flex gap-5 justify-center items-center my-10 lg:mb-16 lg:p-0">
        {clientsJSON.data.map((c) => (
          <div
            onClick={() => changePage(clientsJSON.data.indexOf(c))}
            key={clientsJSON.data.indexOf(c)}
            hidden={clientsJSON.data.indexOf(c) === index ? "hidden" : ""}
          >
            <CustomerCard
              img={c.img.mockup[4]}
              name={c.name}
              description={c.description.e}
            />
          </div>
        ))}
      </div>
      <Footer links={links} />
    </motion.div>
  );
}

export default Customers;
