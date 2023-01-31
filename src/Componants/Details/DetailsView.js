import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Redux/actions/productActions";
import ProductView from "./ProductView";

const DetailsView = () => {
  const { loading, product } = useSelector((state) => state.getProductById);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductById(id));
  }, [dispatch, id, product, loading]);


  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <main className="container-fluid bg-light" >
      {product &&
        Object.keys(product).length && ( //if there is a value in product object then the object.keys will return a keys of array
          <section className="row d-flex justify-content-start pt-5 ">
            <div className="ms-0 ms-md-2 ms-lg-3 col-12 col-md-5 col-lg-4 d-flex flex-column bg-light">
              <ProductView product={product} />
            </div>
            <div className="col-12 col-md-6 col-lg-7 bg-light mt-2 mt-md-0 mt-lg-0">
              <div className="ps-2 ">
                <p className="fs-5 mb-1 fw-light"> {product.title.longTitle}</p>
                <div className="d-flex align-items-center">
                  <p className="mb-1 me-2 text-muted text-sm">
                    35 Ratings & 10 Reviews
                  </p>
                  <img
                    style={{ width: "11%", height: "11%" }}
                    src={fassured}
                    alt=""
                  />
                </div>
                <p className=" d-flex align-items-center mb-2">
                  <span className="fs-3 mb-0 fw-light">
                    ₹{product.price.cost}
                  </span>
                  &nbsp;&nbsp;
                  <span className=" text-decoration-line-through text-muted mb-0">
                    ₹{product.price.mrp}
                  </span>
                  &nbsp;&nbsp;
                  <span className="fs-6 text-success mb-0">
                    {product.price.discount}&nbsp;off
                  </span>
                </p>
                <p className=" fs-5 my-1">Available offers</p>
                <div >
                  <p className="fs-6 mb-2">
                    <i className="fa fa-solid fa-tag text-success me-2"></i>Bank
                    OfferFlat ₹25 Instant Cashback on Paytm UPI. Min Order Value
                    ₹250. Valid once per Paytm account
                  </p>
                  <p className="fs-6 mb-2">
                    <i className="fa fa-solid fa-tag text-success me-2"></i>Bank
                    OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order
                    Value ₹1000. Valid once per Paytm account
                  </p>

                  <p className="fs-6 mb-2">
                    <i className="fa fa-solid fa-tag text-success me-2"></i>Bank
                    Offer5% Cashback on Flipkart Axis Bank Card
                  </p>
                  <p className="fs-6 mb-2">
                    <i className="fa fa-solid fa-tag text-success me-2"></i>Partner
                    OfferSign up for Flipkart Pay Later and get Flipkart Gift
                    Card worth upto ₹1000*
                  </p>
                  <p className="fs-6 mb-2">
                    <i className="fa fa-solid fa-tag text-success me-2"></i>Partner
                    OfferBuy this product and get upto ₹500 off on Flipkart
                    Furniture
                  </p>
                </div>
                <div className="row d-flex justify-content-start mt-3 pb-3">
                  <div className="col-4 col-md-3 col-lg-2 d-flex align-items-center"><p className="text-muted  fw-bold ">Delivery</p></div>
                  <div className="col-8 col-md-3 col-lg-9  ">
                    <p className="mb-0 fs-6 fw-bold">Usually delivered in 7 days Enter pincode for exact delivery
                    dates/charges</p>
                  </div>
                </div> 

                <div className="row d-flex justify-content-start mt-3 pb-3">
                  <div className="col-4 col-md-3 col-lg-2  d-flex align-items-center"><p className="text-muted  fw-bold ">Warranty</p></div>
                  <div className="col-8 col-md-3 col-lg-9 ">
                    <p className="mb-0 fs-6 ">1yr Warranty</p>
                  </div>
                </div>

                <div className="row d-flex justify-content-start mt-3 pb-3">
                  <div className="col-4 col-md-3 col-lg-2 d-flex align-items-center"><p className="text-muted  fw-bold ">Seller</p></div>
                  <div className="col-8 col-md-3 col-lg-9">
                    <p className="mb-0 fs-6 text-primary ">SuperComNet</p>
                    <p className="mb-0 fs-6 ">GST invoice available</p>
                    <p className="mb-0 fs-6 ">View more sellers starting from ₹{product.price.cost}</p>
                  </div>
                </div>

              </div>
                <div className="mt-3 pb-3">
                <img style={{width : 350}} src={adURL} alt="" />
                </div>
                <div className="row d-flex justify-content-start mt-3 pb-3">
                  <div className="col-4 col-md-3 col-lg-2 d-flex align-items-center"><p className="text-muted  fw-bold ">Description</p></div>
                  <div className="col-8 col-md-3 col-lg-9 ">
                    <p className="mb-0 fs-6 ">{product.description}</p>
                  </div>
                </div>
            </div>
          </section>
        )}
    </main>
  );
};

export default DetailsView;
