import { useState } from "react"

export const TitleCard = ({children}) =>{

    const [hovered, setHovered] = useState(false)

    return <div className="flex flex-col bg-[#FFB60D] w-fit h-fit px-8 py-2" onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
        <h1 className={` drop-shadow-md font-serif duration-300 font-bold text-black mt-2 ${hovered ? "text-[66px]": "text-[62px]"}`}>{children}</h1> 
        <div className={` drop-shadow-lg h-[1px] duration-300  tras pr-8 bg-black mt-1 mb-6  ${hovered ? "w-[65%]" : "w-[40%] ml-4"}`}></div>
        </div>
}