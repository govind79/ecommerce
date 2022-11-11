import { useDispatch } from "react-redux";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ADD, REMOVE_ITEM} from "./Redux/actions/actions";
import { REMOVE } from "./Redux/actions/actions";
import Header from "./Header";
import Footer from "./Footer";
function Cart() {
  const history = useNavigate()
  const dispatch = useDispatch();
  const [price, setprice] = useState(0);
  console.log(price,"total pricesss")
  const getcartdata = useSelector((state) => state.cartreducer);

  const id = useParams();

  const total = () => {
    let price = 0;
    getcartdata.cart.map((ele, key) => {
      const data = ele.quentity;
      price += ele.price * data;
    });

    setprice(price);
  };

  // const total = () =>{
  //   let price = 0;
  //   getcartdata.map((ele,key)=>{
  //     price = ele.price+price;

  //   });
  //   setprice(price);
  //    console.log(price);

  // }

  useEffect(() => {
    total();
  }, [total]);

  const sendr = (e) => {
    dispatch(ADD(e));
    console.log(e, "test");
  };
  const deleteitem = (item) => {
    dispatch(REMOVE_ITEM(item));
    console.log(item,"cart");
  };

  const remove = (_id) => {
    console.log(_id, "head");
    dispatch(REMOVE(_id));
    history.push('/shop')
  };



  return (
    <div className="checkout-container">
    <Header/>
      <section class="page-header">
        <div class="overly"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content text-center">
                <h1 class="mb-3">Cart</h1>
                Hath after appear tree great fruitful green dominion moveth
                sixth abundantly image that midst of god day multiply you’ll
                which
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-transparent justify-content-center">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cart shopping page-wrapper">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="product-list">
                <form class="cart-form">
                  <table
                    class="table shop_table shop_table_responsive cart"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th class="product-thumbnail"> </th>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Total</th>
                        <th class="product-remove"> </th>
                      </tr>
                    </thead>

                    <tbody>
                      {getcartdata.cart.map((item) => {
                        console.log(item,"price full")
                        return (
                          <>
                            {" "}
                            <tr class="cart_item">
                              <td
                                class="product-thumbnail"
                                data-title="Thumbnail"
                              >
                                <Link to={`/single-product/${item._id}`}>
                                  <img
                                    src="assets/images/cart-2.jpg"
                                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                    alt=""
                                  />
                                </Link>
                              </td>

                              <td class="product-name" data-title="Product">
                                <Link to="#">{item.name}</Link>
                              </td>

                              <td class="product-price" data-title="Price">
                                <span class="amount">
                                  <span class="currencySymbol">
                                    <pre wp-pre-tag-3=""></pre>
                                  </span>
                                  {item.price}$
                                </span>
                              </td>
                              <td
                                class="product-quantity"
                                data-title="Quantity"
                              >
                                <div class="quantity">
                                  <label class="sr-only">Quantity</label>
                                  {/* <input type="number" id="qty" class="input-text qty text" step="1" min="0" max="9" title="Qty" size="4"  /> */}

                                  <div style={{"cursor":"pointer"}} variant="info" className="mr-3">
                                    <span onClick={()=>deleteitem(item)}>-</span>
                                  </div>
                                  <div variant="info" className="mr-3">
                                    <span>{item.quentity}</span>
                                  </div>

                                  <div style={{"cursor":"pointer"}} variant="info" className="mr-3">
                                    {" "}
                                    <span onClick={ ()=>sendr(item)}>+</span>
                                  </div>
                                </div>
                              </td>
                              <td class="product-subtotal" data-title="Total">
                                <span class="amount">
                                  <span class="currencySymbol">
                                    <pre wp-pre-tag-3=""></pre>
                                  </span>
                                  {item.price * item.quentity}$
                                  {/* {price}$ */}
                                </span>
                              </td>
                              <td class="product-remove" data-title="Remove">
                                {/* <Link
                                  to="#"
                                  class="remove"
                                  aria-label="Remove this item"
                                  data-product_id="30"
                                  data-product_sku=""
                                  onClick={() => remove(item._id)}
                                >
                                   <i class="tf-ion-close"></i>
                                </Link> */}
                                
                                
                              </td>
                            </tr>
                          </>
                        );
                      })}

                      <tr>
                        <td colspan="6" class="actions">
                          <div class="coupon">
                            <input
                              type="text"
                              name="coupon_code"
                              class="input-text form-control"
                              id="coupon_code"
                              value=""
                              placeholder="Coupon code"
                            />
                            <button
                              type="button"
                              class="btn btn-black btn-small"
                              name="apply_coupon"
                              value="Apply coupon"
                            >
                              Apply coupon
                            </button>
                            <span class="float-right mt-3 mt-lg-0">
                              <button
                                type="button"
                                class="btn btn-dark btn-small"
                                name="update_cart"
                                value="Update cart"
                                disabled=""
                              >
                                Update cart
                              </button>
                            </span>
                          </div>
                          <input
                            type="hidden"
                            id="woocommerce-cart-nonce"
                            name="woocommerce-cart-nonce"
                            value="27da9ce3e8"
                          />
                          <input
                            type="hidden"
                            name="_wp_http_referer"
                            value="/cart/"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-lg-4">
              <div class="cart-info card p-4 mt-4">
                <h4 class="mb-4">Cart totals</h4>
                <ul class="list-unstyled mb-4">
                  <li class="d-flex justify-content-between pb-2 mb-3">
                    <h5>Subtotal</h5>
                    <span>{price}$</span>
                  </li>
                  <li class="d-flex justify-content-between pb-2 mb-3">
                    <h5>Shipping</h5>
                    <span>Free</span>
                  </li>
                  <li class="d-flex justify-content-between pb-2">
                    <h5>Total</h5>
                    <span>{price}$</span>
                  </li>
                </ul>
                <Link to="/checkout" class="btn btn-main btn-small">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
export default Cart;
