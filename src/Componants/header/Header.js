import { Link } from "react-router-dom";
import Buttons from "./Button";
import LoginDialog from "./Login/Login";
import Search from "./Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Context/dataProvider";

const Header = () => {
  const navigate = useNavigate()

  const { account, togleAccount } = useContext(DataContext);

  let {cartitems} = useSelector((state) => state.cart)

  return (
    <>
      <LoginDialog />
      <div className="bg-primary header-section d-flex align-items-center row justify-content-end container-fluid m-0 sticky-top">
        
        <div className="  d-flex col-12 col-md-11 col-lg-10 justify-content-between align-items-center me-0 me-md-4 me-lg-5 p-0 ">
        <button className="btn btn-sm shadow-none me-3 p-0 bar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        <i className="fa fa-solid fa-bars text-light"></i>
  </button>
          <Link to={"/"}>
            <div className="d-flex flex-column justify-content-center ">
              <img
                className="header-logo mt-1"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt=""
              />
              <div className="d-flex">
                <p className="logo-title mb-0 ">
                  Explore{" "}
                  <span
                    style={{ color: "rgb(251 255 0)" }}
                    className="m-0 me-1"
                  >
                    Plus
                  </span>
                </p>
                <img
                  className="plus-icon"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Search />
          <Buttons />
        </div>
      </div>
      <div className="collapse" id="collapseExample">
        <div className= "card card-body">
        {account === "" ? (
        <div className="d-flex flex-column align-items-center">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-sm btn-light text-primary rounded rounded-0 px-5 py-1 "
          >
            Login
          </button>
        </div>
      ) : (
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="dropdown-toggle btn btn-primary"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <i className="fa fa-user h5 mb-0 text-light">
              &nbsp;&nbsp;{account}
            </i>
          </button>
          <ul
            className="dropdown-menu  mt-1 p-0 "
            aria-labelledby="btnGroupDrop1"
            onClick={() => togleAccount("")}
          >
            <li>
              <a className="dropdown-item" href="#">
                <i className=" fa fa-solid fa-power-off">&nbsp;&nbsp;Logout</i>
              </a>
            </li>
          </ul>
        </div>
      )}
         <button onClick={()=> navigate("/cart") } type="button" className="btn text-primary">
        Cart
        <i className="fa fa-cart-arrow-down ms-1 position-relative d-inline"></i>
        { cartitems.length > 0 ? (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
            {cartitems.length}
            <span className="visually-hidden">unread messages</span>
          </span>):null
}
        </button>
        </div>
      </div>
    </>
  );
};
export default Header;
