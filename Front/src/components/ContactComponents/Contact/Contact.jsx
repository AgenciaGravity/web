import images from "../../../assets/imagenes";

function SectionContact() {
  return (
    <div
      className="flex flex-col py-12 px-5 w-full text-center justify-center items-center max-w-6xl m-auto lg:flex-row-reverse lg:justify-around"
      id="weHearYou"
    >
      <div className="networkContact flex flex-col items-center pb-5 gap-5">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="font-bold text-[20px] text-naranja sm:text-[32px]">
            Haz despegar tu marca
          </h3>
          <p className="text-azul w-[159px] text-[12px] text-center sm:text-[20px] sm:w-[370px]">
            Te esperamos en nuestras distintas redes sociales:
          </p>
          <ul className="networksContain flex w-full justify-center gap-3">
            <li>
              <a
                href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
                target="_blank"
              >
                <img
                  className="aspect-square w-[32px]"
                  src={images.Linkdln_icon}
                  alt="Linkdln"
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
                <img
                  className="aspect-square w-[32px]"
                  src={images.Whatssap_icon}
                  alt="Whatssap"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/SomosGravity" target="_blank">
                <img
                  className="aspect-square w-[32px]"
                  src={images.Facebook_icon}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agencia_gravity/"
                target="_blank"
              >
                <img
                  className="aspect-square w-[32px]"
                  src={images.Instagram_icon}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/gallery/150687073/Agencia-Gravity"
                target="_blank"
              >
                <img
                  className="aspect-square w-[32px]"
                  src={images.Be_icon}
                  alt="Be"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@agencia.gravity?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <img
                  className="aspect-square w-[32px]"
                  src={images.Tiktok_icon}
                  alt="Tiktok"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/AgenciaGravity/"
                target="_blank"
              >
                <img
                  className="aspect-square w-[32px]"
                  src={images.Pinterest_icon}
                  alt="Pinterest"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-azul mt-6 flex w-full max-w-[380px] py-6 px-10 space-x-2 rounded-3xl justify-between items-center sm:max-w-[710px] sm:justify-around lg:flex-col lg:max-w-[310px] lg:py-16">
        <div className="flex items-center justify-center aspect-square w-24 bg-white rounded-full z-10 sm:w-[151px]">
          <img src={images.envelopColor} className="w-[70%]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[20px] text-naranja sm:text-[30px]">
            Te escuchamos
          </h1>
          <p className="text-white mb-[20px] text-[10px] sm:text-[16px]">
            contacto@agenciagravity.com
          </p>
            <a className="hover:scale-110 duration-300 bg-naranja text-azul rounded-3xl p-1 font-bold lg:w-full w-32 sm:w-48" href="mailto:contacto@agenciagravity.com?subject=Quiero%20informacion&body=Deseo%20información%20sobre%20como%20mejorar%20mi%20marca">
              Enviar email
            </a>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
