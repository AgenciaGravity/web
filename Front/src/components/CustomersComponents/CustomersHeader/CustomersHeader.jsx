import images from "../../../assets/imagenes";

function CustomersHeader({ banner, name, description }) {
  return (
    <div
      className="shadow-card flex justify-center items-center relative h-[230px] sm:h-[368px] lg:h-[500px]"
      id="customers"
    >
      <img
        src={images[banner].img}
        className="absolute top-0 h-full object-cover w-full"
        alt={images[banner].info}
        title={images[banner].info}
      />
      <div className="hidden bg-white rounded-3xl p-4 justify-center flex-col items-center relative sm:py-12 sm:px-6 lg:py-16">
        <span className="w-10 absolute bg-azul aspect-square rounded-full -top-6 sm:w-[68px] lg:-top-10 lg:w-20"></span>
        <p className="text-[10px] w-[125px] text-center text-azul sm:text-[15px] sm:w-[213px] lg:w-[420px] lg:text-[24px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore
        </p>
      </div>
    </div>
  );
}

export default CustomersHeader;
