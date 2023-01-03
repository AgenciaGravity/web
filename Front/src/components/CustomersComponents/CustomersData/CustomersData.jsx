function CustomersData({ name, description }) {
  return (
    <div className="mx-5 my-10 max-w-6xl lg:m-auto lg:my-10">
      <h4 className="text-[15px] text-azul font-bold sm:text-[32px] lg:text-[36px]">
        {name}
      </h4>
      <p className="text-[10px] text-azul sm:text-[15px] lg:text-[24px]">
        {description.l}
      </p>
    </div>
  );
}

export default CustomersData;
