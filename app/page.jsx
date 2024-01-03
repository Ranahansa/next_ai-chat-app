import Image from "next/image";

export default function Home() {
  return (
  <div >
    <div className="font-black leading-tight text-7xl"><span className="text-red-700">Creative</span> <br/> Thoughts Agency.</div>
    <div>
      <p className="pt-5 text-base font-medium text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam nisi exercitationem, soluta rem neque. Odio necessitatibus autem, fuga doloremque provident deleniti incidunt. .</p>
    </div>
    <div className="mt-6">
    <button className="mt-5 text-white hover:text-white border-solid border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">See More</button>
    
    <button className="mt-5 text-white hover:text-white border-solid border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Conatct</button>
    </div>
    <div className="absolute transform -translate-y-1/2 right-[60px] top-[330px] top-1/2">
    <Image src="/hero.gif" alt="hero gif" width={450} height={400} />
    </div>

  </div>
  )
}
