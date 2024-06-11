
import useFetch from "./hooks/Fetchapi"


function Location() {
    const { data, isLoading } = useFetch("http://localhost:5001/hotels", "")



    if(isLoading) return <div>loading Data</div>

  return (
    <div className="wrapper mt-8 ">
        {
        data.map((item )=>{
            return(
         
           <div className="flex  p-[8px] border-option rounded-md " key={item.id}>
            
            <img src={item.xl_picture_url} alt={item.name} className="w-[150px] h-[150px] object-cover rounded-md"/>
            
            <div className="flex flex-col gap-y-3 mx-4 ">
                <p className=" font-semibold text-[14px  background-hover border p-1  rounded-md flex justify-center items-center text-center w-[150px]">{item.smart_location}</p>
                <p className="font-name ">{item.name}</p>
                <div className="flex justify-start items-center text-start gap-x-[2px]">
                <span>€</span>
                <p className="font-name">{item.price}</p> 
                <span>/night</span>
                </div>
            </div>
         </div>
        
            )
        })

       
        }
    </div>
  )
}

export default Location

