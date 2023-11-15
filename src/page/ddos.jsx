import React from 'react'
import LandingSection from '../components/landingsection'
import mallwareimg from '/mallware.png'
import Comp from '../components/comp'

function Mallware() {
  return (
    <div className='w-screen bg-gray-900'>
        <LandingSection title1='Apakah kamu pernah mendengar tentang DDOS' content="yukk cari tahu apa itu DDOS..." title2='DDOS' size1='1.5vw' size2='7vw' img={mallwareimg} button={false}/>
        <div className=' text-[0.7em]'>
            <Comp value='Apa Itu DDOS???...' height='50vh' img={mallwareimg} value2='DDOS attack atau Distributed Denial of Service merupakan serangan cyber dengan cara mengirimkan fake traffic atau lalu lintas palsu ke suatu sistem atau server secara terus menerus. Dampaknya, server tersebut tidak dapat mengatur seluruh traffic sehingga menyebabkan down.' />
        </div>
    </div>
  )
}

export default Mallware