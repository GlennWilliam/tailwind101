const CardMedium = ({ bgImg, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="shadow-2xl relative flex h-34 w-34 cursor-pointer flex-col justify-end rounded-2xl bg-cover bg-center text-white shadow-lg max-md:h-28 max-md:w-28"
    >
      <img
        src={bgImg}
        alt={title}
        className="shadow-2xl h-full w-full rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />

      <p
        className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 transform truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 px-3 py-1 text-center text-sm font-semibold text-white shadow-md backdrop-blur-md"
      >
        {title}
      </p>

      <div className="absolute top-2 right-2 z-10 flex h-5 w-5 scale-75 items-center justify-center rounded-[20px] border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20">
        <i className="fa fa-arrow-up rotate-45 text-xs text-white"></i>
      </div>
    </button>
  );
};

export default CardMedium;