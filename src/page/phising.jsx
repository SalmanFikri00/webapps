import React from 'react'
import LandingSection from '../components/landingsection'
import phishingimg from '/phishing.png'
import Comp from '../components/comp'

function Phising() {
  return (
    <div className='w-screen h-[150vh] bg-gray-900'>
        <LandingSection title1='Apakah kamu pernah mendengar tentang phising' content="yukk cari tahu apa itu phising..." title2='Phishing' size1='1.5vw' size2='7vw' img={phishingimg} button={false}/>
       <div className='text-[0.7em]'>
       <Comp value='Apa Itu Phishing???...' height='50vh' img={phishingimg} value2='Phising adalah upaya untuk mendapatkan informasi data seseorang dengan teknik pengelabuan. Data yang menjadi sasaran phising adalah data pribadi (nama, usia, alamat), data akun (username dan password), dan data finansial (informasi kartu kredit, rekening).' />
       </div>
    
    </div>
  )
}

export default Phising

