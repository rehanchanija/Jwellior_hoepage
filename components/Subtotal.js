const Subtotal = () => {
  return (
    <div className="border w-[32rem] p-4 rounded-xl font-poppins  ">
      <div className="flex justify-between ">
        <h1 className="text-lg ">Subtotal</h1>
        <p>MRP ₹ (Incl. of all taxes): ₹3,597.00</p>
      </div>
      <div className="flex justify-between ">
        <h1 className="text-lg ">Shipping</h1>
        <p className="text-sm text-[#949494]">Calculated at next step</p>
      </div>
      <div className="flex justify-between pt-1">
        <h1 className="text-lg ">Total</h1>
        <p>MRP ₹ (Incl. of all taxes): ₹3,597.00</p>
      </div>
    </div>
  );
};

export default Subtotal;
