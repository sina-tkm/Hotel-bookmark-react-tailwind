import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrain,
  faPlaneDeparture,
  faBuilding,
  faBus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelect } from "./hooks/context/ListTickets";
import Train from "./Train";
import Airplane from "./Airplane";
import DateselectorHotel from "./Dateselector";
import Bustravel from "./Bustravel";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Ticketmaker() {
  const state = useSelect();
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    function hiddenNav() {
      if (window.scrollY >= 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
    window.addEventListener("scroll", hiddenNav);
    return () => {
      window.removeEventListener("scroll", hiddenNav);
    };
  }, [hidden]);
  return (
    <div className='w-[75%]  mx-auto z-[1000]  mt-[-105px] box-shadow-bar navbar-shadow rounded-lg sticky-position '>
      <div
        className={
          !hidden
            ? "w-full mx-auto flex justify-around py-4 px-20 border-style "
            : "hidden"
        }
      >
        <div
          className={
            state.value === "content1" ? "border-bottonclass " : "just-padding"
          }
        >
          <NavLink
            to={"/train"}
            onClick={() => dispatch({ type: "one", payload: "content1" })}
            className='flex flex-col justify-center items-center'
          >
            <span className='icon-color'>Train</span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faTrain} className='text-size' />
            </span>
          </NavLink>
        </div>

        <div
          className={
            state.value === "content2" ? "border-bottonclass" : "just-padding"
          }
        >
          <NavLink
            to={"/airplane"}
            onClick={() => dispatch({ type: "two", payload: "content2" })}
            className='flex flex-col justify-center items-center'
          >
            <span className='icon-color'>AirPlane</span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faPlaneDeparture} className='text-size' />
            </span>
          </NavLink>
        </div>

        <div
          className={
            state.value === "content3" ? "border-bottonclass" : "just-padding"
          }
        >
          <NavLink
            to={"/"}
            onClick={() => dispatch({ type: "three", payload: "content3" })}
            className='flex flex-col justify-center items-center'
          >
            <span className='icon-color'>Hotel</span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faBuilding} className='text-size' />
            </span>
          </NavLink>
        </div>

        <div
          className={
            state.value === "content4" ? "border-bottonclass" : "just-padding"
          }
        >
          <NavLink
            to={"/bus"}
            onClick={() => dispatch({ type: "four", payload: "content4" })}
            className='flex flex-col justify-center items-center'
          >
            <span className='icon-color'>Bus</span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faBus} className='text-size' />
            </span>
          </NavLink>
        </div>
      </div>
      

      {state.value === "content1" && <Train />}
      {state.value === "content2" && <Airplane />}
      {state.value === "content3" && <DateselectorHotel />}
      {state.value === "content4" && <Bustravel />}
    </div>
  );
}

export default Ticketmaker;
