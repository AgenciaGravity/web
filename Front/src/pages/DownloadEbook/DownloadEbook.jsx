import { Footer } from "../../components";
import { motion } from "framer-motion";
import images from "../../assets/imagenes";
import Plantillas_pdf from "../../assets/Docs/Plantillas educativas - Agencia Gravity.pdf";

const links = [
  {
    title: "Inicio",
    to: "/",
  },
];

function DownloadEbook() {
  window.scroll({
    top: 1,
    behavior: "smooth",
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="background__double--sm w-full mb-5 h-[500px] flex items-center lg:h-[800px]"
      >
        <div className=" max-w-6xl px-5 bg-azul m-auto w-full h-full flex justify-center items-center flex-col gap-[10px] sm:flex-row sm:justify-between sm:p-0">
          <div className="sm:h-full sm:bg-naranja sm:rounded-r-[150px] flex justify-center items-center sm:min-w-[300px]">
            <img
              src={images.astronautGift}
              alt="Atronaut"
              className="hidden sm:block sm:w-[231px] lg:max-w-[448px] lg:w-[85%]"
            />
            <img
              src={images.Human_013}
              alt="Atronaut"
              className="sm:hidden w-[144px]"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-[20px] font-bold text-naranja sm:text-[30px] lg:text-[54px]">
              Felicitaciones
            </h2>
            <p className="text-white text-[13px] text-center sm:text-[24px] lg:text-[31px]">
              Descarga nuestras 10 plantillas y empecemos a <br /> aprender.
            </p>
            <a
              href={Plantillas_pdf}
              download="Plantillas educativas - Agencia Gravity"
              className="hover:scale-110 duration-300 text-[13px] bg-naranja py-1 px-8 font-bold text-azul rounded-full mt-4 sm:text-[24px] sm:px-16 lg:text-[22px] lg:px-24 lg:py-2 lg:mt-8"
            >
              Descargar
            </a>
          </div>
        </div>
      </motion.div>
      <Footer links={links} />
    </>
  );
}

export default DownloadEbook;
