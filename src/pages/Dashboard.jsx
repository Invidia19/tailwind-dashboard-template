import React, { useState,useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalData,setTotalData]  = useState(0);
  const [totalSingleid,setTotalSingleid]  = useState(0);
  const [mostOrder,setMostOrder]  = useState('');
  const [mostCity,setMostCity]  = useState('');
  const [recentUser,setRecentUser] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method:'get',
      headers:{ "Access-Control-Request-Headers": "*",
              "Access-Control-Request-Method": "*",
              "Access-Control-Allow-Origin": "*"
          }
      }
    fetch('http://34.122.147.59:8080/total_data',requestOptions)
     .then(r=>r.json())
     .then(data=>{
        setTotalData(data.data.total_data);
        setTotalSingleid(data.data.total_singleid);
        setMostOrder(data.data.total_mostuser);
        setMostCity(data.data.total_mostcity);
        console.log(data);
     })

     const p = new Promise(resolve => setTimeout(() => {
        fetch('http://34.122.147.59:8080/get_user',requestOptions)
        .then(r=>r.json())
        .then(data=>{
          setRecentUser(data);
          console.log(data);
        })
        .catch(e=>console.log("user_error",e))
     },15000))
     
    
  },[])

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 title={"Total Data"} value={totalData}/>
              <DashboardCard01 title={"Total SingleID"} value={totalSingleid}/>
              <DashboardCard01 title={"Most Order"} value={mostOrder}/>
              <DashboardCard01 title={"Most City"} value={mostCity}/>
              {/* Card (Customers) */}
              {recentUser.data && <DashboardCard10 customers={recentUser.data}/>}
              
              
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;