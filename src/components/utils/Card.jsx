export default function Card(props) {
  return (
    <div className="w-[280px] p-5 border border-zinc-700 rounded-xl bg-black bg-opacity-20">
      <div className="flex justify-center items-center rounded-full bg-yellow-400 size-16">
        {props.children}
      </div>
      
      <div className="flex flex-col gap-6 text-white mt-10 text-justify">
        <h3 className="font-bold text-2xl">
          {props.title}
        </h3>
        <p className="font-regular text-md text-gray-400 leading-5">
          {props.text}
        </p>
      </div>
    </div>
  )
}