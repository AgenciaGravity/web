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
            <img src={images.Linkdln_icon.img} alt={images.Linkdln_icon.info} title={images.Linkdln_icon.info} />
          </a>
        </li>
        <li className="pb-[5px] duration-300 border-b-2">
          <a href="https://www.facebook.com/SomosGravity" target="_blank">
            <img src={images.Facebook_icon.img} alt={images.Facebook_icon.info} title={images.Facebook_icon.info} />
          </a>
        </li>
        <li className="pb-[5px] duration-300 border-b-2">
          <a href="https://www.instagram.com/agencia_gravity/" target="_blank">
            <img src={images.Instagram_icon.img} alt={images.Instagram_icon.info} title={images.Instagram_icon.info} />
          </a>
        </li>
        <li className="pb-[5px] duration-300 border-b-2">
          <a href="https://www.behance.net/gravityagencia" target="_blank">
            <img src={images.Be_icon.img} alt={images.Be_icon.info} title={images.Be_icon.info} />
          </a>
        </li>
        <li className="pb-[5px] duration-300">
          <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
            <img src={images.Whatssap_icon.img} alt={images.Whatssap_icon.info} title={images.Whatssap_icon.info} />
          </a>
        </li>
      </ul>
      <ul className="z-[21] flex justify-center items-center flex-col w-full">
        <li
          onClick={() => setIcons(!icons)}
          className="duration-300 hover:scale-90 active:scale-50 cursor-pointer"
        >
          <img src={images.Glovo_icon____gravity.img} alt={images.Glovo_icon____gravity.info} title={images.Glovo_icon____gravity.info} />
        </li>
        <li className="duration-300 hover:scale-90 active:scale-50">
          <a href="https://wa.me/message/A6KRC3PTRPNDO1" target="_blank">
            <img src={images.Whatssap_glovo.img} alt={images.Whatssap_glovo.info} title={images.Whatssap_glovo.info} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FloatingBar;
