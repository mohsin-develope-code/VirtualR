
import './App.css'
import Feature from './Componenets/Feature/Feature'
import Footer from './Componenets/Footer/Footer'
import HeroContainer from './Componenets/HeroContainer'
import NavBar from './Componenets/NavBar'
import Pricing from './Componenets/Price/Pricing'
import Testimonial from './Componenets/Testimonial/Testimonial'
import WorkFlow from './Componenets/Workflow/WorkFlow'

function App() {
  

  return (
    <div>
      <div>
        <NavBar/>
      </div>

      <div className='max-w-5xl mx-auto pt-20 px-6'>
        <HeroContainer/>

        <Feature/>

        <WorkFlow/>

        <Pricing/>

        <Testimonial/>

        <Footer/>
      
      </div>
      


    </div>
  )
}

export default App
