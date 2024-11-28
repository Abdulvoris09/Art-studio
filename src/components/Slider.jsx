import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Lana Rendy",
    review:
      "Spędziliśmy fantastyczny czas w studiu animacji piaskowej. Atmosfera była niezwykle twórcza, a nasza prowadząca doskonale wprowadziła nas w tajniki tej sztuki. Każdy z nas mógł dać upust swojej wyobraźni i stworzyć coś wyjątkowego.",
    stars: 5,
    image: "./images/3swiper1.jpg",
  },
  {
    name: "Anna",
    review:
      "Ostatnio odwiedziliśmy studio animacji piaskowej i to była jedna z najlepszych decyzji! Cały proces tworzenia był niezwykle relaksujący, a praca z piaskiem dawała niesamowitą frajdę.",
    stars: 5,
    image: "./images/3swiper2.jpg",
  },
  {
    name: "Ksenia",
    review:
      "Nasza wizyta w studiu animacji piaskowej przerosła nasze oczekiwania. Uczyliśmy się tworzyć animacje w miłej i zachęcającej atmosferze. Nasze dzieła były pełne emocji i osobistego wyrazu.",
    stars: 5,
    image: "./images/3swiper3.jpg",
  },
];

const Slider = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Jesteśmy specjalistami w organizacji najlepszej rozrywki dla dzieci i dorosłych
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          // Responsiv dizayn uchun
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="font-bold text-lg">{item.name}</h3>
              <div className="text-yellow-500 mt-2 mb-4">
                {"⭐".repeat(item.stars)}
              </div>
              <p className="text-gray-600">{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
