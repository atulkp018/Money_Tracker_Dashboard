import React from 'react'
import Chart from './Chart'
import {motion} from 'framer-motion'

function Dashboard() {
  return (
    <div className='flex flex-col space-y-6 py-12 px-14'>
        
        <motion.h2
        initial={{ opacity: 0, scale: 0.8 }} // Initial state
        animate={{ opacity: 1, scale: 1 }} // End state
        transition={{ duration: 1, ease: "easeOut" }} // Transition settings
        className="text-3xl font-bold text-gray-800" // Styling
      >
        Dashboard
      </motion.h2>

        <div className='flex sapce-x-8'>

            <div className='w-2/5 h-[150px] border  rounded flex flex-col justify-center p-4 text-gray-600'>
                <span >Atul Krishna Parauha</span>
                <span className='text-gray-500' >Your balance : Rs 78000</span>
            </div>

            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600'>
                <span >Atul Krishna Parauha</span>
                <span className='text-gray-500' >Your expenses : Rs 40000</span>
            </div>

            

        </div>
        <div className='w-3/5'>
        <h2>Expenses Chart</h2>
        <Chart/>

        </div>
        
        <div className='flex sapce-x-8 w-4/5'>
            

        <div className='w-2/5 h-[150px] border  rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
    <span >Your activity</span>
    <li className='mt-4' >You sent Rs 10000 to your mom</li>
</div>

<div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
    <span >Pendilng Bills</span>
    <li className='mt-4' >Broadband Bill : Rs 800</li>
</div>



</div>
    </div>
  )
}

export default Dashboard