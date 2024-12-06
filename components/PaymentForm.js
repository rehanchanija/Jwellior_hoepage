import { Button, Radio } from "antd";
import CartDetails from "./CartDetails";
import Subtotal from "./Subtotal";

const PaymentForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex">
      <div>
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
          <h1>Payment Method</h1>

          <Form.Item label={null}>
            <Radio>online payment </Radio>
          </Form.Item>
          <Form.Item label={null}>
            <Radio>Cash on Delivery </Radio>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className="bg-[#065934]">
              Continue to Payment
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <CartDetails />
        <Subtotal />
      </div>
    </div>
  );
};

export default PaymentForm;
