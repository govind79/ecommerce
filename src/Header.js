import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { REMOVE } from "./Redux/actions/actions";
function Header() {
  const [price, setprice] = useState(0);

  console.log(price, "price total");
  const getdata = useSelector((state) => state.cartreducer);
console.log(getdata.cart,"headerdata")
  const dispatch = useDispatch();

//   const { id } = useParams();

  const remove = (_id) => {
    console.log(_id, "head");
    dispatch(REMOVE(_id));
  };

  // ----NEW----

  // const dlt = (_id) => {
  //   console.log(_id, "head");
  //   dispatch(DLT(_id));
  // };

  // ---NEW----//

  const total = () => {
    let price = 0;
    getdata.cart.map((ele, key) => {
      const data = ele.quentity;
      price += ele.price * data;
      console.log(data,"data")
    });

    setprice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation"
      id="navbar"
    >
      <div class="container">
        <Link class="navbar-brand font-weight-bold" to={{ pathname: "/" }}>
          E-Shop
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="main-navbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <Link class="nav-link" to={{ pathname: "/" }}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                About Us
              </Link>
            </li>

            <li class="nav-item dropdown dropdown-slide">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown4"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages.
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Blog Single</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">404 Page</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown dropdown-slide">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop.
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li>
                  <Link to={{ pathname: "/shop" }}>Shop</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/single-product" }}>
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "/checkout" }}>Checkout</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/cart" }}>Cart</Link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown dropdown-slide">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown5"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account.
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li>
                  <Link to={{ pathname: "/login" }}>Login Page</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/signup" }}>SignUp Page</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/forgot-password" }}>
                    Forgot Password
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
          <li class="list-inline-item">
            <Link href="#" class="search_toggle" id="search-icon">
              <i class="tf-ion-android-search"></i>
            </Link>
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <Link
              href="#"
              class="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              <i class="tf-ion-android-cart"> </i>
              <span style={{ color: "blue" }}>{getdata.cart.length}</span>
            </Link>
            <div class="dropdown-menu cart-dropdown">
            {
              getdata.cart.length ?  <div>
              {getdata.cart.map((item) => {
                console.log(item, "id");
                return (
                  <> 
                   <div class="media">
                      <NavLink to={`/single-product/${item._id}`}>
                        <img
                          class="media-object img-fluid mr-3"
                          src="assets/images/cart-2.jpg"
                          alt=""
                        />
                      </NavLink>
                      <div class="media-body">
                        <h6>{item.name}</h6>
                        <div class="cart-price">
                          {/* <span>{item.quentity}</span> */}
                          <span>
                            {item.price}$*{item.quentity}
                          </span>
                          <br></br>
                          <span>quentity:{item.quentity}</span>
                        </div>
                      </div>
                      <Link
                        href="#"
                        class="remove"
                        onClick={() => remove(item._id)}
                      >
                        <i class="tf-ion-close"></i>
                      </Link>

                      {/* <Link
                        href="#"
                        class="remove"
                        onClick={(e) => dlt(e._id)}
                      >
                        <i class="tf-ion-close"></i>
                      </Link> */}
                    </div>
             
                  </>
                );
              })}
              </div>:<div><h3>Cart is Empty</h3></div>

            }
           

              <div class="cart-summary">
                <span class="h6">Total</span>
                <span class="total-price h6">{price}$</span>
                <div class="text-center cart-buttons mt-3">
                  <Link
                    to="/cart"
                    class="btn btn-small btn-transparent btn-block"
                  >
                    View Cart
                  </Link>
                  <Link to="/checkout" class="btn btn-small btn-main btn-block">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <Link href="#">
              <i class="tf-ion-ios-person mr-3"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
