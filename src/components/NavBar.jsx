import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/16/solid";
import brand from "../../public//label.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/context/AuthProvider";

function NavBar() {
  return (
    <div className='w-full  fixed z-[10] '>
      <div className='w-full flex justify-between px-[45px] py-8 high-light '>
        <div className='flex gap-x-8  order-2'>
          <UserLogin />
        </div>

        <div className='image-container order-1 '>
          <img
            src={brand}
            alt='icon'
            className='h-[37px] w-[26px] object-cover'
          />
        </div>
      </div>
      
    </div>
  );
}

export default NavBar;

function UserLogin() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useLogin();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      {isAuthenticated ? (
        <div className='navbar cursor-pointer'>
          <span className='text-white'>{user.name}</span>
          <button onClick={handleLogout}>
            <ArrowLeftStartOnRectangleIcon className='h-[24px] w-[24px] text-white transform-flip ' />
          </button>
        </div>
      ) : (
        <NavLink to='/login' className='navbar text-black'>
          <span className='text-white'>Login</span>
          <span>
            <UserIcon className='h-[24px] w-[24px] text-white' />
          </span>
        </NavLink>
      )}
    </div>
  );
}
