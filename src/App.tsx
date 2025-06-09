import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import './App.css'
import SuccessPartners from './components/SecessPartner/SuccessPartner'
import AiComparison from './components/AiComparison/AiComparison'
import NewsSection from './components/NewsSection/NewsSection'
import Footer from './components/Footer/Footer'
import PlatformBenefits from './components/PlatFormBenefits/PlatformBenefits'
import Procss from './components/Process/Process'
import DashboardImage from './assets/Dashboard.png'

function App() {

  return (
    <div className='flex relative bg-hero-img p-4 flex-col min-h-screen bg-black text-white'>
      <div className="absolute  left-0 top-0 w-full h-screen bg-gradient-to-tr from-black via-[#1a001a] to-[#0f1e40]"></div>
      <div className="absolute  left-0 top-[300px] bg-gradient-to-b from-transparent to-black w-full h-[20rem] "></div>



      <Navbar />
      <HeroSection />
      <section className="relative w-full "><div className="w-full max-w-[1297px] mx-auto relative px-3">
        <div className="relative mt-[50px]">
          <div className="w-full max-w-[904px] mx-auto">
            <img src={DashboardImage} alt="Dashboard Preview" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
        <div className="bg-bottom-img"></div>
      </section>
      <SuccessPartners />
      <Procss />
      <PlatformBenefits />
      <AiComparison />
      <NewsSection />
      <Footer />
    </div>
  )
}

export default App
