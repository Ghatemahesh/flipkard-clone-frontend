import { useContext } from "react";
import { useSelector } from "react-redux";
import { DataContext } from "../../Context/dataProvider";
import { useNavigate } from "react-router-dom"

const Buttons = () => {
  const { account, togleAccount } = useContext(DataContext);
  const { cartitems } = useSelector((state) => state.cart);
  let navigate = useNavigate()
  return (
    <div className=" d-flex align-items-center me-auto ms-4 gap-2">
      {account === "" ? (
        <div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-sm btn-light text-primary rounded rounded-0 px-5 py-1 d-none d-md-block d-lg-block"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="dropdown-toggle btn btn-primary d-none d-md-block d-lg-block"
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

      <div
        className="btn-group d-none d-md-flex d-lg-flex"
        role="group"
        aria-expanded={false}
      >
        <button className="btn text-light">Become a seller</button>
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn dropdown-toggle text-light"
          data-bs-toggle="dropdown"
          aria-expanded={false}
        >
          More
        </button>
        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </li>
        </ul>
        
        <button onClick={()=> navigate("/cart") } type="button" className="btn text-light">
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
  );
};

export default Buttons;
