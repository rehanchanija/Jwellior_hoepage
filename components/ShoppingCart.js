"use client";
import { Button, Image } from "antd";
import { useState } from "react";
import OrderSummary from "./OrderSummary";

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="font-poppins ">
      <h1 className="text-center text-2xl ">Shopping cart</h1>
      <div className="flex items-center">
        <div className="flex   items-center space-x-6   w-[52em]   ">
          <div className="flex ">
            <Image src="/image/cart.png" height={162} width={162} alt="" />
            <div className="pt-3 px-12  ">
              <h3 className="text-lg">Aloe Vera</h3>
              <p className="text-lg">Body wash Lavender</p>
              <p className="pt-1">
                <span className="text-2xl text-[#AABB18] ">₹ 500</span>
                <span className="px-2 text-[#949494] text-lg">₹ 999</span>
                <span className=" text-[#AABB18] font-medium ">60 % off </span>
              </p>
              <Button className="pt-4  font-medium text-[#065934] border-none">
                <Image src="/image/removeicon.png" className="" />
                Remove
              </Button>
            </div>
          </div>
          <div className=" flex  ">
            <div>
              <Button onClick={decrement} className="px-4 py-4 ">
                -
              </Button>
              <span className="p-2">{count}</span>
              <Button onClick={increment} className="px-4 py-4    ">
                +
              </Button>
            </div>
            <h1 className="text-2xl pl-8 text-[#065934]">₹ 500</h1>
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default ShoppingCart;
