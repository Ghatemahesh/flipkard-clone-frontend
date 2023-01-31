import { imageURL } from "../../constant/NavbarData";
const MidBanner = ()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
      <div className="d-flex align-items-center justify-content-center">
          <div className="row d-flex align-items-center justify-content-around my-1 p-2 bg-light w-100">
            { imageURL.map((image , index)=>{
                return(
                        <img  key={index} className="col-12 col-md-4" src={image} alt=""/>
                )
            })
            }
            <img className="col-12 mt-3 w-100" src={url} alt="banner"/>
        </div>
      </div>
       
    )
}

export default MidBanner ;