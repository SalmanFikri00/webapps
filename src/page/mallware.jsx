import React from 'react'
import LandingSection from '../components/landingsection'
import mallwareimg from '/mallware.png'
import Comp from '../components/comp'

function Mallware() {
  return (
    <div className='w-screen bg-gray-900'>
        <LandingSection title1='Apakah kamu pernah mendengar tentang mallware' content="yukk cari tahu apa itu mallware..." title2='Mallware' size1='1.5vw' size2='7vw' img={mallwareimg} button={false}/>
        <div>
            <Comp value='Apa Itu Mallware???...' height='50vh' img={mallwareimg} value2='aw as fughldus fals dfual sdfdiuasg ufsaligdfgsgh fuigsaliudgf a' />
        </div>
    </div>
  )
}

export default Mallware