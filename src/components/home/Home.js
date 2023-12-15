import React from 'react'

const Home = () => {
  return (
    
    <div className="w-full border overflow-y-auto max-h-screen bg-white dark:bg-white">
      <SwipeableTemporaryDrawer/>
      <Navbar />
      <div className="my-0">
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      </div>


    </div>
  )
}

export default Home