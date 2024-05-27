import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const slides = [
  "vinyl.png"
];

export default function MusicStyles() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-black mb-8">Music Styles</h2>
      <p className="text-1xl text-gray-700 mb-16">Explore our diverse collection of music styles.</p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Music Style ${index + 1}`} className="w-full"/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
