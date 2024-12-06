"use client";
import { Button, Image } from "antd";
import { useState } from "react";

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="font-poppins ">
      <h1 className="text-center text-2xl ">Shopping cart</h1>
      <div className="flex justify-between  w-[36rem] font-poppins ">
        <div className="flex ">
          <Image src="/image/cart.png" height={162} width={162} alt="" />
          <div className="pt-3 px-12">
            <h3>Aloe Vera</h3>
            <p>Body wash Lavender</p>
            <span className="text-xl text-[#AABB18]"> ₹ 500 </span>
            <span>₹ 999</span>
            <span className=" text-[#AABB18]">60 % off </span>
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl pt-6 text-[#065934]">₹ 500</h1>
          <div>
            <Button onClick={decrement} className="px-4 py-2 rounded shadow ">
              -
            </Button>
            <span>{count}</span>
            <Button
              onClick={increment}
              className="px-4 py-2   rounded shadow  "
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
