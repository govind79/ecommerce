const INIT_STATE = {
  cart: [],
};
export const cartreducer = (state = INIT_STATE, action) => {
  console.log(action.payload, "jkh",state.cart);
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (ItemIndex >= 0) {
        state.cart[ItemIndex].quentity += 1;
      } else {
        const temp = { ...action.payload, quentity:1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }

    //  return   {
    //     ...state,
    //     cart:[ ...state.cart,action.payload]

    //     }
    
    case "REMOVE_CART":
      const data = state.cart.filter((ele) => ele._id !== action.payload);
      console.log(data, "reducer");
      return {
        ...state,
        cart: data,
      };


      //   new ====//

      // case "RMV_CART":
      //   const datas = state.cart.filter((ele) => ele._id !== action.payload);

      //   return {
      //     ...state,
      //     cart: datas,
      //   };

      // ----new===//

    // state.length = state.length? state.length-1:[]
    // const data = state.cart.filter((item)=>item._id !== action.state)

    // console.log(data,"remain")
    // return[...state]

    // case "EMPTY_CART":
    //     console.log(action,"EMPTY_CART");
    //     state=[]
    //     return[...state]

    case "REMOVE_ONE":
      const ItemIndex_dec = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cart[ItemIndex_dec].quentity >= 0) {
        const deleteitem = (state.cart[ItemIndex_dec].quentity -= 1);
        console.log([...state.cart, deleteitem],"delete itam");
        return {
          ...state,
          cart: [...state.cart],
        };
      } else if (state.cart[ItemIndex_dec].quentity === 1) {
        const data = state.cart.filter((ele) => ele._id !== action.payload);
        console.log(data, "reducer");
        return {
          ...state,
          cart: data,
        };
      }

    default:
      return state;
  }


  // ==========new =============//



  // =============new///////////
};
