import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import FilterPanel from './components/FilterPanel'
import Footer from './components/Footer'
import Banner from './components/Banner'
import ProductGrid from './components/ProductGrid'
import Panel from './components/Panel'



const App = () => {
  return (
    <div className='bg-white min-h-screen'> 
      <Navbar />
      <main className='mt-5 flex gap-6 '>
        <Sidebar />
        <div className='w-full mt-5 flex-1 space-y-6 mr-4'>
          <Banner />
          <FilterPanel />
          <ProductGrid />
          <Panel />
        </div>
      </main>
      <Footer />
      
    </div>
  )
}

export default App