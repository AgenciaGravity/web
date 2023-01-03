import {
  Header,
  ProjectsHome,
  ServicesHome,
  StartHome,
  ServicesOffer,
  InformationHome,
  SubscribeHome,
  Footer,
} from "../../components";
import { motion } from "framer-motion";

const links = [
  {
    title: "Nuestros proyectos",
    to: "Projects",
  },
  {
    title: "Nuestros servicios",
    to: "Services",
  },
  {
    title: "¿No sabes donde comenzar?",
    to: "StartHome",
  },
  {
    title: "E-Books 100% gratis",
    to: "Ebook",
  },
  {
    title: "¿Quienes somos?",
    to: "InromationHome",
  },
  {
    title: "Suscribete a nuestra comunidad",
    to: "SuscribeHome",
  },
];

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <ProjectsHome />
      <ServicesHome />
      <StartHome />
      <ServicesOffer />
      <InformationHome />
      <SubscribeHome />
      <Footer links={links} />
    </motion.div>
  );
}

export default Home;
