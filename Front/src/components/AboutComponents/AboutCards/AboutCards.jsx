import images from "../../../assets/imagenes";

function AboutCards() {
  return (
    <div
      className="flex flex-col items-center gap-3 my-7 sm:flex-row sm:justify-center sm:gap-8 lg:gap-32"
      id="AbautCards"
    >
      <li className="w-80 h-28 bg-azul flex rounded-3xl justify-center items-center gap-2 sm:flex-col sm:w-72 sm:h-80 sm:justify-start lg:w-80 lg:h-[420px]">
        <div className="bg-white rounded-full w-16 h-16 sm:w-32 sm:h-32 sm:mt-5">
          <img className="w-full aspect-square" src={images.mision} alt="Mision icon" />
        </div>
        <div className="w-56 lg:w-full">
          <h4 className="text-naranja text-sm font-bold sm:text-2xl sm:text-center lg:text-4xl lg:py-3">
            Misión
          </h4>
          <p className="text-white text-xs sm:text-sm sm:text-center lg:text-lg lg:px-4">
            Conseguir que usted tome el control de su marca mediante estrategias
            en canales digitales, logrando satisfacer las necesidades de su
            negocio o empresa.
          </p>
        </div>
      </li>
      <li className="w-80 h-28 bg-azul flex rounded-3xl justify-center items-center gap-2 sm:flex-col sm:w-72 sm:h-80 sm:justify-start lg:w-80 lg:h-[420px]">
        <div className="bg-white rounded-full w-16 h-16 sm:w-32 sm:h-32 sm:mt-5 flex justify-center items-center">
          <img className="w-[80%]" src={images.vision} alt="Vision icon" />
        </div>
        <div className="w-56 lg:w-full">
          <h4 className="text-naranja text-sm font-bold sm:text-2xl sm:text-center lg:text-4xl lg:py-3">
            Visión
          </h4>
          <p className="text-white text-xs sm:text-sm sm:text-center lg:text-lg lg:px-4">
            Vamos a lo alto, nos enfocamos en ser una agencia de publicidad y
            marketing con alto modelo de calidad y servicios para medianas
            empresas.
          </p>
        </div>
      </li>
    </div>
  );
}

export default AboutCards;
