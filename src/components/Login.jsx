import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/context/AuthProvider";

function LoginComp() {
  const [email, setEmail] = useState("user@gamil.com");
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();
  const { user, login, isAuthenticated } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email, password)) login(email, password);
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate, user]);
  return (
    <div className='mx-auto border w-[500px] h-[270px] p-2 login-blur rounded-lg mt-[-60px]'>
      <h2 className='w-2/3 flex justify-center p-[12px] mx-auto border-b-2 text-white '>
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-y-[18px]  p-[50px] w-full'
      >
        <div className='flex w-full justify-between'>
          <label htmlFor='email' className='text-white'>
            Email :
          </label>
          <input
            className='w-[200px] rounded-lg p-[4px]'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            name='email'
            id='email'
          />
        </div>
        <div className='flex w-full justify-between'>
          <label htmlFor='password' className='w-[60px] text-white'>
            Password:
          </label>
          <input
            className='w-[200px] rounded-lg p-[4px]'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            id='password'
          />
        </div>
        <div className='flex gap-x-8'>
          <button className='w-[100px] h-[40px] bg-black border rounded-lg flex justify-center items-center text-white'>
            Login
          </button>
          <NavLink
            to='/'
            className='w-[100px] h-[40px] bg-black border rounded-lg flex justify-center items-center text-white'
          >
            BACK
          </NavLink>
        </div>
      </form>
    </div>
  );
}
export default LoginComp;
