import { useState, useContext } from "react";
import { DataContext } from "../../../Context/dataProvider";
import { AuthenticateSignup, AuthenticateLogin } from "../../../Services/Api";

const SignupOBJ = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: ""
};

const LoginOBJ = {
  username: "",
  password: ""
};

const accountInitialValues = {
  login: {
    view: "login",
    title: "Login",
    subtitle: "Get access to your Orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "sigup",
    title: "Looks like you're new here!",
    subtitle: "Sign up with your mobile number to get started",
  },
};

const LoginDialog = () => {
  const [account, setAccount] = useState(accountInitialValues.login);
  const [SignupInfo, setSignupInfo] = useState(SignupOBJ);
  const [Login, setLogin] = useState(LoginOBJ);
  const [warning, setWarning] = useState(false);

  const clickFunction = () => {
    setAccount(accountInitialValues.login);
    document.querySelector(".btn-close").click();
  };
  const {togleAccount } = useContext(DataContext); // Data context

  const accountSignup = () => {
    setAccount(accountInitialValues.signUp);
  };

  const OnSignup = (event) => {
    setSignupInfo({ ...SignupInfo, [event.target.name]: event.target.value });
    console.log(SignupInfo);
  };

  const onLogin = (event) => {
    setLogin({ ...Login, [event.target.name]: event.target.value });
    console.log(Login);
  };

  const signupUser = async () => {
    let responce = await AuthenticateSignup(SignupInfo);
    console.log(responce);
    if (!responce) return;
    togleAccount(SignupInfo.firstname);
    clickFunction();
  };

  const loginUser = async () => {
    let responce = await AuthenticateLogin(Login);
    console.log(responce);
    if (responce === undefined) {
      setWarning(true);
    } else if (responce.status === 200) {
      togleAccount(responce.data.data.firstname);
      setWarning(false);
      clickFunction();
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg ">
        <div className="modal-content  p-0">
          <div className=" modal-body  row d-flex  p-0">
            <div className="col-5 bg-primary d-flex align-items-center justify-content-around flex-column model-height ">
              <div className="container  d-flex p-2 p-md-5 p-lg-5  justify-content-center flex-column">
                <p className="h3 fw-bold text-light mb-3">{account.title}</p>
                <p className="text-light h5">{account.subtitle}</p>
              </div>
              <div className="container d-flex align-items-center justify-content-center">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  style={{ width: 220 }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-7 d-flex ps-0 mt-3">
              {account.view === "login" ? (
                <div className="container d-flex  flex-column ">
                  <div className=" d-flex justify-content-end ">
                    <button
                      type="button"
                      className="btn-close shadow-none default-click"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none "
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="username"
                      onChange={(event) => onLogin(event)}
                    />
                    <label htmlFor="floatingInput text-muted ">
                      Enter Username
                    </label>
                  </div>
                  {warning === true ? (
                    <p className="text-sm m-0 text-danger ">
                      Please enter valid username or password
                    </p>
                  ) : null}
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      onChange={(event) => onLogin(event)}
                    />
                    <label htmlFor="floatingPassword text-muted ">
                      Password
                    </label>
                  </div>

                  <p className="text-sm text-muted px-2">
                    By continuing, you agree to Flipkart's{" "}
                    <span className="text-primary">Terms of Use</span> and {""}
                    <span className="text-primary">Privacy Policy.</span>
                  </p>
                  <button
                    className="btn rounded-0 login-btn py-2 shadow-none"
                    onClick={() => loginUser()}
                  >
                    Login
                  </button>
                  <p className="fs-6 text-center fw-bold text-muted my-3">OR</p>
                  <button className="btn rounded-0 bg-transperant otp-btn py-2 text-primary ">
                    Request OTP
                  </button>
                  <p
                    className="fs-6 text-center text-primary mt-5 pointer"
                    onClick={() => accountSignup()}
                  >
                    New to Flipkart? Create an account
                  </p>
                </div>
              ) : (
                <div className="container d-flex  flex-column ">
                  <div className=" d-flex justify-content-end ">
                    <button
                      type="button"
                      className="btn-close shadow-none"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setAccount(accountInitialValues.login)}
                    ></button>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none "
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(event) => OnSignup(event)}
                      name="firstname"
                    />
                    <label htmlFor="floatingInput text-muted ">
                      First name
                    </label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none "
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(event) => OnSignup(event)}
                      name="lastname"
                    />
                    <label htmlFor="floatingInput text-muted ">Last name</label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none "
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(event) => OnSignup(event)}
                      name="username"
                    />
                    <label htmlFor="floatingInput text-muted ">Username</label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="email"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none "
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(event) => OnSignup(event)}
                      name="email"
                    />
                    <label htmlFor="floatingInput text-muted ">
                      Email address
                    </label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="password"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(event) => OnSignup(event)}
                      name="password"
                    />
                    <label htmlFor="floatingPassword text-muted ">
                      Password
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control border-0 border border-bottom border-primary border-2 rounded-0 shadow-none"
                      id="floatingPassword"
                      placeholder="Number"
                      onChange={(event) => OnSignup(event)}
                      name="phone"
                    />
                    <label htmlFor="floatingPassword text-muted ">Number</label>
                  </div>

                  <button
                    className="btn rounded-0 login-btn py-2 my-3 shadow-none"
                    onClick={() => signupUser()}
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
