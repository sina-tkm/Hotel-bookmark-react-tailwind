import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/16/solid";
import brand from "../../public//label.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/context/AuthProvider";
import { useEffect, useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [overWidth, setOverWkdth] = useState(false);

  useEffect(() => {
    function hiddenNav() {
      if (window.scrollY < 100) {
        setOverWkdth(true);
      } else {
        setOverWkdth(false);
      }
    }
    window.addEventListener("scroll", hiddenNav);
    return () => {
      window.removeEventListener("scroll", hiddenNav);
    };
  }, []);
  const handleNavigate = () => {
    navigate("/bookmark");
  };
  return (
    <div className='w-full  fixed z-[10]  '>
      <div className='before'>
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
      {overWidth ? (
        <div className='w-ful flex justify-start absolute mt-[459px] left-3  '>
          <button
            className='border rounded-lg  p-4 hover:px-6 transition-all duration-200 absolute high-light'
            onClick={handleNavigate}
          >
            BookMark
          </button>
        </div>
      ) : null}
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
    <div className='flex hover:border-b-2 border-orange-400 transition-all duration-200'>
      {isAuthenticated ? (
        <div className='navbar cursor-pointer flex justify-center items-center'>
          <span className='text-orange-300 border-text'>{user.name}</span>
          <button onClick={handleLogout}>
            <ArrowLeftStartOnRectangleIcon className='h-[24px w-[24px] text-white transform-flip ' />
          </button>
        </div>
      ) : (
        <NavLink to='/login' className='navbar text-black'>
          <span className='text-white border-text'>Login</span>
          <span>
            <UserIcon className='h-[24px] w-[24px] text-white' />
          </span>
        </NavLink>
      )}
    </div>
  );
}
