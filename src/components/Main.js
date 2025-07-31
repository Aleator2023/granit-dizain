import React from 'react';
import Slider from 'react-slick';
import '../styles/Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from '../assets/logo.png';
import img1 from '../assets/photo1.png';
import img2 from '../assets/photo2.png';
import img3 from '../assets/photo3.png';
import img4 from '../assets/photo4.png';

const slides = [
  { img: logo }, // логотип как первый слайд
  { img: img1, text: 'Прямые поставки из карьеров Урала' },
  { img: img2, text: 'Резка камня по индивидуальным размерам' },
  { img: img3, text: 'Доставка гранита и мрамора по всей стране' },
  { img: img4, text: 'Гарантия качества' },
];

const Main = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <main className="main-slider">
      <Slider {...settings} className="slider-container">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img className="slide-image" src={slide.img} alt={`Слайд ${index + 1}`} />
            {slide.text && (
              <div className="slide-content">
                <p>{slide.text}</p>
               <button onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
  Заказать
</button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default Main;