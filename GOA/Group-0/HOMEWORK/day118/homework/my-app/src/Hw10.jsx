import React, { useState } from 'react';

const images = [
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F821062575791990719%2F&psig=AOvVaw3xMCFdWKllz4hory-x64AH&ust=1730489002819000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLi-1YOsuYkDFQAAAAAdAAAAABAE',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiktok.com%2F%40ricky_9g%2Fvideo%2F7189636442988055814&psig=AOvVaw2GpOnzZxEQ7knx4BcncMnT&ust=1730489021325000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiL_4ysuYkDFQAAAAAdAAAAABAE',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wakeupbodynutrition.com%2Fkevin-levrone-gold-creatine-300g-pure%2F&psig=AOvVaw2GpOnzZxEQ7knx4BcncMnT&ust=1730489021325000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiL_4ysuYkDFQAAAAAdAAAAABAJ',
];

const Hw10 = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <img src={images[index]} alt="carousel" />
      <div>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Hw10;
