import { ChevronDownIcon, UserIcon } from "@heroicons/react/16/solid"
import { TicketIcon } from "@heroicons/react/16/solid"
import {QuestionMarkCircleIcon }from "@heroicons/react/16/solid"
import brand from "../../public/label.jpg"

function NavBar() {
  return (
    <div  className="w-full navbar-shadow">
      <div className="w-full flex justify-between px-[45px] py-4 ">
      <div className="flex gap-x-8 ">
        <div className="navbar">
          <span>ورود یا ثبت نام</span>
          <span><UserIcon className="h-[24px] w-[24px] icon-color"/></span>
        </div>
        <div className="navbar">
          <span>سفرهای من</span>
          <span><TicketIcon className="h-[24px] w-[24px] icon-color"/></span>
          </div>
        <div className="navbar">
          <span>مرکز پشتیبانی</span>
          <span><QuestionMarkCircleIcon className="h-[24px] w-[24px] icon-color"/></span>
          </div>
        </div>
      <div className="ml-[60px]">
        <ul className="flex navbar-second">
          <li className="border-right">
          <button className="flex gap-x-3 "> 
          <span><ChevronDownIcon className="h-[24px] w-[24px] icon-color"/></span>
          <span>بیشتر</span>
          </button>
          </li>
          <li className="border-right ">
          <button>
          <span>تور</span>
          </button>
          </li>
          <li className="border-right">
            <button>
            <span>ویزا</span>
            </button>
          </li>
          <li className="border-right">     
         <button className="flex gap-x-3">
         <span><ChevronDownIcon className="h-[24px] w-[24px] icon-color"/></span>
          <span>اقامت</span>
         </button>
          </li>
          <li className="border-right">
          <button className="flex gap-x-3">
          <span><ChevronDownIcon className="h-[24px] w-[24px] icon-color"/></span>
          <span>بلیط</span>
          </button>
          </li>
        </ul>
      </div>
      <div>
        <img src={brand} alt="icon" className="h-[35px] w-[131px] object-cover" />
      </div>
      </div>
    </div>
  
  )
}

export default NavBar