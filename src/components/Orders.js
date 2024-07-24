import {React,useState,useEffect,useRef} from 'react';
import { RiNotification4Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BiCart } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import customerOrders from './mockData/customerOrderDetails';
import DataTable from "./DataTable/index"

const Orders  = ()=>{

    const location = useLocation();

    const [isContainerVisible, setContainerVisible] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [homeDelivery, setHomeDelivery] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [status, setStatus] = useState("All");
  const [customer, setCustomer] = useState("All");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(customerOrders);
  const [lastWeek, setLastWeek] = useState(false);
  const [lastMonth, setLastMonth] = useState(false);
  const [filtereSearch] = useState(customerOrders);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeCustomer = (event) => {
    setCustomer(event.target.value);
  };

  const handleButtonClick = () => {
    setContainerVisible(!isContainerVisible);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setContainerVisible(false);
    }
  };

  const handleFilter = () => {
    let filtered = customerOrders;

    // Filter by order type
    if (homeDelivery && !pickup) {
      filtered = filtered.filter(
        (order) => order.orderType === "Home Delivery",
      );
    } else if (!homeDelivery && pickup) {
      filtered = filtered.filter((order) => order.orderType === "Pick Up");
    } else if (homeDelivery && pickup) {
      filtered = filtered.filter(
        (order) =>
          order.orderType === "Home Delivery" || order.orderType === "Pick Up",
      );
    }

    // Filter by status
    if (status !== "All") {
      filtered = filtered.filter((order) => order.Status === status);
    }

    // Filter by customer
    if (customer !== "All") {
      filtered = filtered.filter((order) => order.name === customer);
    }

    // Filter by order total
    if (from !== "") {
      filtered = filtered.filter(
        (order) => parseInt(order.orderTotal) >= parseInt(from),
      );
    }
    if (to !== "") {
      filtered = filtered.filter(
        (order) => parseInt(order.orderTotal) <= parseInt(to),
      );
    }

    if (lastWeek) {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      filtered = filtered.filter(
        (order) => new Date(order.orderDate) >= oneWeekAgo,
      );
    }
    if (lastMonth) {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      filtered = filtered.filter(
        (order) => new Date(order.orderDate) >= oneMonthAgo,
      );
    }

    setFilteredOrders(filtered);
  };

  useEffect(() => {
    if (isContainerVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContainerVisible]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    let filteredOrdersBySearch = filtereSearch.filter((order) => {
      return (
        order.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        order.Status.toLocaleLowerCase().includes(
          searchTerm.toLocaleLowerCase(),
        ) ||
        order.orderType
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );
    });
    setFilteredOrders(filteredOrdersBySearch);
  };

    return (
        <div>
            <div>
              <div className='flex justify-between p-4'>
                  <h1 className='font-sans font-semibold'>Orders</h1>
                  <ul className='flex p-2 mx-6 justify-around'>
                      <select className='bg-orange-100 mx-2 rounded-lg p-1'>
                          <option>Nanny's Shop</option>
                      </select>
                      <RiNotification4Fill className='text-blue-600 mx-1 w-6 h-6'/>
                      <FaUserCircle className='text-blue-600 mx-1 w-6 h-6'/>
                  </ul>
              </div>
              <hr/>
              <div className='flex'>
                  <GoHomeFill className='text-blue-600 mx-3 my-1 w-6 h-6'/>
                  <p className='font-normal text-gray-400 mt-1'>{location.pathname}</p>
              </div>
            </div>
            <div className='flex flex-col bg-gray-200 p-6 mb-2 '>
              <div className='flex justify-between mb-3'>
                  <h1 className='font-normal'>Orders Summary</h1>
                  <button className='text-white bg-blue-500 rounded-lg p-2'>+  Create a New Order</button>
              </div>
              <div className='flex mb-1'>
                  <div className='flex flex-col bg-white ml-1 p-2 rounded-lg w-2/5'>
                      <div className='flex justify-between mt-1'>
                          <BiCalendar className='bg-orange-50 text-gray-700 h-8 w-8 p-2 rounded-md' />
                          <select className='text-gray-300'>
                              <option>This Week</option>
                          </select>
                      </div>
                      <div className='flex justify-around mt-3'>
                          <div className='ml-0.5'>
                              <p className='text-gray-400'>All Orders</p>
                              <p className='text-gray-950'>450</p>
                          </div>
                          <div  className='mx-2'>
                              <p className='text-gray-400'>Pending</p>
                              <p className='text-gray-950'>5</p>
                          </div>
                          <div  className='ml-2'>
                              <p className='text-gray-400'>Completed</p>
                              <p className='text-gray-950'>320</p>
                          </div>
                      </div>
                  </div>
                  <div className='flex flex-col bg-white ml-1 p-2 rounded-lg w-2/5'>
                      <div className='flex justify-between my-2'>
                          <BiCalendar className='bg-orange-50 text-gray-700 h-8 w-8 p-2 rounded-md' />
                          <select className='text-gray-300'>
                              <option>This Week</option>
                          </select>
                      </div>
                      <div className='flex justify-around mt-3'>
                          <div>
                              <p className='text-gray-400'>Cancelled</p>
                              <div className='flex'>
                                  <p className='text-gray-950'>30</p>
                                  <p className='text-red-700 mx-2'>+15.80%</p>
                              </div>
                          </div>
                          <div  className='mx-2'>
                              <p className='text-gray-400'>Returned</p>
                              <p className='text-gray-950'>20</p>
                          </div>
                          <div  className='ml-2'>
                              <p className='text-gray-400'>Damaged</p>
                              <p className='text-gray-950'>5</p>
                          </div>
                      </div>
                  </div>
                  <div className='flex flex-col bg-white ml-1 p-2 rounded-lg w-1/5'>
                      <div className='flex justify-between mt-1'>
                          <BiCart className='bg-orange-50 text-black h-8 w-8 p-2 rounded-md' />
                          <select className='text-gray-300'>
                              <option>This Week</option>
                          </select>
                      </div>
                      <div className='flex justify-between mt-6'>
                          <div>
                              <p className='text-red-400'>Abandoned Cart</p>
                              <div className='flex'>
                                  <p className='text-gray-950'>20%</p>
                                  <p className='text-green-700 ml-2'>+0.00%</p>
                              </div>
                          </div>
                          <div className='mr-0.5'>
                              <p className='text-gray-400'>Customers</p>
                              <p className='text-gray-950'>30</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="p-4 bg-white h-3/4 rounded-lg ">
                <div className="flex justify-between ">
                <div>
                    <h1 className="bold">Customer Orders</h1>
                </div>
                <div>
                    <input
                    type="text"
                    className="p-1 border-2 rounded-lg"
                    placeholder="Search"
                    onChange={handleSearch}
                    value={searchTerm}
                    />
                    <div style={{ position: "relative", display: "inline-block" }}>
                    <button
                        ref={buttonRef}
                        onClick={handleButtonClick}
                        className="m-2 p-2 bg-slate-200 w-14 rounded-lg"
                    >
                        Filter
                    </button>
                    {isContainerVisible && (
                        <div
                        ref={containerRef}
                        style={{
                            width: "400px",
                            height: "400px",
                            backgroundColor: "white",
                            position: "absolute",
                            top: "10px",
                            left: "-350px",
                            right: "200px",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            padding: "20px",
                            zIndex: 1000,
                        }}
                        >
                        <h1 className="font-bold text-lg">Filter</h1>
                        <p className="mt-2">Order type</p>
                        <div className="flex">
                            <div className="mt-2">
                            <input
                                type="checkbox"
                                id="homeDelivery"
                                checked={homeDelivery}
                                onChange={() => setHomeDelivery(!homeDelivery)}
                            />
                            <label className="ml-2" htmlFor="homeDelivery">
                                Home Delivery
                            </label>
                            </div>
                            <div className="mt-2 ml-4">
                            <input
                                type="checkbox"
                                id="pickup"
                                checked={pickup}
                                onChange={() => setPickup(!pickup)}
                            />
                            <label className="ml-2" htmlFor="pickup">
                                Pick up
                            </label>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col">
                            <label className="mb-1" htmlFor="status">
                            Status
                            </label>
                            <select
                            className="border-2 rounded-lg"
                            id="status"
                            value={status}
                            onChange={handleChange}
                            >
                            <option value="canceled">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            </select>
                        </div>
                        <div className="mt-4 flex flex-col">
                            <label className="mb-1" htmlFor="status">
                            Customer
                            </label>
                            <select
                            id="status"
                            value={customer}
                            onChange={handleChangeCustomer}
                            className="border-2 rounded-lg"
                            >
                            <option value="canceled">All</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            </select>
                        </div>
                        <div className="flex">
                            <div className="mt-2">
                            <input
                                className="border-2"
                                type="number"
                                id="from"
                                onChange={(e) => setFrom(e.target.value)}
                            />
                            <label className="ml-2" htmlFor="from">
                                From
                            </label>
                            </div>
                            <div className="mt-2 ml-4">
                            <input
                                className="border-2"
                                type="number"
                                id="to"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                            <label className="ml-2" htmlFor="to">
                                To
                            </label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mt-2">
                            <input
                                type="checkbox"
                                id="lastWeek"
                                checked={lastWeek}
                                onChange={() => setLastWeek(!lastWeek)}
                            />
                            <label className="ml-2" htmlFor="lastWeek">
                                Last Week
                            </label>
                            </div>
                            <div className="mt-2 ml-4">
                            <input
                                type="checkbox"
                                id="lastMonth"
                                checked={lastMonth}
                                onChange={() => setLastMonth(!lastMonth)}
                            />
                            <label className="ml-2" htmlFor="lastMonth">
                                Last Month
                            </label>
                            </div>
                        </div>
                        <button onClick={handleFilter} className="p-3 bg-blue-400">
                            Filter
                        </button>
                        </div>
                    )}
                    </div>

                    {/* <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    />
                </Search> */}
                </div>
                </div>
                <DataTable filteredOrders={filteredOrders} />
            
              </div>
            </div>
        </div>
    );
}

export default Orders;



