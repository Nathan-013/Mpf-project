import { CheckCircle } from "lucide-react"

export function ProductCard({ item }) {
  return (
    <div className={`
      h-full bg-neutral-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-700
      w-[320px] p-4 ${item.highlight ? 'ring-4 ring-amber-400 border-0' : ' '}
    `}>

      <div className="text-white font-bold">
        <h3 className="pb-1 ml-1 text-xl">
          {item.title}
        </h3>
        <div className="w-[90%] size-0.5 bg-amber-400 rounded-full"/>
        {
          item.highlight 
          ? <p className="text-sm px-2 mb-3 font-light mt-0.5 text-yellow-400">Recomendado</p>
          : ''  
        }
      </div>

      <div className="text-white mt-5">
        {item.desc.map((desc, i) => {
          return (
            <div key={i} className="flex gap-5 mb-4 p-1">
              <CheckCircle color="#8F7105" size={36}/>
              <p className='text-sm font-extralight'>
                {desc}
              </p>
            </div>
          )
        })}
      </div>
      
      <h2 className="text-white font-bold text-center text-3xl py-3">
         R$ {item.price}
      </h2>
      
      <div className="flex justify-center mt-5 text-center font-bold">
        <a href={item.link} target="_blank" className={`
          bg-yellow-500 w-[85%] rounded-xl p-3 hover:bg-opacity-90 
          shadow-[inset_3px_-4px_1px_rgba(0,0,0,0.3)] text-white
        `}>
          Comprar
        </a>
      </div>

    </div>
  )
}