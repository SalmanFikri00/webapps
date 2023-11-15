import React, { useState , useEffect} from 'react'
import axios from 'axios';
import OpenAI from 'openai';

function PhishingDetection() {

  const [ url , setUrl ] = useState('')
  
  const [ urlEncoded , setUrlEncoded ] = useState('')
  
  const [ statusCheking , setStatusCheking ] = useState('Output...')

  const [ output , setOutput ] = useState('')


useEffect(() => {
  console.log(statusCheking)

}, [statusCheking])




    const handleUrlInput = (event) => {
        setUrl(event.target.value)
        var base64Encoded = btoa(unescape(encodeURIComponent(event.target.value)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
        setUrlEncoded(base64Encoded)
        console.log(base64Encoded)
    }

    const cekGpt = async ( responData ) => {

    setStatusCheking('menganalisi...');


      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [{
          role: "system", content: "anda adalah penerjemah dari respon deteksi link.",
          role: "user", content: responData
      }]
      }

      await fetch("https://api.openai.com/v1/chat/completions", 
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {return data.json()
      }).then((data) => {console.log(data.choices[0].message.content)
    setStatusCheking('Done...');
    setOutput(data.choices[0].message.content)
      })

    }



const cekLink = () => {

    const encodedParams = new URLSearchParams();
    encodedParams.set('url', url);
    
    setStatusCheking('scanning...');

    const options = {
      method: 'POST',
      url: 'https://www.virustotal.com/api/v3/urls',
      headers: {
        accept: 'application/json',
        'x-apikey': 'a512d22d7a698c8449af04cd24b933a249e7777366d35e86a81c624639315fb7',
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: encodedParams,
    };
    
    axios
      .request(options)
      .then(function (response) {
        setTimeout(() => {
          cekLink2()
        }, 1000);
      })
      .catch(function (error) {
        console.error(error);
      });
}



const cekLink2 = async() => {

  setStatusCheking('get scanning...');


    const options2 = {
        method: 'GET',
        url: `https://www.virustotal.com/api/v3/urls/${urlEncoded}`,
        headers: {
          accept: 'application/json',
          'x-apikey': 'a512d22d7a698c8449af04cd24b933a249e7777366d35e86a81c624639315fb7'
        }
      };
      
      axios
        .request(options2)
        .then(function (response) {
          const based = 'buatkan saya kesimpulan dari keseluruhan respon deteksi link jahat tanpa ada penjabaran berikut respon nya'
          const tes = JSON.stringify(response.data);
          cekGpt(based + tes)
        })
        .catch(function (error) {
          console.error(error);
        });
      


}
    const cekUrl = () => {
        console.log(urlEncoded)
    }


    

  return (
    <div className='text-white w-screen bg-gray-900 overflow-x-hidden min-h-[140vh] flex justify-center items-center flex-col'>
        <h1 className=' text-[5vw] mb-[4vh] '>Link Phsing detection </h1>
        <div className={`flex justify-center items-center ${window.innerWidth < window.innerHeight ? 'flex-col' : ''}`}>
            <div className=''>
                <img src="/phishing.png" className='h-[20vw]' alt="" />
            </div>
            <div>
                <p>anda anda ingin mengunjungi situs website tetapi anda ragu website berbahaya atau tidak</p>
                <h2 className=' text-[3vw]'>Coba Paste di sini aja</h2>
                <input type="text" onChange={handleUrlInput} className='text-black w-full rounded-lg'/>
                <h2 className=' text-[7vw]'>{statusCheking}</h2>
                <button className='  bg-sky-300 text-[2em] text-black px-[3vw] py-[1vw] rounded-[1vw] duration-300 hover:shadow-lg  hover:bg-sky-100  hover:shadow-white' onClick={cekLink}>Klik Untuk ceking</button>
            </div>
        </div>
        <div className=' h-[40vh] p-28 w-full'>
          <h1 className=' text-[4em]'>Hasil:</h1>
          <p className=' text-[2em] p-10'>
          {/* Berdasarkan analisis yang telah dilakukan, dapat diidentifikasi beberapa informasi penting terkait URL yang telah disurvei, yaitu "https://bit.ly/3Bspxxx". Hasil analisis ini memberikan gambaran bahwa tautan tersebut terdeteksi sebagai tautan berbahaya atau bersifat phishing oleh berbagai mesin antivirus. Disarankan untuk tidak membuka link tersebut karena berakibat fatal. */}
          {output}
          </p>
        </div>
    </div>
  )
}

export default PhishingDetection