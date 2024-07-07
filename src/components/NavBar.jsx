import { ChevronDownIcon, UserIcon , ArrowLeftStartOnRectangleIcon} from "@heroicons/react/16/solid";
import { TicketIcon } from "@heroicons/react/16/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import brand from "../../public/label.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/context/AuthProvider";

function NavBar() {
  return (
    <div className='w-full navbar-shadow absolute top-[100px] '>
      <div className=' w-full high-light absolute top-[-23px] h-[140px] '></div>
      <div className='w-full flex justify-between px-[45px] py-8'>
        <div className='flex gap-x-8 '>
          <UserLogin />

          <div className='navbar'>
            <span className='icon-color'>سفرهای من</span>
            <span>
              <TicketIcon className='h-[24px] w-[24px] icon-color' />
            </span>
          </div>
          <div className='navbar'>
            <span className='icon-color'>مرکز پشتیبانی</span>
            <span>
              <QuestionMarkCircleIcon className='h-[24px] w-[24px] icon-color' />
            </span>
          </div>
        </div>
        <div className='ml-[60px]'>
          <ul className='flex navbar-second'>
            <li className='border-right'>
              <button className='flex gap-x-3 '>
                <span>
                  <ChevronDownIcon className='h-[24px] w-[24px] icon-color' />
                </span>
                <span className='icon-color'>بیشتر</span>
              </button>
            </li>
            <li className='border-right '>
              <button>
                <span className='icon-color'>تور</span>
              </button>
            </li>
            <li className='border-right'>
              <button>
                <span className='icon-color'>ویزا</span>
              </button>
            </li>
            <li className='border-right'>
              <button className='flex gap-x-3'>
                <span>
                  <ChevronDownIcon className='h-[24px] w-[24px] icon-color' />
                </span>
                <span className='icon-color'>اقامت</span>
              </button>
            </li>
            <li className='border-right'>
              <button className='flex gap-x-3'>
                <span>
                  <ChevronDownIcon className='h-[24px] w-[24px] icon-color' />
                </span>
                <span className='icon-color'>بلیط</span>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <img
            src={brand}
            alt='icon'
            className='h-[35px] w-[131px] object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

function UserLogin() {
  const navigate = useNavigate()
  const { user, isAuthenticated,logout } = useLogin();
  const handleLogout = ()=>{
    logout()
    navigate("/")
  }
  return (
    <div>
    {isAuthenticated ? 
         <div  className='navbar cursor-pointer'>
         <span className='icon-color'>{user.name}</span>
         <button onClick={handleLogout}>
           <ArrowLeftStartOnRectangleIcon className='h-[24px] w-[24px] icon-color transform-flip ' />
         </button>
       </div> :  
     <NavLink to='/login' className='navbar'>
        <span className='icon-color'>Login</span>
        <span>
          <UserIcon className='h-[24px] w-[24px] icon-color' />
        </span>
      </NavLink>}
    </div>
  );
}
