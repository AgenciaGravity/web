import { AboutHeader, AboutCards, AboutJoinUs } from "../../components/index";
import { Footer } from "../../components/index";
import { motion } from "framer-motion";

const links = [
  {
    title: "Nosotros",
    to: "AbautHeader",
  },
  {
    title: "Mision y vision",
    to: "AbautCards",
  },
  {
    title: "Se parte del equipo de Gravity",
    to: "AboutJoinUs",
  },
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutHeader />
      <AboutCards />
      <AboutJoinUs />
      <Footer links={links} />
    </motion.div>
  );
}

export default About;
