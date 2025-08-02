import React from 'react';
import '../styles/Products.css';

import img1 from '../assets/products/photo1.JPG'; 
import img2 from '../assets/products/photo2.JPG';
import img3 from '../assets/products/photo3.JPG';
import img4 from '../assets/products/photo4.JPG';
import img5 from '../assets/products/photo5.JPG';
import img6 from '../assets/products/photo6.JPG';
import img7 from '../assets/products/photo7.JPG';
import img8 from '../assets/products/photo8.JPG';

const productItems = [
  { img: img1, title: 'Гранитная брусчатка' },
  { img: img2, title: 'Красный камень' },
  { img: img3, title: 'Гранитные ступени' },
  { img: img4, title: 'Плиты' },
  { img: img5, title: 'Парамет' },
  { img: img6, title: 'Мансуровский гранит' },
  { img: img7, title: 'Каменные столешницы' },
  { img: img8, title: 'Подоконники' },
];

const Products = () => {
  return (
    <section className="products-section" id="products">
      <h2 className="products-title">Наша продукция</h2>
      <div className="products-grid">
        {productItems.map((item, idx) => (
          <div key={idx} className="product-card">
            <img src={item.img} alt={item.title} />
            <div className="product-info">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;