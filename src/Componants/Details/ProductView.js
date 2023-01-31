import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../Redux/actions/cartActions";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../Context/dataProvider";
const ProductView = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { id } = product;
  const { account, togleAccount } = useContext(DataContext);

  const addItemToCart = () => {
    dispatch(addToCart(id,quantity));
    navigate("/cart");
  };

  const LoginFirst = ()=>{
    Swal.fire({
      icon: 'warning',
      title: 'Login',
      text: 'Login to place order !',
    })
  }

  function loadScript() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      return true;
    };
    script.onerror = () => {
      return false;
    };
    window.document.body.appendChild(script);
  }

  let Display_Razorpay = async () => {
    let isLoaded = await loadScript();
    if (isLoaded === false) {
      alert("SDK is not loaded");
      return false;
    }
    let serverData = {
      amount : product.price.cost
    }
    let url = "https://flipcart-backend-api-production.up.railway.app/payment/gen-order";
    let { data } = await axios.post(url , serverData);

    let order = data.order;

    var options = {
      key: "rzp_test_gxPyLR1dtP1T5d", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Flipkart",
      description: "Buying A Product From Flipcart",
      image:
        "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        let Send_data = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };
        let url = "https://flipcart-backend-api-production.up.railway.app/payment/verify";
        let { data } = await axios.post(url, Send_data);
        if (data.status === true) {
          Swal.fire({
            icon: 'success',
            title: 'Payment Successfull 😊',
            text: 'Enjoy !',
          }).then(()=>{
            navigate("/")
          })
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Payment Failed ',
            text: 'Please try again !',
          }).then(()=>{
            navigate("/")
          })
        }
      },
      prefill: {
        name: account,
        contact: "9999999999",
      },
    };
    var Razorpay_Obj = window.Razorpay(options);
    Razorpay_Obj.open();
  };

  return (
    <>
      <main className="container-fluid d-flex justify-content-center p-0">
        <img style={{ width: "80%" }} src={product.detailUrl} alt="product" />
      </main>
      <div className=" d-flex justify-content-center gap-1 mt-4 row ">
        <button
          onClick={() => addItemToCart()}
          style={{ background: "#ff9f00" }}
          className="btn text-light fw-bold border-0  rounded-0 col-5 py-3"
        >
          {" "}
          <i className="fa fa-cart-plus me-2 fa-align-center"></i>ADD TO CART
        </button>
        {
          account ? (
            <button
        onClick={()=> Display_Razorpay()}
          style={{ background: "#fb641b" }}
          className="btn text-light fw-bold rounded-0 col-5 py-3 "
        >
          <i className="fa fa-bolt fa-align-center me-2 "></i> BUY NOW
        </button>
          ):(
            <button
        onClick={()=> LoginFirst()}
          style={{ background: "#fb641b" }}
          className="btn text-light fw-bold rounded-0 col-5 py-3 "
        >
          <i className="fa fa-bolt fa-align-center me-2 "></i> BUY NOW
        </button>
          )


        }
        
      </div>
    </>
  );
};

export default ProductView;
