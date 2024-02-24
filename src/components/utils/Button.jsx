export default function Button(props) {
  return (
    <div className="flex justify-center mt-7 text-center font-bold">
      <a href={props.link} className="bg-yellow-500 border w-1/2 border-yellow-800 rounded-md p-4 hover:bg-opacity-90">
        {props.children}
      </a>
    </div>
  )
}