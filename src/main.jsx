import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Mallware from './page/mallware';
import Phising from './page/phising';
import Home from './page/home';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Sidebar from './components/progressbar';
import Navbar from './components/navbar';
import ResponsiveNavbar from './components/responsivenavbar';
import MallwareDetection from './page/mallwareDetection';
import PhishingDetection from './page/phishingDetection';
import DdosEdu from './page/ddos';
import Dashboard from './page/dashboard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' overflow-x-hidden'>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Dashboard/> } />
          <Route path="/mallware" element={ <Mallware/> } />
          <Route path="/phising" element={ <Phising/> } />
          <Route path="/mallwareDetection" element={ <MallwareDetection/> } />
          <Route path="/phishingDetection" element={ <PhishingDetection/> } />
          <Route path="/ddos" element={ <DdosEdu/> } />
          <Route path="/edu" element={ <Home/> } />

        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
