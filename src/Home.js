
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { REMOVE } from "./Redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADD } from "./Redux/actions/actions";
import Header from "./Header";
import Footer from "./Footer";




function Home() {
    const getdata = useSelector((state) => state.cartreducer.cart);
    console.log(getdata,"datta")


    
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const sendr = (e) => {
        dispatch(ADD(e));
        toast();
        // console.log(e, "test");
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
        <div className="home-container">
        <Header/>
            <div className="main-slider slider slick-initialized slick-slider">
                    <div  class="slider-item" style={{backgroundImage:"url('assets/images/slideshow1-2.jpg')", backgroundPosition:"50%",backgroundRepeat:"no-repeat"}}>
                        <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                            <div class="slider-caption">
                                <span class="lead">Trendy dress</span>
                                <h1 class="mt-2 mb-5"><span class="text-color">Winter </span>Collection</h1>
                                <Link to="/shop" class="btn btn-main">Shop Now</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            <section class="category section pt-3 pb-0">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="cat-item mb-4 mb-lg-0">
                    <img src="assets/images/cat-1.jpg" alt="" class="img-fluid" />
                    <div class="item-info">
                        <p class="mb-0">Stylish Leather watch</p>
                        <h4 class="mb-4">up to <strong>50% </strong>off</h4>
                        <Link to="/shop" class="read-more">Shop now</Link>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="cat-item mb-4 mb-lg-0">
                    <img src="assets/images/cat-2.jpg" alt="" class="img-fluid" />
                    <div class="item-info">
                        <p class="mb-0">Ladies hand bag</p>
                        <h4 class="mb-4">up to <strong>40% </strong>off</h4>
                        <Link to="/shop" class="read-more">Shop now</Link>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="cat-item">
                    <img src="assets/images/cat-3.jpg" alt="" class="img-fluid" />
                    <div class="item-info">
                        <p class="mb-0">Trendy shoe</p>
                        <h4 class="mb-4">up to <strong>50% </strong>off</h4>
                        <Link to="/shop" class="read-more">Shop now</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section class="section products-main">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="title text-center">
                                <h2>New arrivals</h2>
                                <p>The best Online sales to shop these weekend</p>
                            </div>
                        </div>
                    </div>
            
            
                <div class="row">

                {
                    product.map((element,index)=>{
                        console.log(element._id,"home js")
                        return<> <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" >
                        <div class="product">
                        <div class="product-wrap">
                        <NavLink to={`/single-product/${element._id}`}><img class="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></NavLink>
                            <Link to="/single-product"><img class="img-fluid w-100 mb-3 img-second" src="assets/images/444.jpg" alt="product-img" /></Link>
                        </div>
            
                        <span class="onsale">Sale</span>
                        <div class="product-hover-overlay">
                            <Link to="#" onClick={ ()=>sendr(element)}><span   
                            class="tf-ion-android-cart"></span>  <ToastContainer/> </Link>
                           
                            <Link to="#"><i class="tf-ion-ios-heart"></i></Link>
                            </div>
            
                        <div class="product-info">
                            <h2 class="product-title h5 mb-0"><Link to="#">{element.name}</Link></h2>
                            <span class="price">
                               {element.price}$
                            </span>
                        </div>
                    </div>
                    </div>

                        </>

                    })

                }
                
                </div>
                </div>
            </section>
            
            <section class="ads section">
            <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-6 offset-lg-6">
                    <div class="ads-content">
                    <span class="h5 deal">Deal of the day 50% Off</span>
                    <h2 class="mt-3 text-white">Trendy Suit</h2>
                    <p class="text-md mt-3 text-white">Hurry up! Limited time offer.Grab ot now!</p>
                   
                        <div id="simple-timer" class="syotimer mb-5"></div>
                    <Link to="/shop" class="btn btn-main"><i class="ti-bag mr-2"></i>Shop Now </Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section class="section products-list">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-12">
                    <img src="assets/images/adsv.jpg" alt="Product big thumb"  class="img-fluid w-100" />
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="widget-featured-entries mt-5 mt-lg-0">
                    <h4 class="mb-4 pb-3">Best selllers</h4>
                            <div class="media mb-3">
                                <Link class="featured-entry-thumb" to="/single-product">
                                <img src="assets/images/p-1.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Keds - Kickstart Pom Pom</Link></h6>
                                <p class="featured-entry-meta">$42.99</p>
                            </div>
                            </div>
                            <div class="media mb-3">
                                <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-2.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Nike - Brasilia Medium Backpack</Link></h6>
                                <p class="featured-entry-meta">$27.99</p>
                            </div>
                            </div>
                            <div class="media mb-3">
                            <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-3.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Guess - GU7295</Link></h6>
                                <p>$38.00</p>
                            </div>
                            </div>
                            <div class="media mb-3">
                                <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-4.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Adidas Originals Cap</Link></h6>
                                <p class="featured-entry-meta">$35.00</p>
                            </div>
                            </div>
                            <div class="media">
                                <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-5.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Big Star Flip Tops</Link></h6>
                                <p class="featured-entry-meta">$10.60</p>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="widget-featured-entries mt-5 mt-lg-0">
                    <h4 class="mb-4 pb-3">New Arrivals</h4>
                            <div class="media mb-3">
                                <Link class="featured-entry-thumb" to="/single-product">
                                <img src="assets/images/p-7.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Keds - Kickstart Pom Pom</Link></h6>
                                <p class="featured-entry-meta">$42.99</p>
                            </div>
                            </div>
                            <div class="media mb-3">
                                <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-8.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Nike - Brasilia Medium Backpack</Link></h6>
                                <p class="featured-entry-meta">$27.99</p>
                            </div>
                            </div>
                            <div class="media mb-3">
                            <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-1.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Guess - GU7295</Link></h6>
                                <p>$38.00</p>
                            </div>
                            </div>
                            <div class="media mb-3">
                                <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-2.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Adidas Originals Cap</Link></h6>
                                <p class="featured-entry-meta">$35.00</p>
                            </div>
                            </div>
                            <div class="media">
                                <Link class="featured-entry-thumb" to="#">
                                <img src="assets/images/p-4.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                            </Link>
                            <div class="media-body">
                                <h6 class="featured-entry-title mb-0"><Link to="#">Big Star Flip Tops</Link></h6>
                                <p class="featured-entry-meta">$10.60</p>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section class="features border-top">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="feature-block">
                    <i class="tf-ion-android-bicycle"></i>
                    <div class="content">
                        <h5>Free Shipping</h5>
                        <p>On all order over $39.00</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="feature-block">
                    <i class="tf-wallet"></i>
                    <div class="content">
                        <h5>30 Days Return</h5>
                        <p>Money back Guarantee</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="feature-block">
                    <i class="tf-key"></i>
                    <div class="content">
                        <h5>Secure Checkout</h5>
                        <p>100% Protected by paypal</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="feature-block">
                    <i class="tf-clock"></i>
                    <div class="content">
                        <h5>24/7 Support</h5>
                        <p>All time customer support </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Home;