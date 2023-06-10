import React from 'react';

const PaymentPage = () => {
  const selectedItems = [];

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform payment logic here
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div className="summary-container">
        <h3>Order Summary</h3>
        {selectedItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
        <p>Total: ${selectedItems.reduce((acc, item) => acc + item.price, 0)}</p>
      </div>
      <form onSubmit={handlePayment}>
        {/* Add payment form fields here */}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
