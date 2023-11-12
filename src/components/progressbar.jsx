import React from 'react'

function Sidebar() {
  return (
    <div className=' fixed w-[10vh] h-[100vh] flex justify-start items-center'>
        <div className=' w-full h-[80vh] bg-zinc-500/[.4] backdrop-blur-sm shadow-inner shadow-white rounded-r-[7vh] flex justify-center items-center flex-col'>
          <div className='w-[10px] h-[80%] bg-white rounded-[5px]'>
              <div className='w-[10px] h-[10%] bg-black rounded-[5px]'></div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar