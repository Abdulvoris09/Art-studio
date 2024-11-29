const Header = () => {
  return (
    <div className="">
      <header className="flex justify-between w-full bg-white shadow-xl container">
        <div>
          <img className="w-[136px] h-[74.29px] items-center mr-[16px]" src="./images/logo.jpg" alt="logo" />
        </div>
        <div className="flex items-center mr-10">
          <img className="w-[35px] h-[36px]" src="./images/icon1.jpg" alt="icon" />
          <img className="w-[35px] h-[36px]" src="./images/icon2.jpg" alt="icon" />
          <div className="flex items-center">
          <img className="w-full h-[36px]" src="./images/icon4.jpg" alt="icon" />
          <span className="text-[20px]">+99899999999</span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header