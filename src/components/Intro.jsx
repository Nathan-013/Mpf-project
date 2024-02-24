import Image from "next/image";

export default function Intro() {
  return (
    <section className={`
      flex flex-col justify-around items-center w-full bg-graph pt-24 pb-14 
      xl:flex-row
    `}>
      <div className="flex justify-center items-center rounded-3xl mb-8 xl:m-0">
        <Image 
        className={`
          rounded-3xl shadow-md shadow-amber-500
          h-[230px] w-[330px]
          xl:h-[400px] xl:w-[600px]
        `}
        src='/images/grafico5.png' 
        width={650} 
        height={400}
        />
      </div>
      
      <div className="flex flex-col gap-3 px-6 text-white text-justify lg:w-[70%] xl:w-[650px]">
        <h2 className="text-xl tracking-tight xl:text-4xl lg:text-3xl font-black xl:leading-10">
          Dominar o mercado financeiro não precisa consumir todo o seu tempo.
          Descubra uma abordagem <span className="text-amber-400">eficaz</span> e <span className="text-amber-400">eficiente</span> com o MFP.
        </h2>

        <p className="text-md font-extralight">
          Além de padrões, aprenda também onde entrar e se posicionar em cada um deles!
        </p>

        <div className="flex justify-center mt-10 text-center font-bold">
          <a href="#produtos" className="bg-yellow-500 border md:w-[70%] xl:w-1/2 border-yellow-800 rounded-md p-4 hover:bg-opacity-90">
            ESTOU INTERESSADO!
          </a>
        </div>
      </div>
    </section>
  )
}