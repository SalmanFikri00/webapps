import React from 'react'
import LandingSection from '../components/landingsection'
import mallwareimg from '/mallware.png'
import Comp from '../components/comp'

function Mallware() {
  return (
    <div className='w-screen bg-gray-900 h-[150vh]'>
        <LandingSection title1='Apakah kamu pernah mendengar tentang mallware' content="yukk cari tahu apa itu mallware..." title2='Mallware' size1='1.5vw' size2='7vw' img={mallwareimg} button={false}/>
        <div className='text-[0.6em]'>
            <Comp value='Apa Itu Mallware???...' height='50vh' img={mallwareimg} value2='Malware (Malicious Software) adalah suatu program yang dirancang dengan tujuan untuk merusak dengan menyusup ke sistem komputer. Malware dapat menginfeksi banyak komputer dengan masuk melalui email, download internet, atau program yang terinfeksi.' />
        </div>
    </div>
  )
}

export default Mallware