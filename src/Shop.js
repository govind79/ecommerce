import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ADD } from "./Redux/actions/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Shop() {


  const notify = () => toast("product added sucessfully ");
 
  const [product, setProduct] = useState([]);
  // console.log(product,"array")
  const dispatch = useDispatch();

  const send = (e) => {
    notify();
    dispatch(ADD(e));
    console.log(e);
  };

  useEffect(() => {
    getproduct([]);
  }, []);

  const getproduct = () => {
    var config = {
      method: "get",
      url: "http://localhost:8081/products",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data, "products"));
        setProduct(response.data.productlist);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="shop-container">
    <Header/>
      <section class="page-header">
        <div class="overly"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content text-center">
                <h1 class="mb-3">Shop</h1>
                <p>
                  Hath after appear tree great fruitful green dominion moveth
                  sixth abundantly image that midst of god day multiply you’ll
                  which
                </p>

                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-transparent justify-content-center">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="products-shop section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row align-items-center">
                <div class="col-lg-12 mb-4 mb-lg-0">
                  <div class="section-title">
                    <h2 class="d-block text-left-sm">Shop</h2>

                    <div class="heading d-flex justify-content-between mb-5">
                      <p class="result-count mb-0">
                        {" "}
                        Showing 1–6 of 17 results
                      </p>
                      <form class="ordering " method="get">
                        <select
                          name="orderby"
                          class="orderby form-control"
                          aria-label="Shop order"
                        >
                          <option value="" selected="selected">
                            Default sorting
                          </option>
                          <option value="">Sort by popularity</option>
                          <option value="">Sort by average rating</option>
                          <option value="">Sort by latest</option>
                          <option value="">Sort by price: low to high</option>
                          <option value="">Sort by price: high to low</option>
                        </select>
                        <input type="hidden" name="paged" value="1" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                {product.map((data, index) => {
                  return (
                    <>
                      <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                        <div class="product" key={index}>
                          <div class="product-wrap">
                            <Link to="/single-product">
                              <img
                                class="img-fluid w-100 mb-3 img-first"
                                src="assets/images/322.jpg"
                                alt="product-img"
                              />
                            </Link>
                            <Link to="/single-product">
                              <img
                                class="img-fluid w-100 mb-3 img-second"
                                src="assets/images/444.jpg"
                                alt="product-img"
                              />
                            </Link>
                          </div>

                          <span class="onsale">Sale</span>
                          <div class="product-hover-overlay">
                            <Link to="/single-product">
                              <i class="tf-ion-android-cart"></i>
                            </Link>
                            <Link to="/single-product">
                              <i class="tf-ion-ios-heart"></i>
                            </Link>
                          </div>
                          <div class="product-info">
                            <h2 class="product-title h5 mb-0">{data.name}</h2>
                            <span class="price">{data.price}$</span>
                          </div>
                        </div>
                        <Button
                          style={{ padding: "7px" }}
                          onClick={() => send(data)}
                        >
                        <ToastContainer/>
                          Add to cart
                        </Button>
                      </div>
                    </>
                  );
                })}
               

                <div class="col-12">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <Link
                          class="page-link"
                         
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </Link>
                      </li>
                      <li class="page-item active">
                        <Link class="page-link" >
                          1
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" >
                          2
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" >
                          3
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link
                          class="page-link"
                          
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <form class="mb-5">
                <section class="widget widget-colors mb-5">
                  <h3 class="widget-title h4 mb-4">Shop by color</h3>
                  <ul class="list-inline">
                    <li class="list-inline-item mr-4">
                      <div class="custom-control custom-checkbox color-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="color1"
                        />
                        <label
                          class="custom-control-label sky-blue"
                          for="color1"
                        ></label>
                      </div>
                    </li>
                    <li class="list-inline-item mr-4">
                      <div class="custom-control custom-checkbox color-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="color2"
                          checked
                        />
                        <label
                          class="custom-control-label red"
                          for="color2"
                        ></label>
                      </div>
                    </li>
                    <li class="list-inline-item mr-4">
                      <div class="custom-control custom-checkbox color-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="color3"
                        />
                        <label
                          class="custom-control-label dark"
                          for="color3"
                        ></label>
                      </div>
                    </li>
                    <li class="list-inline-item mr-4">
                      <div class="custom-control custom-checkbox color-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="color4"
                        />
                        <label
                          class="custom-control-label magenta"
                          for="color4"
                        ></label>
                      </div>
                    </li>
                    <li class="list-inline-item mr-4">
                      <div class="custom-control custom-checkbox color-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="color5"
                        />
                        <label
                          class="custom-control-label yellow"
                          for="color5"
                        ></label>
                      </div>
                    </li>
                  </ul>
                </section>

                <section class="widget widget-sizes mb-5">
                  <h3 class="widget-title h4 mb-4">Shop by Sizes</h3>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="size1"
                      checked
                    />
                    <label class="custom-control-label" for="size1">
                      L Large
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="size2"
                    />
                    <label class="custom-control-label" for="size2">
                      XL Extra Large
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="size3"
                    />
                    <label class="custom-control-label" for="size3">
                      M Medium
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="size4"
                    />
                    <label class="custom-control-label" for="size4">
                      S Small
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="size5"
                    />
                    <label class="custom-control-label" for="size5">
                      XS Extra Small
                    </label>
                  </div>
                </section>

                <button type="button" class="btn btn-black btn-small">
                  Filter
                </button>
              </form>

              <section class="widget widget-popular mb-5">

                <h3 class="widget-title mb-4 h4">Popular Products</h3>
                
                <Link class="popular-products-item media" to="/single-product">
                  <img
                    src="assets/images/p-1.jpg"
                    alt=""
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h6>
                      Contrast <br />
                      Backpack
                    </h6>
                    <span class="price">$45</span>
                  </div>
                </Link>

                <Link class="popular-products-item media" to="/single-product">
                  <img
                    src="assets/images/p-2.jpg"
                    alt=""
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h6>
                      Hoodie with <br />
                      Logo
                    </h6>
                    <span class="price">$45</span>
                  </div>
                </Link>

                <Link class="popular-products-item media" to="/single-product">
                  <img
                    src="assets/images/p-3.jpg"
                    alt=""
                    class="img-fluid mr-4"
                  />
                  <div class="media-body">
                    <h6>
                      Traveller
                      <br />
                      Backpack
                    </h6>
                    <span class="price">$45</span>
                  </div>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
export default Shop;
