import React from 'react'
import { RiNotification4Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { FaCircle } from "react-icons/fa6";
import { RxFileMinus } from "react-icons/rx";
import { BiCart } from "react-icons/bi";
import MarketingPiechart from './piechart/MarketingPiechart';
import SummaryPiechart from './piechart/SummaryPiechart';


const DashboardMain = () => {

  return (
    <div>
        <div>
            <div className='flex justify-between p-4'>
                <h1 className='font-sans font-semibold'>Dashboard</h1>
                <ul className='flex p-2 mx-6 justify-around'>
                    <select className='bg-orange-100 mx-2 rounded-lg p-1'>
                        <option>Nanny's Shop</option>
                    </select>
                    <RiNotification4Fill className='text-blue-600 mx-1 w-6 h-6'/>
                    <FaUserCircle className='text-blue-600 mx-1 w-6 h-6'/>
                </ul>
            </div>
            <hr/>
            <GoHomeFill className='text-blue-600 mx-3 my-1 w-6 h-6'/>
        </div>
        <div className=' bg-gray-200 p-6 mb-2'>
            <div className=' flex'>
                <div className='flex flex-col bg-white p-4 rounded-lg w-3/12'>
                    <div className='flex justify-between my-2'>
                        <AiOutlinePieChart className='bg-gray-200 text-blue-500 h-8 w-8 p-2 rounded-md' />
                        <select className='text-gray-300'>
                            <option>This Week</option>
                        </select>
                    </div>
                    <div className='flex justify-start mt-2'>
                        <div>
                            <p className='text-gray-400'>Sales</p>
                            <p className='text-gray-950'>4,000,000.00</p>
                        </div>
                        <div  className='ml-14'>
                            <p className='text-gray-400'>Volume</p>
                            <div className='flex'>
                                <p className='text-gray-950'>450</p>
                                <p className='text-green-700 ml-2'>+20.00%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-white ml-1 p-4 rounded-lg w-3/12'>
                    <div className='flex justify-between my-2'>
                        <MdOutlinePeopleAlt className='bg-orange-50 text-gray-700 h-8 w-8 p-2 rounded-md' />
                        <select className='text-gray-300'>
                            <option>This Week</option>
                        </select>
                    </div>
                    <div className='flex justify-start my-2'>
                        <div>
                            <p className='text-gray-400'>Customers</p>
                            <div className='flex'>
                                <p className='text-gray-950'>1250</p>
                                <p className='text-green-700 mx-2'>+15.80%</p>
                            </div>
                        </div>
                        <div  className='mx-14'>
                            <p className='text-gray-400'>Active</p>
                            <div className='flex'>
                                <p className='text-gray-950'>1180</p>
                                <p className='text-green-700 mx-2'>85%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col bg-white ml-1 p-4 rounded-lg w-6/12'>
                    <div className='flex justify-between my-2'>
                        <BiCalendar className='bg-orange-50 text-gray-700 h-8 w-8 p-2 rounded-md' />
                        <select className='text-gray-300'>
                            <option>This Week</option>
                        </select>
                    </div>
                    <div className='flex justify-start my-2'>
                        <div>
                            <p className='text-gray-400'>All Orders</p>
                            <p className='text-gray-950'>450</p>
                        </div>
                        <div  className='ml-60'>
                            <p className='text-gray-400'>Pending</p>
                            <p className='text-gray-950'>5</p>
                        </div>
                        <div  className='ml-auto mr-4'>
                            <p className='text-gray-400'>Completed</p>
                            <p className='text-gray-950'>445</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-6/12 flex flex-col'>
                    <div className='mt-2 w-full flex'>
                        <div className='bg-white p-4 rounded-lg w-6/12 text-center'>
                            <div className='flex justify-between my-2'>
                                <h1 className='font-normal'>Marketing</h1>
                                <select className='text-gray-300'>
                                    <option>This Week</option>
                                </select>
                            </div>
                            <div className='flex justify-around'>
                                <div className='flex'>
                                    <FaCircle className='text-blue-500 h-2 w-2'/>
                                    <p className='ml-2 mb-1 font-extralight text-gray-400'>Acquisition</p>
                                </div>
                                <div className='flex'>
                                    <FaCircle className='text-purple-600 h-2 w-2'/>
                                    <p className='ml-2 mb-2 font-extralight text-gray-400'>Purchase</p>
                                </div>
                                <div className='flex'>
                                    <FaCircle className='text-orange-300 h-2 w-2'/>
                                    <p className='ml-2 mb-2 font-extralight text-gray-400'>Retention</p>
                                </div>
                            </div>
                            <div className='ml-12'>
                                <MarketingPiechart/>
                            </div>
                        </div>
                        <div className='flex flex-col ml-2 w-6/12'>
                            <div className='flex flex-col bg-blue-500 p-2 rounded-lg w-full h-36'>
                                <div className='flex justify-between mt-1'>
                                    <RxFileMinus className='bg-gray-400 text-white h-8 w-8 p-2 rounded-md' />
                                </div>
                                <div className='flex justify-start mt-6'>
                                    <div>
                                        <p className='text-white font-light'>All Products</p>
                                        <p className='text-white'>45</p>
                                    </div>
                                    <div  className='ml-14'>
                                        <p className='text-white font-light'>Active</p>
                                        <div className='flex'>
                                            <p className='text-white'>32</p>
                                            <p className='text-white font-thin ml-2'>+24%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col bg-white mt-2 p-2 rounded-lg w-full h-36'>
                                <div className='flex justify-between mt-1'>
                                    <BiCart className='bg-orange-50 text-black h-8 w-8 p-2 rounded-md' />
                                    <select className='text-gray-300'>
                                        <option>This Week</option>
                                    </select>
                                </div>
                                <div className='flex justify-start mt-6'>
                                    <div>
                                        <p className='text-red-400'>Abandoned Cart</p>
                                        <div className='flex'>
                                            <p className='text-gray-950'>20%</p>
                                            <p className='text-green-700 ml-2'>+0.00%</p>
                                        </div>
                                    </div>
                                    <div  className='ml-14'>
                                        <p className='text-gray-400'>Customers</p>
                                        <p className='text-gray-950'>30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 w-full bg-white rounded-lg flex flex-col'>
                        <div className='flex justify-between p-2'>
                            <div className='flex'>
                                <h1 className='font-normal'>Summary</h1>
                                <select className='text-blue-500 ml-3'>
                                    <option>Sales</option>
                                </select>
                            </div>
                            <select className='font-normal mr-2'>
                                <option>Last 7 Days</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <SummaryPiechart/>
                        </div>
                    </div>
                </div>
                <div className='w-6/12 ml-2 mt-2 p-1 rounded-lg bg-white'>
                    <h1 className='font-normal'>Recent Orders</h1>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://cdn.mos.cms.futurecdn.net/pZhRXi3LVneDQBYG29qbwV-320-80.png'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-red-300 p-1 text-center'>Pending</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677095/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png?tr=w-640'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-green-200 p-1 text-center'>Completed</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677095/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png?tr=w-640'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-green-200 p-1 text-center'>Completed</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://cdn.mos.cms.futurecdn.net/pZhRXi3LVneDQBYG29qbwV-320-80.png'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-red-300 p-1 text-center'>Pending</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677095/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png?tr=w-640'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-green-200 p-1 text-center'>Completed</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://cdn.mos.cms.futurecdn.net/pZhRXi3LVneDQBYG29qbwV-320-80.png'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-red-300 p-1 text-center'>Pending</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between m-2'>
                            <div className='flex justify-start'>
                                <img className='iphone-logo ml-5' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677095/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png?tr=w-640'/>
                                <div className='flex flex-col ml-20'>
                                    <p>iphone 13</p>
                                    <p>730000.00 x 1</p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-14'>
                                <p>12 Sept 2022</p>
                                <p className='rounded-lg bg-green-200 p-1 text-center'>Completed</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardMain