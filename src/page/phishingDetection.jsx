import React from 'react'

function PhishingDetection() {
  return (
    <div className='text-white w-screen bg-gray-900 overflow-x-hidden h-screen flex justify-center items-center flex-col'>
        <h1 className=' text-[5vw] mb-[4vh] '>Link Phsing detection </h1>
        <div className='flex justify-center items-center'>
            <div className=''>
                <img src="/phishing.png" className='h-[20vw]' alt="" />
            </div>
            <div>
                <p>anda anda ingin mengunjungi situs website tetapi anda ragu website berbahaya atau tidak</p>
                <h2 className=' text-[3vw]'>Coba Paste di sini aja</h2>
                <input type="text" className='text-black w-full rounded-lg'/>
                <h2 className=' text-[7vw]'>OUTPUT.....</h2>
            </div>
        </div>
    </div>
  )
}

export default PhishingDetection