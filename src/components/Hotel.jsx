import { Square3Stack3DIcon } from "@heroicons/react/16/solid"


function Hotel() {
  return (
    <div className="mt-[40px] w-[75%] mx-auto">
      <div className="w-full flex justify-end items-end flex-col ">
        <div className="flex gap-x-4 ">
          <h4 className="text-blue-300">پاک کردن</h4>
          <span>(۳)جستجو های اخیر</span>
        </div>
      <Lastsearch />
    

      
      </div>
    </div>
  )
}

export default Hotel

 
export function Lastsearch(){
  return(
    <div>
      <div className="flex flex-col p-4 gap-y-6 border mt-3 rounded-md justify-end   ">
      <h4 className="flex w-full justify-end text-[12px]">تهران</h4>
      <div className="flex gap-x-3 ">
        <span className="text-[12px]">20/10/2024</span>
        <span><Square3Stack3DIcon className="w-[20px] h-[20px] icon-color"/></span>
      </div>
    </div>    
</div>
  )
}