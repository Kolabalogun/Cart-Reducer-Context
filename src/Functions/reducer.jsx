const reducer = (state, action) => {
  if (action.type === "CLEARCART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cc) => cc.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let tempcart = state.cart.map((cc) => {
      if (cc.id === action.payload) {
        return { ...cc, amount: cc.amount + 1 };
      }
      return cc;
    });
    return { ...state, cart: tempcart };
  }
  if (action.type === "DECREASE") {
    let tempcart = state.cart.map((cc) => {
      if (cc.id === action.payload) {
        return { ...cc, amount: cc.amount - 1 };
      }
      return cc;
    });
    return { ...state, cart: tempcart };
  }
  if (action.type === "GETTOTAL") {
    const { total, navAmount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemtotal = price * amount;

        cartTotal.total += itemtotal;
        cartTotal.navAmount += amount;
        console.log(price, amount);
        return cartTotal;
      },
      {
        total: 0,
        navAmount: 0,
      }
    );

    return { ...state, total, navAmount };
  }

  return state;
};

export default reducer;
