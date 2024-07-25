import {React,useState} from 'react';
import './sidebar.css'; 
import { AiFillPieChart } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BiCalendar } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { RxFileMinus } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { SlEarphones } from "react-icons/sl";
import { FiGift } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [activeItem, setActiveItem] = useState('dashboard'); // Default to 'dashboard'

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const getItemClasses = (item) => (
    activeItem === item
      ? 'bg-blue-500 text-white rounded-lg'
      : 'bg-white text-black'
  );

  return (
    <div className="sidebar p-3">
      <div className='flex ml-2 items-center'>
        <AiFillPieChart className='text-blue-300 h-7 w-7' />
        <h1 className='text-gray-700 ml-2 font-extrabold'>Metrix</h1>
      </div>
      <div className='flex flex-col mt-3'>
        <ul className='mt-5'>
          <li className={`p-2 cursor-pointer ${getItemClasses('dashboard')}`}
              onClick={() => handleItemClick('dashboard')}>
            <Link to="/">
              <div className='flex p-2'>
                <RxDashboard className=' h-7 w-7'/>
                <h1 className=' ml-2'>Dashboard</h1>
              </div>
            </Link>
          </li>
          <li className={`p-2 cursor-pointer ${getItemClasses('orders')}`}
              onClick={() => handleItemClick('orders')}>
            <Link to="/Orders">
              <div className='flex p-2'>
                <BiCalendar className=' h-7 w-7'/>
                <h1 className=' ml-2'>Orders</h1>
              </div>
            </Link>
          </li>
          <li className={`p-2 cursor-pointer ${getItemClasses('customers')}`}
              onClick={() => handleItemClick('customers')}>
            <div className='flex  p-2'>
              <GoPeople className='h-7 w-7'/>
              <h1 className=' ml-2'>Customers</h1>
            </div>
          </li>
          <li className={`p-2 cursor-pointer ${getItemClasses('inventory')}`}
              onClick={() => handleItemClick('inventory')}>
            <div className='flex p-2'>
              <RxFileMinus className=' h-7 w-7'/>
              <h1 className=' ml-2'>Inventory</h1>
            </div>
          </li>
          <li className={`p-2 cursor-pointer ${getItemClasses('conversations')}`}
              onClick={() => handleItemClick('conversations')}>
            <div className='flex p-2'>
              <AiOutlineMessage className='h-7 w-7'/>
              <h1 className=' ml-2'>Conversations</h1>
            </div>
          </li>
          <li className={`p-2 cursor-pointer ${getItemClasses('settings')}`}
              onClick={() => handleItemClick('settings')}>
            <div className='flex p-2'>
              <IoSettingsOutline className=' h-7 w-7'/>
              <h1 className=' ml-2'>Settings</h1>
            </div>
          </li>
        </ul>
        <div className='flex flex-col mb-1 mt-80'>
          <div className='flex bg-gray-300 rounded-lg p-2 mb-2'>
            <SlEarphones className=' h-7 w-7'/>
            <h1 className='text-black ml-2'>Contact Support</h1>
          </div>
          <div className='flex flex-col bg-orange-100 rounded-lg mb-2 p-2'>
            <div className='flex p-2'>
              <FiGift className=' h-7 w-7'/>
              <h1 className='text-black ml-2'>Free Gift Awaits You!</h1>
            </div>
            <p className='text-gray-400'>Upgrade your account</p>
          </div>
          <div className='flex bg-white rounded-lg p-2'>
            <TbLogout className='text-red-300 h-7 w-7'/>
            <h1 className='text-red-300 ml-2'>Logout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;