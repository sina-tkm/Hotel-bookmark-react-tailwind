import BannerImage from "../../public/hotel.jpg"





function Bannerimage(){
  return (
    <div >
      <div className="">
       
      <img src={BannerImage} alt="" className=" object-cover h-[350px] w-full z-[-1] absolute " />
      </div>
    </div>
  )
}

export default Bannerimage