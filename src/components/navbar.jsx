import React from 'react'

function Navbar() {
  return (
    <div className=' cursor-default fixed flex justify-between text-white w-full overflow-hidden bg-white/[.1] backdrop-blur-md h-[12vh] duration-500 ease-in-out hover:h-[30vh]'>
        <div className='flex justify-center items-center h-[12vh] w-1/6'>
            <h1 className=' text-[2vmin]'>Anak Baik Keren</h1>
        </div>
        <div className=' flex w-[40%] h-[30vh] justify-evenly text-[2vh]'>
            <div className='flex flex-col w-full h-[30vh]'>
                <p className=' h-[12vh] flex items-center '><a href="/">Home</a></p>
                <div className='cursor-pointer flex flex-col h-[18vh] justify-evenly'>
                    <a href="/mallware">Mallware</a>
                    <a href="/phising">Phising</a>
                    <a href="/ddos">DDOS</a>
                </div>
            </div>
            <div className='flex flex-col w-full h-[30vh]'>
                <p className=' h-[12vh] flex items-center '>Tools</p>
                <div className='cursor-pointer flex flex-col h-[18vh] justify-evenly'>
                    <a href="/mallwareDetection">Detect Mallware</a>
                    <a href="/phishingDetection">Detect Phising</a>
                </div>
            </div>
            <div className='flex flex-col w-full h-[30vh]'>
                    <a href="" className='h-[12vh] flex items-center '>ada pertanyaan <br /> tentang siber? </a>
            </div>

        </div>
    </div>
  )
}

export default Navbar