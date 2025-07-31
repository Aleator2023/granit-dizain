import React from "react";
import Slider from "react-slick";
import "../styles/Reviews.css";
import dmitriyAvatar from "../assets/avatars/dmitry.png";
import irinaAvatar from "../assets/avatars/irina.png";
import andreyAvatar from "../assets/avatars/andrey.png";
import olgaAvatar from "../assets/avatars/olga.png";
import sergeyAvatar from "../assets/avatars/serg.png";
import tatianaAvatar from "../assets/avatars/tan.png";


const reviews = [
  {
    name: "Дмитрий Фёдоров",
    text: "Достойная работа! Камень высокого качества, никаких претензий.",
    avatar: dmitriyAvatar,
  },
  {
    name: "Ирина Смирнова",
    text: "Быстрая доставка и отличное качество гранита. Очень довольна заказом!",
    avatar: irinaAvatar,
  },
  {
    name: "Андрей Кузнецов",
    text: "Работают профессионально. Всё изготовили в срок и помогли с установкой.",
    avatar: andreyAvatar,
  },
  {
    name: "Ольга Алексеева",
    text: "Очень довольна. Всё сделано аккуратно, рекомендую компанию!",
    avatar: olgaAvatar,
  },
  {
    name: "Сергей Воронов",
    text: "Большой выбор материалов. Нашли идеальный оттенок для участка.",
    avatar: sergeyAvatar,
  },
  {
    name: "Татьяна Николаева",
    text: "Спасибо за качество и оперативность. Буду обращаться ещё!",
    avatar: tatianaAvatar,
  },
];

function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews-section" id="reviews">
      <h2 className="reviews-title">Отзывы клиентов</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
       <div className="review-card" key={index}>
  <img src={review.avatar} alt={review.name} className="review-avatar" />
  <div className="review-content">
    <p className="review-text">“{review.text}”</p>
    <p className="review-name">— {review.name}</p>
  </div>
</div>
        ))}
      </Slider>
    </section>
  );
}

export default Reviews;