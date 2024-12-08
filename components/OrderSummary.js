import { Button, Image } from "antd";

const OrderSummary = () => {
  return (
    <div className=" px-8 font-poppins">
      <h1 className="text-[#949494] pb-2">Order Summary</h1>
      <div className="space-y-2">
        <div className="flex justify-between ">
          <h1>3 X ITEMS</h1>
          <span>₹ 999</span>
        </div>
        <div className="flex justify-between ">
          <h1>PRICE</h1>
          <span>₹ 999</span>
        </div>
        <div className="flex justify-between ">
          <h1>GST</h1>
          <span>₹ 999</span>
        </div>
        <div className="flex justify-between ">
          <h1>SUBTOTAL</h1>
          <span>₹ 999</span>
        </div>
        <div className="flex justify-between ">
          <h1>SHIPPING</h1>
          <span>₹ 999</span>
        </div>
        <div className="flex justify-between text-xl text-[#065934] font-semibold">
          <h1 className="">TOTAL CASH</h1>
          <span>₹ 999</span>
        </div>
        <Button
          className="w-full text-xl bg-[#065934] font-semibold py-6"
          type="primary"
        >
          Buy Now
        </Button>
      </div>
      <div>
        <span className="flex space-x-2 text-[#949494]">
          <Image src="/image/clock.png" />
          <h3>Estimated Delivery Time - 4-7 days</h3>
        </span>
        <span className="space-y-2 w-[20rem]">
          <h2 className="pt-2 px-2">100% Secure Payment</h2>
          <Image src="/image/payment.png" width={312} />
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
