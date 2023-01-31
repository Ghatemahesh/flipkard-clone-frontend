import { useEffect, useState } from "react";

const CalculationView = ({ cartitems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartitems.map((item) => {
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost) ;
    });
    setPrice(price)
    setDiscount(discount)
  };

  useEffect(()=>{
    totalAmount()
  },[cartitems])

  return (
    <div className="col-12 col-md-3 col-lg-3 h-50 box-shadow p-3 bg-light">
      <p className="text-muted fw-bold">PRICE DETAILS</p>
      <div className="d-flex justify-content-between">
        <span className=" mb-3 text-sm fw-bold">
          Price ({cartitems?.length}item)
        </span>
        <span className="mb-3 text-sm fw-bold">₹{price}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className=" mb-3 text-sm fw-bold">Discounts</span>
        <span className="mb-3 text-sm fw-bold">-₹{discount}</span>
      </div>
      <div className="d-flex justify-content-between border-bottom border-1">
        <span className=" mb-3 text-sm fw-bold">Delivery Charges</span>
        <span className="mb-3 text-sm fw-bold">₹40</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className=" h5 fw-bold mt-3 ">Total Amount</span>
        <span className="mt-3  fw-bold">₹{price - discount + 40}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className=" text-sm text-success fw-bold">
          You Will Save ₹{discount - 40} On This Order
        </span>
      </div>
    </div>
  );
};

export default CalculationView;
