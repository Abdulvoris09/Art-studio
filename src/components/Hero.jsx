const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-center text-[40px] md:text-[60px] font-bold text-gray-900">
        Warsztaty na eventy
      </h1>
      <hr className="bg-[#fdd551] h-[6px] w-[160px] md:w-[430px] mx-auto mt-4" />
      
      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-[28px] md:text-[48px] font-semibold leading-tight text-gray-900">
            Rysowanie <br /> pocztówek piaskiem
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Staliśmy się częścią każdego wydarzenia – zarówno dużego, jak i małego.
          </p>
          <button className="bg-[#FE7609] text-white text-lg py-3 px-6 rounded-lg mt-6 hover:bg-[#E56508] transition duration-300">
            Zacznijmy
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-[556px] h-auto rounded-lg shadow-lg"
            src="./images/hero1.jpg"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;