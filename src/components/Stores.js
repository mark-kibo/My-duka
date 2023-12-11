import React, { useState } from 'react';
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from 'react-query';


 // Define queryClient
  const queryClient = new QueryClient();
  const Stores = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newStore, setNewStore] = useState({ name: '', location: '' });

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

 

  const { data: storeData, isLoading, isError, refetch } = useQuery(
    'stores',
    async () => {
      const response = await fetch('https://duka.onrender.com/stores/');
      if (!response.ok) {
        throw new Error('Failed to fetch stores');
      }
      const data = await response.json();
      return data;
    }
  );

  const addStoreMutation = useMutation(
    async (newStore) => {
      const response = await fetch('https://myduka-apis.onrender.com/stores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStore),
      });
      if (!response.ok) {
        throw new Error('Failed to add a new store');
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        // Ensure that refetch is defined before calling it
        if (refetch) {
          refetch();
        }
        closeModal();
      },
      onError: (error) => {
        console.error('Mutation failed with error:', error);
      },
    }
  );
  
  

  // Filtering logic
  const filteredStores =
    storeData?.filter((store) =>
      store.store_name &&
      store.store_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Pagination logic
  const storesPerPage = 5;
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(
    indexOfFirstStore,
    indexOfLastStore
  );

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore({ ...newStore, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStoreMutation.mutate(newStore);
  };

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
        onChange={(e) => handleSearch(e)}
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
            <tr key={store.store_id}>
              <td className="border p-2">{store.store_id}</td>
              <td className="border p-2">{store.store_name}</td>
              <td className="border p-2">{store.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

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

      {/* Pagination */}
      <div className="flex justify-end mt-4">
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
        <span>
          Page{' '}
          <strong>
            {currentPage} of {Math.ceil(filteredStores.length / storesPerPage)}
          </strong>{' '}
        </span>
      </div>
    </div>
  );
};

const StoresWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <Stores />
  </QueryClientProvider>
);

export default StoresWrapper;
