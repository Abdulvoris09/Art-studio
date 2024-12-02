const Header = () => {
  return (
    <div className="bg-white shadow-xl">
      <header className="container flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-[136px] h-[74px] mr-4"
            src="./images/logo.jpg"
            alt="logo"
          />
        </div>
        {/* Contact Icons */}
        <div className="flex items-center space-x-4">
          <img className="w-[35px] h-[36px]" src="./images/icon1.jpg" alt="icon" />
          <img className="w-[35px] h-[36px]" src="./images/icon2.jpg" alt="icon" />
          <div className="flex items-center space-x-2">
            <img
              className="w-[35px] h-[36px]"
              src="./images/icon4.jpg"
              alt="icon"
            />
            <span className="text-[18px] font-medium text-gray-800">
              999999999
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;