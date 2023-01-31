const Banner = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide mt-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/95d6f56ac011628c.jpg?q=50"
            className="d-block w-100"
            alt="banner"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6bd47b2bdcdc710c.jpg?q=50"
            className="d-block w-100"
            alt="banner"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/98f5f4f2798f8010.jpg?q=50"
            className="d-block w-100"
            alt="banner"
          />
        </div>
        <div className="carousel-item">
          <img
            src=" https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2f0924d238f8248e.jpg?q=50"
            className="d-block w-100"
            alt="banner"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
