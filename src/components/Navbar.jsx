import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-3 bg-black bg-opacity-50 z-1 absolute">
      <div className="text-amber-400 text-4xl flex items-center flex-shrink-0 font-bold">
        MFP
      </div>

      <div>
        <Menu className='sm:hidden' size={30} color="#ffca28" strokeWidth={1.5} />
      </div>

      <div className="flex-grow text-center hidden sm:block">
        <ul className="flex justify-center space-x-7 font-bold gap-6">
          <li key='intro'>
            <a href="#intro" className="text-white hover-nav">Inicio</a>
          </li>
          <li key='vantagens '>
            <a href="#vantagens" className="text-white hover-nav">Vantagens</a>
          </li>
          <li key='produtos'>
            <a href="#produtos" className="text-white hover-nav">Produtos</a>
          </li>
          <li key='FAQ'>
            <a href="#FAQ" className="text-white hover-nav">FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}