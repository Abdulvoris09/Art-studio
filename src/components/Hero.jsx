const Hero = () => {
  return (
    <div className="container">
      <h1 className="mt-2 text-center text-[70px]">
      Warsztaty na eventy
      <hr className="bg-[#fdd551] h-1 md:w-[430px] md:ml-[300px]" />
      </h1>
      <div className="grid md:grid-cols-2">
        <div className="md:mt-[100px] mt-[20px]">
          <h2 className="text-6xl mb-4">Rysowanie <br /> pocztówek piaskiem</h2>
          <p className="text-lg text-[#767676]">Staliśmy się częścią każdego wydarzenia – zarówno dużego, jak i małego.</p>
          <button className="bg-[#FE7609] p-3 mt-3 rounded-lg">Zacznijmy</button>
        </div>
        <div>
          <img className="w-[556px] h-[472px] mt-[50px]" src="./images/hero1.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero