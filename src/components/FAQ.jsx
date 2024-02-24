import Question from '@/components/utils/Question'

export function Faq() {
  return (
    <div id='FAQ' className='w-full bg-gradient-to-r from-zinc-950 to-yellow-700'>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col lg:gap-4 justify-center p-2 lg:p-4">
          <p className="text-2xl text-amber-900 ">
            FAQ
          </p>
          <h2 className='text-3xl lg:text-5xl text-white font-bold shadow-text'>
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className='w-[85%] lg:w-1/2'>
          <Question />
        </div>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 100"><path fill="#ffd700" fillOpacity="0.2" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,138.7C672,181,768,235,864,261.3C960,288,1056,288,1152,256C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
    </div>
  )
}