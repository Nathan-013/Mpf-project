import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Info from '@/components/Info'
import { Products } from '@/components/Products'
import { Faq } from '@/components/FAQ'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className={`
        bg-zinc-100 flex flex-col items-center
      `}>
        <Navbar/>
        <Intro id='intro'/>
        <Info/>
        <Products/>
        <Faq/>
        <Footer/>
      </div>
      

    </div>
  )
}
