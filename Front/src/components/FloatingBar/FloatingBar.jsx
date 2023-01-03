import images from "../../assets/imagenes";
import { useState } from "react";

function FloatingBar() {
  const [icons, setIcons] = useState(false);

  window.onscroll = () => {
    setIcons(false);
  };

  return (
    <div className="fixed top-0 right-0 w-[4%] min-w-[60px] h-screen flex justify-center items-center flex-col z-20">
      <ul
        className={`floating__bar flex justify-center items-center flex-col gap-[10px] w-[70%] bg-floating-color rounded-[10px] pt-[20px] px-[10px] pb-[10px] relative mb-[10px] duration-300 after:content-[' '] after:w-[20px] after:h-[20px] after:bg-floating-color after:absolute after:-bottom-[20px] ${
          icons ? "" : "translate-y-[100px] scale-0 "
        }`}
      >
        <li className="pb-[5px] duration-300 border-b-2">
          <a
            href="https://www.linkedin.com/company/gravity-agencia-de-marketing-y-publicidad/?viewAsMember=true/"
            target="_blank"
          >
            <img src={images.Linkdln_icon} alt="Icono Linkdin" />
          </a>
        </li>
        <li className="pb-[5px] duration-300 border-b-2">
          <a href="https://www.facebook.com/SomosGravity" target="_blank">
            <img src={images.Facebook_icon} alt="Icono Facebook" />
          </a>
        </li>
        <li className="pb-[5px] duration-300 border-b-2">
          <a href="https://www.instagram.com/agencia_gravity/" target="_blank">
            <img src={images.Instagram_icon} alt="Icono Instagram" />
          </a>
        </li>
        <li className="pb-[5px] duration-300 border-b-2">
          <a href="https://www.behance.net/gravityagencia" target="_blank">
            <img src={images.Be_icon} alt="Icono Behance" />
          </a>
        </li>
        <li className="pb-[5px] duration-300">
          <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
            <img src={images.Whatssap_icon} alt="Icono Whatsapp" />
          </a>
        </li>
      </ul>
      <ul className="z-[21] flex justify-center items-center flex-col w-full">
        <li
          onClick={() => setIcons(!icons)}
          className="duration-300 hover:scale-90 active:scale-50 cursor-pointer"
        >
          <img src={images.Glovo_icon____gravity} alt="Icono Gravity" />
        </li>
        <li className="duration-300 hover:scale-90 active:scale-50">
          <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
            <img src={images.Whatssap_glovo} alt="Icono Wathsapp" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FloatingBar;
