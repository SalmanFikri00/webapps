import React from 'react'

function Comp({value , value2 , img , height , textSize}) {
  return (
    <div className={`lg:text-[3em] my-14 w-full lg:h-[40vh] text-[1em] flex items-center`} id='pengertian'>
        <div className=' w-1/2 h-full flex justify-end items-center p-[2vw]'>
            <img src={img} alt="" className='h-full' />
        </div>
        <div className=' w-1/2 h-full flex justify-start items-center p-[2vw]'>
            <div className=' lg:w-2/3 w-full h-1/2 flex justify-center items-center flex-col'>
                <p className=' text-white text-[1em] font-montserrat font-[500]'>{value}</p>
                <p className={`text-white text-[0.7em]`}>{value2}</p>
            </div>
        </div>
    </div>
  )
}

export default Comp