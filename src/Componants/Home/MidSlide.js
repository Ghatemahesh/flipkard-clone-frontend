import Slide from "./Slide";
const MidSlide = ({product, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return(
    <div className="d-flex justify-content-between align-items-center my-2 row w-100 m-0 ">
        <div className="col-12 col-md-10 col-lg-10 ">
            <Slide product={product} title={title} timer={timer} />
        </div>
        <div className="bg-light  col-2 d-flex justify-content-center align-items-center mt-1 ad-block">
            <img src={adURL} alt="ad" style={{width : 251 , height : 300}} />
        </div>
    </div>
  )
};

export default MidSlide;
