import { Image } from "antd";

const CartDetails = () => {
  return (
    <div className="flex justify-between  w-[32rem] font-poppins ">
      <div className="flex ">
        <Image src="/image/cart.png" height={118} width={118} alt="" />
        <div className="pt-3 text-md px-12">
          <h3>Aloe Vera</h3>
          <p>Body wash Lavender</p>
          <span>₹ 500 3 x time</span>
        </div>
      </div>

      <div>
        <h1 className="text-2xl pt-6 text-[#065934]">₹ 500</h1>
      </div>
    </div>
  );
};

export default CartDetails;
