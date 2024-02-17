import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../util/cartSlice";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  console.log(CartItems.length);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {CartItems.length === 0 ? (
        <div>
          <h1 className="font-bold text-2xl my-3">Cart Is Empty.. Add Some Item</h1>
        </div>
      ) : (
        
        <div className="w-6/12 mx-auto">
          <CartItem item={CartItems} />
          <button
        className="m-2 p-2 bg-black text-white rounded-lg font-semibold"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
        </div>
      )}
     
    </div>
  );
};

export default Cart;
