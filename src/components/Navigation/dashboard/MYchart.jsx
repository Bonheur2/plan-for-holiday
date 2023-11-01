import React from 'react'
import "./MYchart.css"
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { BiSolidMessageAdd } from "react-icons/bi";
import { useContext } from 'react';
import { AuthContext } from "../../../context/AppProvider";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
function MYchart() {
  const { fetchUsersData } = useContext(AuthContext);
  const { myTours } = useContext(AuthContext);
  const { fetchContact } = useContext(AuthContext);




  const data = [
    { name: 'Tour 1', uv: 4000 },
    { name: 'Tour 2', uv: 3000 },
    { name: 'Tour 3', uv: 2000 },
    { name: 'Tour 4', pv: 3500 },
    { name: 'Tour 5', uv: 1890 },
    { name: 'Tour 6', uv: 2390 },
    { name: 'Tour 7', uv: 3490 },
  ];
  return (
    <>
      <div>
        <div className="dashcontent">
          <div className="contentsd uuser">
            <FaUsersCog className='dashicon' />
            {fetchUsersData?.length}
            {" "}
            users
          </div>
          <div className="contentsd ttour">
            <PiAirplaneTiltFill className='dashicon' />
            {myTours?.length}
            {" "}
            Tours
          </div>
          <div className="contentsd mmessage">
            <BiSolidMessageAdd className='dashicon' />
            {fetchContact?.length}
            {" "}
            Message
          </div>
          <div className="contentsd bbooking">
            <FaChartBar className='dashicon' />
            Booking

          </div>
        </div>
        <div className='charts'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884D8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="uv" fill="#82CA9D" activeBar={<Rectangle fill="green" stroke="grey" />} />
          </BarChart>
        </div>
      </div>
    </>
  )
}
export default MYchart