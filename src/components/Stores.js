import React, { useState } from 'react';

const Stores = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Sample store data (replace with your actual data)
  const storeData = [
    { id: 1, name: 'Store 1', location: 'Location 1' },
    { id: 2, name: 'Store 2', location: 'Location 2' },
    { id: 3, name: 'Store 3', location: 'Location 3' },
    { id: 4, name: 'Store 4', location: 'Location 4' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold mb-6">MyDuka Stores</h1>

      {/* Button to open the modal form */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
      >
        Add New Store
      </button>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 fixed inset-0"></div>
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Add New Store</h2>
            
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Display tables of stores */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-8">
        {/* Table 1 */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Stores</h2>
          <table className="min-w-full border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((store) => (
                <tr key={store.id}>
                  <td className="border p-2">{store.id}</td>
                  <td className="border p-2">{store.name}</td>
                  <td className="border p-2">{store.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Products</h2>
          <table className="min-w-full border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">ID</th>
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with actual product data */}
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">Product 1</td>
                <td className="border p-2">Category A</td>
                <td className="border p-2">$20.00</td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">Product 2</td>
                <td className="border p-2">Category B</td>
                <td className="border p-2">$25.00</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        {/* Table 3 */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Suppliers</h2>
          <table className="min-w-full border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Supplier ID</th>
                <th className="border p-2">Supplier Name</th>
                <th className="border p-2">Contact Email</th>
                <th className="border p-2">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with actual supplier data */}
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">Supplier A</td>
                <td className="border p-2">supplierA@example.com</td>
                <td className="border p-2">123-456-7890</td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">Supplier B</td>
                <td className="border p-2">supplierB@example.com</td>
                <td className="border p-2">987-654-3210</td>
              </tr>
             
            </tbody>
          </table>
        </div>

        {/* Table 4 */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Transactions</h2>
          <table className="min-w-full border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Transaction ID</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with  actual transaction data */}
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">2023-01-15</td>
                <td className="border p-2">$100.00</td>
                <td className="border p-2">Completed</td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">2023-02-20</td>
                <td className="border p-2">$76.50</td>
                <td className="border p-2">Pending</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stores;
