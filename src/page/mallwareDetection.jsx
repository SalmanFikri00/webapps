import React from 'react'

function MallwareDetection() {
  return (
    <div className='w-screen bg-gray-900 overflow-x-hidden h-screen flex'>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className=' h-1/2 w-1/2 bg-white/[.3] rounded-[2vw] justify-center flex items-center'>
                <p className='text-white text-[2vw]'>
                    seret file ke sini
                </p>
            </div>
        </div>
        <div className=' w-1/2 h-full flex justify-center items-center'>
            <h2 className=' text-[5vw] text-white'>Mallware file detection</h2>
        </div>
    </div>
  )
}

export default MallwareDetection