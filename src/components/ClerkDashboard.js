import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ClerkDashboard = () => {
  const [formType, setFormType] = useState('record'); // 'record' or 'supply'
  const [formData, setFormData] = useState({
    itemName: '',
    quantityReceived: 0,
    paymentStatus: 'Not Paid',
    itemsInStock: 0,
    itemsSpoilt: 0,
    buyingPrice: 0,
    sellingPrice: 0,
    quantity: 0,
    urgency: 'Low',
  });

  const [items, setItems] = useState([
    // Sample data
    { id: 1, itemName: 'Product 1', quantityReceived: 10, paymentStatus: 'Not Paid', itemsInStock: 50, itemsSpoilt: 2, buyingPrice: '$20', sellingPrice: '$30' },
    // ... Add more items as needed
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to submit item details or supply request based on formType
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      itemName: '',
      quantityReceived: 0,
      paymentStatus: 'Not Paid',
      itemsInStock: 0,
      itemsSpoilt: 0,
      buyingPrice: 0,
      sellingPrice: 0,
      quantity: 0,
      urgency: 'Low',
    });
  };

  // State for chart data
  const [chartData, setChartData] = useState([]);

  // Function to update chart data
  const updateChartData = () => {
    const receivedItems = items.reduce((total, item) => total + item.quantityReceived, 0);
    const paidItems = items.filter((item) => item.paymentStatus === 'Paid').length;
    const inStockItems = items.reduce((total, item) => total + item.itemsInStock, 0);
    const spoiltItems = items.reduce((total, item) => total + item.itemsSpoilt, 0);

    const data = [
      { name: 'Received', value: receivedItems },
      { name: 'Paid', value: paidItems },
      { name: 'In Stock', value: inStockItems },
      { name: 'Spoilt', value: spoiltItems },
    ];

    setChartData(data);
  };

  // Update chart data on component mount and whenever items change
  useEffect(() => {
    updateChartData();
  }, [items]);


  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold mb-6">Clerk Dashboard</h1>

      {/* Form Type Selector */}
      <div className="mb-4">
        <label className="block mb-2">Select Action:</label>
        <select
          name="formType"
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
          className="border p-2"
        >
          <option value="record">Record Details</option>
          <option value="supply">Request Supplies</option>
        </select>
      </div>

      {/* Combined Form for Recording Details and Supply Request */}
      <form onSubmit={handleSubmit} className="mb-8">
        {/* Common form fields for both actions */}
        <label className="block mb-2">Item Name:</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleInputChange}
          className="border p-2 mb-4"
        />

        {/* Additional form fields for recording details */}
        {formType === 'record' && (
          <>
            <label className="block mb-2">Quantity Received:</label>
            <input
              type="number"
              name="quantityReceived"
              value={formData.quantityReceived}
              onChange={handleInputChange}
              className="border p-2 mb-4"
            />

            <label className="block mb-2">Payment Status:</label>
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleInputChange}
              className="border p-2 mb-4"
            >
              <option value="Not Paid">Not Paid</option>
              <option value="Paid">Paid</option>
            </select>

            {/* Add more form fields for other details as needed */}
          </>
        )}

        {/* Additional form fields for supply request */}
        {formType === 'supply' && (
          <>
            <label className="block mb-2">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="border p-2 mb-4"
            />

            <label className="block mb-2">Urgency:</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              className="border p-2 mb-4"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            {/* Add more form fields for other supply request details as needed */}
          </>
        )}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">
          {formType === 'record' ? 'Record Details' : 'Request Supplies'}
        </button>
      </form>

        {/* Pie Chart */}
      <div className="mb-4 mt-2 flex justify-end">
        <ResponsiveContainer width={500} height={400}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Beautiful Table */}
      {/* ... (table rendering code remains the same) */}

      {/* Pagination */}
      {/* ... (pagination code remains the same) */}
    </div>
  );
};

export default ClerkDashboard;
