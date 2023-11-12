import React from 'react'

function LandingSection({title1 , title2 , size1 , size2 , img , button , content}) {

    console.log(title1)

  return (
        <div className='w-screen h-screen flex bg-gray-900'>
            <div className='w-1/2 h-full flex justify-end items-center'>
                <div className='text-white font-ubuntu text-[1.7em] flex flex-col justify-end w-2/3'>
                    <h1 className={`text-[${size2}]`}>{title2}</h1>
                    {/* <h1 className=' px-[4vw] text-[2vw]'>Website ini</h1> */}
                    <h1 className={`text-[${size1}]`}>{title1}</h1>
                    <div className='bg-white w-full h-[2px] '></div>
                    <div className=' flex justify-between items-center h-[10vh]'>
                        <p className=' text-sky-100 font-thin'>{content}</p>
                        {
                            button == true ? <a href='#start'><button className=' bg-sky-300 text-black px-[3vw] py-[1vw] rounded-[1vw] duration-300 hover:shadow-lg  hover:bg-sky-100  hover:shadow-white'>Let's Gooo</button></a> : '' 
                        }
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full flex justify-center items-center'>
                <img className='w-1/2' src={img} alt="" />
            </div>

        </div>
  )
}

export default LandingSection