import React from 'react'

function Comp2({value , value2 , img , height}) {
  return (
    <div className={`w-full h-[${height}] flex`} id='start'>
        <div className=' w-1/2 h-full flex justify-end items-center p-[2vw]'>
            <div className=' w-2/3 h-1/2 flex flex-col justify-center items-center'>
                <p className=' text-white text-[2vw] font-montserrat font-[500]'>{value}</p>
                <p className='text-white'>{value2}</p>
            </div>
        </div>
        <div className=' w-1/2 h-full flex justify-start items-center p-[2vw]'>
            <img src={img} alt="" className='h-full' />
        </div>
    </div>
  )
}

export default Comp2