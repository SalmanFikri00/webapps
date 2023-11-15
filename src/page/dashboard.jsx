import React from 'react'
import com1 from '/computer1.svg'
import Comp from '../components/comp'
import Comp2 from '../components/comp2'
import LandingSection from '../components/landingsection'
import bertanya1 from '/bertanya1.svg'
import cybersecurity from '/cybersecurity.svg'
import cyberattack from '/cyberatack.svg'
import phisshingconcept from '/phisshingconcept.svg'

function Dashboard() {
  return (
    <div className=' font-poppins w-screen bg-gray-900 overflow-x-hidden text-white'>
        <LandingSection title1='Untuk Kamu Yang Ingin Terhindar Dari Serangan Cyber' title2='Cyber Education' size1='1vw' size2='5vw' img={com1} content='Ayoo cari tahu' button={true}/>
        <section className='w-[98vw] flex flex-col items-center'>
            <Comp height='30vh' textSize={'1.5vw'} value2='apakah kamu pernah mendengar tentang kasus pencurian uang nasabah di bank atau pencurian data pribadi' img={bertanya1}/>
            <Comp2 height='30vh' value='bisa jadi itu terkena serangan siber atau cyber attack' textSize={'1.5vw'} img={cyberattack}/>
            <div className=' lg:my-32 h-[10vh] flex w-full justify-center gap-6 items-center'>
                <p className='text-[0.7em] lg:text-[1.4vw]'>tapi apakah kamu tahu cyber attack itu?</p>
                <button className=' bg-sky-300 text-black text-[0.7em] lg:text-[1.4em] px-[3vw] py-[1vw] rounded-[1vw] duration-300 hover:shadow-lg  hover:bg-sky-100  hover:shadow-white'>yukk cari tahu</button>
            </div>
            <div className='w-full flex px-[10vw] flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <Comp value='Cyber Security' height='80vh' img={cybersecurity} value2='perlindungan sistem terhadap serangan siber'/>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Comp2 value='Cyber Attack' height='80vh' img={cyberattack} value2='penyerangan/peretasan sistem'/>
                </div>
            </div>
              <div className=''>
                <h1 className=' p-16 text-[2em] lg:text-[5em] lg:p-32'>Contoh...</h1>
            <div className='w-screen flex flex-col md:flex-row'>
                <div className=' p-8'>
                  <p className=' w-[80vw] md:w-[50vw] text-[0.8em] lg:text-[1.7em] lg:px-36'>
                    coba bayangkan kamu memiliki kartu kredit, saat kamu ingin cek saldo dari sebuah website resmi kamu malah masuk ke dalam website yang sangat mirip dengan yang asli. website tersebut buatan orang yang berniat jahat kepada mu. saat kamu login data login yang harus nya di kirimkan kepada pihak bank malah di kirimkan ke orang pembuat website. 
                  </p>
                  <h1 className='lg:px-36 lg:text-[5em] py-6 lg:py-12 font-poppins'>Gawatttt!!!!........</h1>
              <p className=' w-[80vw] md:w-[50vw] text-[0.6em] lg:text-[1.7em] lg:px-36 '>
                    Maka akun dan saldo mu akan mudah di ambil oleh sang pembuat website penipuan tersebut
                  </p>
                </div>
              <div className=''>
                <img className=' w-[70vw] md:w-[30vw]' src={phisshingconcept} alt="" />
              </div>
              </div>
            </div>
                  <h1 className='lg:px-36 lg:text-[3em] py-6 lg:py-12 font-poppins'>Yaa itu adalah salah satu serangan siber yaitu</h1>
                  <h1 className='lg:px-36 lg:text-[5em] font-poppins'>Phishing</h1>
            <div className=''>
            </div>
        </section>

    </div>
  )
}

export default Dashboard