import Image from "next/image"



function Navbar() {
  return (
    <div className="flex justify-between items-center mx-5 my-3 ">
      <div className="flex items-center font-mono ">
       <Image  
         src="/man.png" 
        alt="Example Image" 
         width={50} 
         height={50} 
      />
      <p className="text-xl ml-1">ahm0d</p>
    </div>
    

      <h1 className="font-bold text-xl"><span className="text-orange-300">To<span className="text-sky-200">Do</span></span>-List</h1>
    </div>
  )
}

export default Navbar