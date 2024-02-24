import { AtSign, Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className=" w-full bg-gradient-to-r from-zinc-950 to-yellow-700">
      <div className="flex justify-center items-center py-3 gap-1 bg-[#ffd700] bg-opacity-20">
        <span className="font-normal text-sm">Official Page</span>
        <Copyright strokeWidth={2.5} size={10}/>
        <span className="font-normal text-sm">2024 MPF - all rights reserved.</span>
      </div>
    </footer>
  )
}