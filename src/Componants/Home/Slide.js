import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Slide = ({ product , title , timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

    const renderer = ({hours , minutes , seconds}) =>{
      return(
        <p className="mb-0 w-100 text-muted fw-bold h6">
          {hours} : {minutes} : {seconds}
        </p>
      )
    }
  return (
    <div className="container-fluid bg-light px-0 px-md-1 px-lg-3">
      <div className=" border border-2 my-2 py-2 row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-11 col-lg-11 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <p className="h6 fw-bold me-0 me-md-2 me-lg-2  ">{title}</p>
{ timer === true ? (
            <div className="d-flex justify-content-center align-items-center">
              <img className="me-0 me-md-2 me-lg-2 ms-0 ms-md-1 ms-lg-1 " style={{width : 23 }} src={timerURL} alt="time" />
              <Countdown  date={Date.now() + 50400000} renderer={renderer} />
              <p className="h6 mb-0 fw-bold ms-0 ms-md-1 ms-lg-1 text-muted">Left</p>
            </div>) : null
}
          </div>
          <button className="btn btn-primary rounded-0 px-1 px-md-2 px-lg-3 fw-bold">View All</button>
        </div>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        className="my-3"
      >

       {
        product.map((item,index)=>{
        console.log(item);
          return (
            <div key={index} className="d-flex justify-content-around align-items-center flex-column card-hover">
              <Link to={`product/${item.id}`} style={{textDecoration : "none"} }>
              <div className="d-flex justify-content-center align-items-center">
              <img className="pointer" style={{width : 120 , height : 140} } src={item.url} alt="product" />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column mt-2">
              <p className="m-0 fw-bold text-dark text-align-center">{item.title.shortTitle}</p>
              <p className="m-0 text-success text-align-center" style={{fontSize : 15}}>{item.discount}</p>
              <p className="m-0 text-muted text-align-center" style={{fontSize : 15}}>{item.tagline}</p>
              </div>
            </Link>
            </div>
          )
        })
       }
      </Carousel>
    </div>
  );
};

export default Slide;
