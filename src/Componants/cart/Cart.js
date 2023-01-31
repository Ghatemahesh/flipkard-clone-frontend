import { useDispatch, useSelector } from "react-redux";
import ButtonGroup from "./ButtonGroup";
import CalculationView from "./CalculationView";
import { removeFromCart } from "../../Redux/actions/cartActions";
import EmptyCart from "./EmptyCartView";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/dataProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { cartitems } = useSelector((state) => state.cart);
  const { account, togleAccount } = useContext(DataContext);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const RemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

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

  let Display_Razorpay = async (price, itemid) => {
    let isLoaded = await loadScript();
    if (isLoaded === false) {
      alert("SDK is not loaded");
      return false;
    }

    let serverData = {
      amount: price,
    };
    let url = "https://flipcart-backend-api-production.up.railway.app/payment/gen-order";
    let { data } = await axios.post(url, serverData);

    let order = data.order;

    var options = {
      key: "rzp_test_gxPyLR1dtP1T5d", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "FlipKart",
      description: "Buying A Product From FlipKart",
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
            icon: "success",
            title: "Payment Successfull 😊",
            text: "Enjoy !",
          }).then(() => {
            dispatch(removeFromCart(itemid));
            navigate("/");
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Payment Failed ",
            text: "Please try again !",
          }).then(() => {
            navigate("/");
          });
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
      {cartitems.length ? (
        <section className="container-fluid d-flex row justify-content-center gap-3 mt-5 m-0">
          <div className="col-12 col-md-7 col-lg-7 d-flex flex-column border border-2 box-shadow bg-light">
            <header className="container py-3">
              <p className="fs-5 mb-0">My Cart ({cartitems.length}) </p>
            </header>
            {cartitems.map((item, index) => {
              return (
                <article
                  key={index}
                  className="d-flex row gap-2 border-bottom border-1 p-4 "
                >
                  <div className=" col-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center gap-2">
                    <img
                      style={{ width: 130, height: 140 }}
                      src={item.url}
                      alt=""
                    />
                    <ButtonGroup />
                  </div>
                  <div className="col-12 col-md-2 col-lg-9  d-flex justify-content-around  flex-column">
                    <p className="mb-0 fw-bold">{item.title.longTitle}</p>
                    <p className="mb-0 text-sm text-muted fw-bold">
                      Seller : RetailNet{" "}
                      <span>
                        <img style={{ width: "15%" }} src={fassured} alt="" />
                      </span>
                    </p>
                    <p className=" d-flex align-items-center mb-2">
                      <span className="fs-5 mb-0 fw-bold">
                        ₹{item.price.cost}
                      </span>
                      &nbsp;
                      <span className=" text-sm text-decoration-line-through text-muted mb-0">
                        ₹{item.price.mrp}
                      </span>
                      &nbsp;&nbsp;
                      <span className=" text-sm text-success mb-0">
                        {item.price.discount}&nbsp;off
                      </span>
                    </p>
                    <span>
                      <button
                        className="btn shadow-none btn-sm fw-bold rounded rounded-0 "
                        onClick={() => RemoveItemFromCart(item.id)}
                      >
                        REMOVE
                      </button>
                    </span>
                  </div>
                  <div className="d-flex justify-content-end">
                    {
                      account ? (<button
                        style={{ background: "#fb641b" }}
                        onClick={() => Display_Razorpay(item.price.cost, item.id)}
                        className="btn btn-lg text-light px-4 text-sm rounded-1 "
                      >
                        PLACE ORDER
                      </button>) :(
                        <button
                        style={{ background: "#fb641b" }}
                        className="btn btn-lg text-light px-4 text-sm rounded-1 "
                        disabled
                      >
                        LOGIN TO PLACE ORDER
                      </button>
                      )
                    }
                  </div>
                </article>
              );
            })}
          </div>
          <CalculationView cartitems={cartitems} />
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
