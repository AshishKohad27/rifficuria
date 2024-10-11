import React from 'react'

const Ratingbox = () => {
  return (
    <>
    
      <div className='bg-background2 w-full md:w-[248px] flex justify-center flex-row md:flex-col p-4 text-center pb-6 rounded-none md:rounded-2xl'>
        <div className=' max-w-[100px] mx-auto my-4'>
            <p className='text-lg sm:text-2xl text-btn1 font-semibold my-3'>4521</p>
            <p className='my-3 text-[14px] sm:text-[16px] text-textColor'>Total Ratings</p>
        </div>
        <p className='md:mx-auto flex justify-center items-center border-r md:border-b md:border-r-0 border-btn1 w-0 md:w-[120px] md:h-0 h-[80px] mx-0 md:my-0 my-auto'></p>
        <div className=' max-h-[60px] md:max-h-full max-w-[100px] mx-auto my-4 '>
            <p className='text-lg sm:text-2xl text-btn1 font-semibold my-3'>4.5/5</p>
            <p className='my-3 text-[14px] sm:text-[16px] text-textColor'>Avg. Ratings</p>
        </div>
        <p className='md:mx-auto flex justify-center items-center border-r md:border-b md:border-r-0 border-btn1 w-0 md:w-[120px] md:h-0 h-[80px] mx-0 md:my-0 my-auto'></p>
        <div className='max-w-[100px] mx-auto my-4'>
            <p className='text-lg sm:text-2xl text-btn1 font-semibold my-3'>956</p>
            <p className='my-3 text-[14px] sm:text-[16px] text-textColor'>Reviews</p>
        </div>
      </div>
      
    </>
  )
}

export default Ratingbox
