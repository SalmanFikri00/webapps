import React from 'react'
import LandingSection from '../components/landingsection'
import phishingimg from '/phishing.png'

function Phising() {
  return (
    <div>
        <LandingSection title1='Apakah kamu pernah mendengar tentang phising' content="yukk cari tahu apa itu phising..." title2='Phishing' size1='1.5vw' size2='7vw' img={phishingimg} button={false}/>
    </div>
  )
}

export default Phising