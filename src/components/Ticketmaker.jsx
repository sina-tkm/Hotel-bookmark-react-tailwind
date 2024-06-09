import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrain,faPlaneDeparture,faBuilding,faBus } from "@fortawesome/free-solid-svg-icons"
import Dateselector from "./Dateselector"
import { Link } from "react-router-dom"

function Ticketmaker() {
  return (
    <div className="w-[75%] border-Ticket mx-auto z-[100] mt-[260px] bg-white">
        <div className="w-full mx-auto flex justify-around py-4 px-20 border-style " >
            <div>
                <Link to="train" className="flex-column ">
                    <span>قطار</span>
                    <span> <FontAwesomeIcon icon={faTrain} className="text-size"/></span>
                </Link>
            </div>

            <div>
                <Link to="airplane" className="flex-column">
                <span>هواپیما</span>
                <span> <FontAwesomeIcon icon={faPlaneDeparture} className="text-size"/></span>
              </Link>
            </div>

            <div>
            <Link to="hotel" className="flex-column">
                <span>هتل</span>
                <span> <FontAwesomeIcon icon={faBuilding} className="text-size"/></span>
            </Link>
            </div>

            <div>
            <Link to="bus" className="flex-column">
                <span>اتوبوس</span>
                <span> <FontAwesomeIcon icon={faBus} className="text-size"/></span>
            </Link>
            </div>  
        </div>


         <Dateselector/>
     

    </div>
      
  )
}

export default Ticketmaker