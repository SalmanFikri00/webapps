import React from 'react'
import com1 from '/computer1.svg'
import Comp from '../components/comp'
import Comp2 from '../components/comp2'
import LandingSection from '../components/landingsection'
import bertanya1 from '/bertanya1.svg'
import cybersecurity from '/cybersecurity.svg'
import cyberattack from '/cyberatack.svg'

function Home() {
  return (
    <div className=' w-screen bg-gray-900 overflow-x-hidden'>
        <LandingSection title1='Untuk Kamu Yang Ingin Terhindar Dari Serangan Cyber' title2='Cyber Attack Education' size1='1vw' size2='5vw' img={com1} content='Ayoo cari tahu' button={true}/>
        <section className='w-[98vw]'>
            <Comp height='30vh' value='apa sihh cyber attack dan cyber security itu???...' img={bertanya1}/>

        </section>
    </div>
  )
}

export default Home