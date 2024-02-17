import { ImageApi } from "../util/constant";

const CartItem = (items) =>{
  return (
    <div>
      {items.item.map((item) => (
        <div
          key={item.card?.info?.id}
          className="border-b border-gray-800 my-3 flex justify-between "
        >
          <div className="text-start my-3">
            <h5 className="font-semibold">{item.card?.info?.name}</h5>
            <h5 className="my-2">&#8377;{item.card?.info?.price / 100}</h5>
            <p className="font-light text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="relative">
            <img
              className="w-20 mt-2"
              src={ImageApi + item.card?.info?.imageId}
              alt="Image Not Available"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;