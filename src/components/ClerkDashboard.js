import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ClerkDashboard = () => {
  // State for clerk-specific data
  const [receivedItems, setReceivedItems] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('Not Paid');
  const [itemsInStock, setItemsInStock] = useState(0);
  const [itemsSpoiled, setItemsSpoiled] = useState(0);
  const [buyingPrice, setBuyingPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [buyingPriceInput, setBuyingPriceInput] = useState('');
  const [sellingPriceInput, setSellingPriceInput] = useState('');

  // Function to record number of items received
  const recordReceivedItems = () => {
    setReceivedItems(receivedItems + 1);
  };

  // Function to record payment status
  const recordPaymentStatus = () => {
    setPaymentStatus(paymentStatus === 'Paid' ? 'Not Paid' : 'Paid');
  };

  // Function to record items in stock
  const recordItemsInStock = () => {
    setItemsInStock(itemsInStock + 1);
  };

  // Function to record items spoiled
  const recordItemsSpoiled = () => {
    setItemsSpoiled(itemsSpoiled + 1);
  };

  // Function to record buying and selling prices
  const recordPrices = () => {
    // Display the values in an alert for simplicity
    alert(`Buying Price: ${buyingPriceInput}, Selling Price: ${sellingPriceInput}`);
    // Update the state with the recorded values
    setBuyingPrice(buyingPriceInput);
    setSellingPrice(sellingPriceInput);
    // Clear the input fields
    setBuyingPriceInput('');
    setSellingPriceInput('');
  };

  // Function to handle input change for buying price
  const handleBuyingPriceChange = (event) => {
    setBuyingPriceInput(event.target.value);
  };

  // Function to handle input change for selling price
  const handleSellingPriceChange = (event) => {
    setSellingPriceInput(event.target.value);
  };

  // Function to request more product supply
  const requestProductSupply = () => {
    // Implement your logic to handle product supply request
    alert('Request for Product Supply initiated');
  };

  // Function to increment or decrement the count
  const updateCount = (countType, operation) => {
    switch (countType) {
      case 'receivedItems':
        setReceivedItems((prevCount) => (operation === 'increment' ? prevCount + 1 : Math.max(prevCount - 1, 0)));
        break;
      case 'itemsInStock':
        setItemsInStock((prevCount) => (operation === 'increment' ? prevCount + 1 : Math.max(prevCount - 1, 0)));
        break;
      case 'itemsSpoiled':
        setItemsSpoiled((prevCount) => (operation === 'increment' ? prevCount + 1 : Math.max(prevCount - 1, 0)));
        break;
      default:
        break;
    }
  };
  
  

  return (
    <div className='pt-[25px] px-[25px] bg-[#fafafa]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>
          Clerk Dashboard
        </h1>
      </div>

      {/* Clerk-specific activities */}
      <div className='grid grid-cols-2 gap-[30px] mt-[25px] pb-[15px]'>
        {/* Clerk Dashboard Cards */}
        <div
          className='h-[150px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
          onClick={recordReceivedItems}
        >
          <div>
            <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Number of Items Received</h2>
            <div className='flex items-center'>
              <button onClick={() => updateCount('receivedItems', 'decrement')}>-</button>
              <p>{receivedItems} items received</p>
              <button onClick={() => updateCount('receivedItems', 'increment')}>+</button>
            </div>
          </div>
          <FaEllipsisV fontSize={28} color='blue' />
        </div>

        <div
          className='h-[150px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
        >
          <div>
            <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Payment Status</h2>
            <p>{paymentStatus}</p>
          </div>
          <FaEllipsisV fontSize={28} color='purple' />
        </div>

        <div
          className='h-[150px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
          onClick={recordItemsInStock}
        >
          <div>
            <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Items in Stock</h2>
            <div className='flex items-center'>
              <button onClick={() => updateCount('itemsInStock', 'decrement')}>-</button>
              <p>{itemsInStock} items in stock</p>
              <button onClick={() => updateCount('itemsInStock', 'increment')}>+</button>
            </div>
          </div>
          <FaEllipsisV fontSize={28} color='orange' />
        </div>

        <div
          className='h-[150px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
        >
          <div>
            <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Items Spoiled</h2>
            <div className='flex items-center'>
              <button onClick={() => updateCount('itemsSpoiled', 'decrement')}>-</button>
              <p>{itemsSpoiled} items spoiled</p>
              <button onClick={() => updateCount('itemsSpoiled', 'increment')}>+</button>
            </div>
          </div>
          <FaEllipsisV fontSize={28} color='green' />
        </div>

        <div
          className='h-[150px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
          onClick={recordPrices}
        >
          <div>
            <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Buying and Selling Price</h2>
            {/* Form to input buying and selling prices */}
            <form onSubmit={(e) => { e.preventDefault(); recordPrices(); }}>
              <label htmlFor='buyingPrice'>Buying Price:</label>
              <input
                type='text'
                id='buyingPrice'
                value={buyingPriceInput}
                onChange={handleBuyingPriceChange}
              />
              <br />
              <label htmlFor='sellingPrice'>Selling Price:</label>
              <input
                type='text'
                id='sellingPrice'
                value={sellingPriceInput}
                onChange={handleSellingPriceChange}
              />
              <br />
              <button type='submit'>Record Prices</button>
            </form>
          </div>
          <FaEllipsisV fontSize={28} color='red' />
        </div>

        <div
          className='h-[150px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
          onClick={requestProductSupply}
        >
          <div>
            <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Request for Product Supply</h2>
            <p>Click to request</p>
          </div>
          <FaEllipsisV fontSize={28} color='yellow' />
        </div>
      </div>
    </div>
  );
};

export default ClerkDashboard;
