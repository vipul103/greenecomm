import React from "react";
import { useSelector } from "react-redux";
// internal
import OrderDetails from "./order-details";
import PaymentCardElement from "@components/order/pay-card-element";
import OrderSingleCartItem from "./order-single-cart-item";

const OrderArea = ({
  stripe,
  error,
  register,
  errors,
  discountAmount,
  shippingCost,
  cartTotal,
  handleShippingCost,
  setClientSecret,
  isCheckoutSubmit,
}) => {
  const { cart_products } = useSelector((state) => state.cart);
  return (
    <div className="your-order mb-30 ">
      <h3>Your order</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart_products?.map((item, i) => (
              <OrderSingleCartItem
                key={i}
                title={item.title}
                quantity={item.quantity}
                price={item.originalPrice}
              />
            ))}
          </tbody>
          <tfoot>
            <OrderDetails
              register={register}
              errors={errors}
              discountAmount={discountAmount}
              cartTotal={cartTotal}
              shippingCost={shippingCost}
              handleShippingCost={handleShippingCost}
              setClientSecret={setClientSecret}
            />
          </tfoot>
        </table>
      </div>

      <div className="payment-method faq__wrapper tp-accordion">
  <div className="accordion" id="checkoutAccordion">
    {/* Card Payment Option */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="checkoutOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bankOne"
          aria-expanded="true"
          aria-controls="bankOne"
        >
          Credit/Debit Card
          <span className="accordion-btn"></span>
        </button>
      </h2>
      <div
        id="bankOne"
        className="accordion-collapse collapse show"
        aria-labelledby="checkoutOne"
        data-bs-parent="#checkoutAccordion"
      >
        <div className="accordion-body">
          <PaymentCardElement
            stripe={stripe}
            cardError={error}
            cart_products={cart_products}
            isCheckoutSubmit={isCheckoutSubmit}
          />
        </div>
      </div>
    </div>

    {/* COD Option */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="checkoutTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#codOption"
          aria-expanded="false"
          aria-controls="codOption"
        >
          Cash on Delivery
          <span className="accordion-btn"></span>
        </button>
      </h2>
      <div
        id="codOption"
        className="accordion-collapse collapse"
        aria-labelledby="checkoutTwo"
        data-bs-parent="#checkoutAccordion"
      >
        <div className="accordion-body">
  <p>Pay with cash when your order is delivered to your address.</p>
  <button
    type="button"
    className="tp-btn w-100 mt-3"
    onClick={() => handleCODOrder()}
  >
    Place Order (COD)
  </button>
</div>

      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default OrderArea;
