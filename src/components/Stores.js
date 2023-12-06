import React, { useState } from 'react';

const Stores = () => {
  const [storeData, setStoreData] = useState([
    { id: 1, name: 'Store 1', location: 'Location 1' },
    { id: 2, name: 'Store 2', location: 'Location 2' },
    { id: 3, name: 'Store 3', location: 'Location 3' },
    { id: 4, name: 'Store 4', location: 'Location 4' },
    { id: 5, name: 'Store 4', location: 'Location 4' },
    { id: 6, name: 'Store 5', location: 'Location 5' },
    { id: 7, name: 'Store 6', location: 'Location 6' },
    { id: 8, name: 'Store 7', location: 'Location 7' },
    { id: 9, name: 'Store 8', location: 'Location 8' },
    { id: 10, name: 'Store 9', location: 'Location 9' },
    { id: 11, name: 'Store 10', location: 'Location 10' },
    { id: 12, name: 'Store 11', location: 'Location 11' },
    { id: 13, name: 'Store 12', location: 'Location 12' },
    { id: 14, name: 'Masibo', location: 'Location 13' },
    // ... (more store data)
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newStore, setNewStore] = useState({ name: '', location: '' });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore({ ...newStore, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreData([...storeData, { id: storeData.length + 1, ...newStore }]);
    closeModal();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [storesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering logic
  const filteredStores = storeData.filter((store) =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold mb-6">MyDuka Stores</h1>

       {/* Add New Store button */}
       <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
      >
        Add New Store
      </button>

      {/* Search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a store..."
        className="mt-4 p-2 border rounded"
      />

      {/* Table */}
      <table className="min-w-full border rounded mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {currentStores.map((store) => (
            <tr key={store.id}>
              <td className="border p-2">{store.id}</td>
              <td className="border p-2">{store.name}</td>
              <td className="border p-2">{store.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <span>
          Page{' '}
          <strong>
            {currentPage} of {Math.ceil(filteredStores.length / storesPerPage)}
          </strong>{' '}
        </span>
        <button
          onClick={() => paginate(1)}
          className="ml-2 text-blue-500"
          disabled={currentPage === 1}
        >
          {'<<'}
        </button>
        <button
          onClick={() => paginate(currentPage - 1)}
          className="ml-2 text-blue-500"
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          className="ml-2 text-blue-500"
          disabled={currentPage === Math.ceil(filteredStores.length / storesPerPage)}
        >
          {'>'}
        </button>
        <button
          onClick={() => paginate(Math.ceil(filteredStores.length / storesPerPage))}
          className="ml-2 text-blue-500"
          disabled={currentPage === Math.ceil(filteredStores.length / storesPerPage)}
        >
          {'>>'}
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Store</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newStore.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={newStore.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
              >
                Add Store
              </button>
            </form>
            <button
              onClick={closeModal}
              className="mt-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stores;
