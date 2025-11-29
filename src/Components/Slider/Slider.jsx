import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      // src="https://i.pinimg.com/1200x/51/2c/2e/512c2eed2a8956bc0ad149e52bc42586.jpg"
      src="https://i.ibb.co.com/kVwHhRfY/Gemini-Generated-Image-9nyd5p9nyd5p9nyd.png"
      className="w-full h-[800px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.pinimg.com/1200x/8c/00/91/8c009148639e74c7ee8a01a6dd92d1d2.jpg"
      // src="https://i.pinimg.com/736x/03/3b/84/033b84a357169d15683f5edb01223c4f.jpg"
      className="w-full h-[800px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.pinimg.com/736x/be/3e/62/be3e62b6f66f1c761b1ec85e40fbf094.jpg"
      className="w-full h-[800px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.pinimg.com/736x/28/18/35/28183584fbeee29bd1b1d535dce21b38.jpg"
      className="w-full h-[800px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;