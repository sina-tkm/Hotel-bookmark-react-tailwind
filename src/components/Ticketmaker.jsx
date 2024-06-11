import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrain,faPlaneDeparture,faBuilding,faBus } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelect } from "./hooks/context/ListTickets"
import Train from "./Train"
import Airplane from "./Airplane"
import Dateselector from "./Dateselector"
import Bustravel from "./Bustravel"
import { NavLink } from "react-router-dom"

function Ticketmaker() {
  const state = useSelect()
  const dispatch = useDispatch()
  return (
    <div className="w-[75%] border-Ticket mx-auto z-[100] mt-[260px] bg-white">
        <div className="w-full mx-auto flex justify-around py-4 px-20 border-style " >
            <div className={state.value === "content1" ? "border-bottonclass " :  "just-padding"}>
                <NavLink to={'/train'} onClick={()=>dispatch({type:"one",payload:"content1"})}  className="flex flex-col justify-center items-center"   >
                    <span>قطار</span>
                    <span> <FontAwesomeIcon icon={faTrain} className="text-size"/></span>
                </NavLink>
            </div>

            <div className={state.value === "content2" ? "border-bottonclass" :  "just-padding"}>
                <NavLink to={'/airplane'} onClick={()=>dispatch({type:"two",payload:"content2"})} className="flex flex-col justify-center items-center"  >
                <span>هواپیما</span>
                <span> <FontAwesomeIcon icon={faPlaneDeparture} className="text-size"/></span>
              </NavLink>
            </div>

            <div  className={state.value === "content3" ? "border-bottonclass" :  "just-padding"}>
            <NavLink to={"/hotel"} onClick={()=>dispatch({type:"three",payload:"content3"})} className="flex flex-col justify-center items-center"  >
                <span>هتل</span>
                <span> <FontAwesomeIcon icon={faBuilding} className="text-size"/></span>
            </NavLink>
            </div>

            <div className={state.value ==="content4" ? "border-bottonclass" :  "just-padding"}>
            <NavLink to={'/bus'} onClick={()=>dispatch({type :"four",payload:"content4"})} className="flex flex-col justify-center items-center"   >
                <span>اتوبوس</span>
                <span> <FontAwesomeIcon icon={faBus} className="text-size"/></span>
            </NavLink>
            </div>  
        </div>


    {state.value === "content1" && <Train />}
    {state.value === "content2" && <Airplane />}
    {state.value === "content3" && <Dateselector />}
    {state.value === "content4" && <Bustravel />}
   

    
     

    </div>
      
  )
}

export default Ticketmaker