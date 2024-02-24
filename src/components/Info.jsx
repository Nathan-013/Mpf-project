import Card from '@/components/utils/Card'
import { ChevronDown, Clock, HandCoinsIcon, NotebookText, TargetIcon, User } from 'lucide-react'

export default function Intro() {
  return (
    <section className={`
      bg-gradient-to-br from-black via-neutral-900 to-yellow-900
      flex flex-col
    `}>

      {/* texto incial */}
      <div className="text-white text-justify flex flex-col items-center justify-center gap-4 mt-14 leading-5">
        <h1 className="text-2xl tracking-tighter lg:text-4xl font-bold px-3 md:w-[75%]">
          No MFP você vai aprender alguns padrões que todos os mercados financeiros possuem!
        </h1>
        <p className="font-extralight text-sm md:text-base px-3 md:w-[75%]">
          Seja no mercado brasileiro <span className="text-yellow-400">B3</span>, 
          no mercado estrangeiro <span className="text-yellow-400">FOREX</span>, 
          em <span className="text-yellow-400">opções binárias</span> ou no mercado de <span className="text-yellow-400">crypto moedas</span>. 
          Se tem gráfico, <span className="text-yellow-400 font-semibold">vai funcionar!</span>
        </p>
      </div>

      {/* barra branca e texto abaixo*/}
      <div id='vantagens' className="text-center space-y-3">
        <div className="bg-white text-lg font-bold p-5 lg:font-black lg:text-3xl text-center lg:p-3 mt-14">
          SABEMOS COMO VOCÊ SE SENTE!
        </div>

        <h2 className="text-white font-semibold text-md">
          Por isso o <span className="text-yellow-400">MFP</span> é pra você que...
        </h2>
      </div>

      {/* Cards */}
      <div className='mx-auto my-10 px-4'>
        <div className={`
          grid grid-cols-1 gap-10 auto-rows-[340px]
          md:grid-cols-2 md:gap-12
          xl:grid-cols-4 xl:gap-4
        `}>
          <Card title='Não tem tempo para estudar:' text='E-book do zero ao avançado em poucos passos.'>
            <Clock size={46}/>
          </Card>
          <Card title='Tem muita técnica e pouca prática:' text='Para àqueles que conhecem as técnicas mas não sabem como aplicar.'>
            <NotebookText size={46} />
          </Card>
          <Card title='Busca objetividade ao estudar:' text='Feito pra você que quer aprender sobre mercado direto ao ponto.'>
            <TargetIcon size={46} />
          </Card>
          <Card title='Busca melhorar a vida financeira:' text='Quer adicionar o trade como renda extra e até mesmo como renda principal.'>
            <HandCoinsIcon size={46} />
          </Card>
        </div>
      </div>

      {/* rodape - amarelo */}
      <div className='flex justify-center'>
        <div className='bg-black rounded-b-full absolute'>
          <ChevronDown size={20} color='yellow'/>
        </div>

        <div className={`
          flex items-center bg-yellow-500 rounded-3xl shadow-lg shadow-amber-500/60
          w-[80%] flex-col
          lg:h-40 lg:w-[60%] lg:flex-row
        `}>
          <div className='text-black lg:pl-10 pt-10 lg:pt-0'>
            <p className='font-bold text-md'>
              Pra quem é?
            </p>
            <p className='font-black text-3xl'>
              Para todos!
            </p>
          </div>

          <div className='flex flex-col lg:flex-row gap-6 text-black text-md p-10'>
            <div className='flex gap-2'>
              <User size={28}/>

              <p>
                <span className='font-semibold'>Inciantes</span> que desejam aprender as bases.
              </p>
            </div>

            <div className='flex gap-2'>
              <User size={28}/>

              <p>
                <span className='font-semibold'>Intermediários</span> em busca de conteúdos avançados.
              </p>
            </div>

            <div className='flex gap-2'>
              <User size={28}/>

              <p >
                <span className='font-semibold'>Experientes</span> que buscam diversificar suas habilidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 mb-12 text-center font-bold text-white">
        <a href="#produtos" className="bg-yellow-500 border w-72 border-yellow-800 rounded-lg p-5 hover:bg-opacity-90">
          O MPF É PRA MIM!
        </a>
      </div>

    </section>
  )
}