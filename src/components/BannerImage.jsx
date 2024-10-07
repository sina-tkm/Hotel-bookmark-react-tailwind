import BannerImage from "../../public/hotel.jpg"





function Bannerimage(){
  return (
    <div >
      <div className="">
       
    <picture>
      <source srcSet={BannerImage}  />
    <img src={BannerImage} alt="hotel-banner" className=" object-cover h-[500px] w-full   z-[-1] box-shadow-bar " />
    </picture>
      <div className='navbar'>
        <span className='text-black  absolute text-[22px] w-[625px] right-[10rem] top-[333px] font-secfont font-[400]'>
          Experience unparalleled luxury and comfort at London Hotel, where
          every stay becomes a cherished memory
        </span>
      </div>
      </div>
    </div>
  )
}

export default Bannerimage