import BannerImage from "../../public/hotel.jpg"





function Bannerimage(){
  return (
    <div >
      <div className="">
       
      <img src={BannerImage} alt="hotel-banner" className=" object-cover h-[500px] w-full   z-[-1] box-shadow-bar " />
      </div>
    </div>
  )
}

export default Bannerimage