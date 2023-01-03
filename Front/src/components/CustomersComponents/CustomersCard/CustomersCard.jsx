function CustomerCard({ img, name, description, hidden }) {
  return (
    <div
      className={`shadow-services-card bg-griss rounded-2xl overflow-hidden	h-[225px] w-[143px] sm:h-[283px] sm:w-[191px] lg:w-[382px] lg:h-[450px] ${hidden}`}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full max-h-[108px] object-cover sm:max-h-[140px] lg:max-h-[290px]"
      />
      <div className="p-2">
        <h4 className="text-azul text-[10px] my-2 font-bold sm:text-[14px] lg:text-[20px]">
          {name}
        </h4>
        <p className="text-azul text-[10px] sm:text-[14px] lg:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CustomerCard;
