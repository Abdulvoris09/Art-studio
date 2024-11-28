import Slider from "./Slider";
import Swipers from "./Swipers";

const Sectionall = () => {

  const logos = ["./images/1-swiper1.png", "./images/1-swiper2.jpg", "./images/1-swiper3.jpg", "./images/1-swiper4.jpg"];

  return (
    <div>
      {/* sectionn1 */}
      <section className="grid md:grid-cols-2 bg-yellow-400 p-8 md:p-10 lg:px-24 lg:py-16">
        {/* Image and mask */}
        <div className="">
          <div className="">
            <img
              src="./images/kabutar.svg"
              alt="Sand drawing"
              className="md:-ml-16 p-10"
            />
          </div>
        </div>
        {/* Text content */}
        <div className="md:mt-24 mt-10">
          <h2 className="text-[48px] font-bold text-gray-800 mb-4">
            Dla firm br i festiwali
          </h2>
          <p className="text-lg text-gray-700">
            Zachęcamy firmy do zamówienia naszych warsztatów animacji piaskowej na
            festiwale i imprezy firmowe! Uczestnicy w zaledwie 5 minut nauczą się
            techniki rysowania piaskiem, tworząc unikalne pocztówki. Na wydarzeniu
            możemy ustawić do 5 stołów jednocześnie, a profesjonalna obsługa z
            naszego studia DIAZ-art studio zapewni sprawny przebieg warsztatów i
            wyjątkowe wrażenia dla uczestników.
          </p>
        </div>
      </section>
      {/* section2 */}
      <section className="bg-yellow-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Text Section */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
        Dla rodziców i <span className="text-yellow-500">dzieci</span>
      </h2>
      <p className="text-gray-600 mb-8 text-center lg:text-left">
        Zapewniamy kreatywne warsztaty dla dzieci oraz rodziców. Każdy może
        znaleźć coś interesującego, co rozwija kreatywność i umiejętności
        manualne.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src="./images/section3.jpg"
        alt="section3"
        className="rounded-lg shadow-lg w-full max-w-md"
      />
    </div>
  </div>
</section>


      {/* section3 */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Dla hoteli i <span className="text-yellow-500">restauracji</span>
            </h2>
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              Organizujemy warsztaty dostosowane do potrzeb hoteli i restauracji.
              Nasi specjaliści sprawiają, że każde wydarzenie staje się wyjątkowe.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="./images/section4.jpg"
              alt="Hotel Workshop"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>


      {/* section4 */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Porozmawiajmy o organizacji warsztata!
          </h2>
          <p className="text-gray-600 mb-8">
            Skontaktuj się z nami i zobacz, jak możemy Ci pomóc!
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition">
            Skontaktuj się
          </button>
        </div>
      </section>

      {/* section5 */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-lg font-bold text-gray-600 mb-6">
            Współpracujemy z <span className="text-yellow-500">najlepszymi</span>
          </h3>
          <div className="flex justify-center items-center space-x-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Partner logo"
                className="h-12 w-auto"
              />
            ))}
          </div>
        </div>
      </section>
            <Slider />
            <Swipers />
      <div className="bg-yellow-300 p-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Współpracuj z nami</h1>
          <p className="text-lg text-gray-700">
            Zadbaj o rozwój swojej firmy! Zapraszamy do skorzystania z naszych usług i ciesz się sukcesem biznesowym!
          </p>

          {/* Form Section */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Nr. telefonu"
                className="border rounded p-2 w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Adres e-mail"
              className="border rounded p-2 w-full"
            />
            <textarea
              placeholder="Twoja wiadomość"
              rows="4"
              className="border rounded p-2 w-full"
            ></textarea>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Zgadzam się na przetwarzanie moich danych osobowych.
              </label>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded">
              Wyślij wiadomość
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Paint-like Background */}
            <div className="absolute w-[220px] h-[220px] -rotate-3 rounded-full z-0"></div>
            <img
              src="./images/opaxon.jpg"
              alt="Anna Diaz"
              className="relative rounded-full w-[200px] h-[200px] z-10 shadow-lg"
            />
          </div>
          <p className="text-center mt-4 text-lg font-semibold">Anna Diaz</p>
          <p className="text-center text-gray-600">Założycielka firmy</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-xl font-bold">Warsztaty firmowe – Oryginalne atrakcje eventowe dla Twojej firmy</h2>
          <p className="mt-2 text-gray-600">
            Warsztaty to doskonała forma integracji zespołu oraz inwestycja w rozwój umiejętności.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Dlaczego warto zainwestować w warsztaty firmowe?</h2>
          <p className="mt-2 text-gray-600">
            Warsztaty budują relacje, zwiększają kreatywność oraz wzmacniają motywację w zespole.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Oryginalne atrakcje eventowe – klucz do sukcesu</h2>
          <p className="mt-2 text-gray-600">
            Atrakcje dostosowane do potrzeb Twojej firmy sprawią, że każdy event będzie niezapomniany.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Jak rozpocząć współpracę?</h2>
          <p className="mt-2 text-gray-600">
            Skontaktuj się z nami, aby poznać szczegóły i ustalić plan działania.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sectionall