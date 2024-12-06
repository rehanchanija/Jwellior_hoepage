const BillingForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-between font-poppins ">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          font: "Poppins",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Contact"
          name="contact"
          rules={[
            {
              type: "number",
              required: true,
              message: " Enter Your Number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: " Enter Your Email !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Subscribe to get latest updates on offers & news.</Checkbox>
        </Form.Item>
        Shipping Address
        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              required: true,
              message: " Enter Your country !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div>
          <Form.Item
            label="First name"
            name="first name"
            rules={[
              {
                required: true,
                message: " Enter Your first name !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="last name"
            rules={[
              {
                required: true,
                message: " Enter Your last nmae !",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          label="Street Address"
          name="street address"
          rules={[
            {
              required: true,
              message: " Enter Your addres !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="flex">
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: " Enter Your city !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="State/Province"
            name="state"
            rules={[
              {
                required: true,
                message: " Enter Your State/Province !",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[
              {
                required: true,
                message: " Enter Your pincode !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile No"
            name="mobile number  "
            rules={[
              {
                required: true,
                message: " Enter your mobile number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className="bg-[#065934]">
            Continue to shipping
          </Button>
        </Form.Item>
      </Form>
      {/* <div>
        <CartDetails />
        <Subtotal />
      </div> */}
    </div>
  );
};

export default BillingForm;
