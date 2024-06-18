import useFetch from "./hooks/Fetchapi";

function Location() {
  const { data, isLoading } = useFetch("http://localhost:3000/hotels", "");

  if (isLoading) return <div>loading Data</div>;

  return (
    <div className='wrapper gap-y-[150px] mt-8 relative   '>
      {data.slice(0,3).map((item) => {
        return (
          <div
            className='flex gap-x-[60px]  h-[700px]  child-order border-b p-12'
            key={item.id}
          >
            <img
          
              src={item.xl_picture_url}
              alt={item.name}
              className=' text-order  object-cover  text-order image-animation'
            />

            <div className='flex flex-col mx-4  w-[60%] justify-center gap-y-8 h-[500px] '>
              <p className=' font-semibold text-[22px]    p-1   rounded-md flex justify-center  items-center text-center'>
                {item.smart_location}
              </p>
              <p className='font-name  w-fit p-[4px]  text-start overflow-hidden loading-8'>
                {item.description}
              </p>
              <div className='flex justify-start items-center text-start gap-x-[2px]'>
                <span>€</span>
                <p className='font-name'>{item.price}</p>
                <span>/night</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
