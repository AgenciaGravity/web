import images from "../../../assets/imagenes";

function AboutHeader() {
  return (
    <>
      <h3
        className="text-2xl font-bold my-3 text-center text-azul lg:hidden"
        id="AbautHeader"
      >
        Acerca de Gravity
      </h3>
      <div className="background__double w-full">
        <div className="max-w-6xl m-auto bg-azul relative items-center justify-between p-5 sm:flex sm:py-10">
          <div>
            <h3 className="text-naranja text-[20px] font-bold mb-1 sm:text-[24px] lg:text-[35px]">
              Nosotros
            </h3>
            <p className="hidden text-white max-w-[450px] text-[12px] sm:block lg:text-[17px] lg:max-w-[700px]">
              Somos una agencia creativa que brinda soluciones innovadoras
              mediante estrategias de marketing acompañada de la creación de
              identidades visuales fuertes y efectivas. Gestionamos y diseñamos
              feeds de redes.
              <br />
              <br />
              La Agencia gravity brinda servicios de diversas disciplinas con el
              objetivo de trabajar en equipo, haciéndolo de manera integral para
              el beneficio de sus clientes.
            </p>
          </div>
          <aside className="flex justify-between items-center gap-[20px]">
            <img
              className="max-w-[98px] z-10 w-full sm:max-w-[198px] sm:mr-10 lg:mr-16 lg:w-[330px]"
              src={images.Human_002}
              alt="Human Gravity"
            />
            <p className="text-white text-[10px] sm:hidden">
              Somos una agencia creativa que brinda soluciones innovadoras
              mediante estrategias de marketing acompañada de la creación de
              identidades visuales fuertes y efectivas. Gestionamos y diseñamos
              feeds de redes.
              <br />
              <br />
              La Agencia gravity brinda servicios de diversas disciplinas con el
              objetivo de trabajar en equipo, haciéndolo de manera integral para
              el beneficio de sus clientes.
            </p>
          </aside>
          <div className="hidden w-[50px] rounded-l-[20px] h-full bg-naranja absolute top-0 right-0 sm:block lg:rounded-l-[25px]"></div>
        </div>
      </div>
    </>
  );
}

export default AboutHeader;
