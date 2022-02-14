import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import SimilarData from '../partials/dashboard/SimilarData';
import {
    Routes,
    Route,
    useLocation
  } from 'react-router-dom';
import './User.css'
const User = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [customer,setCustomer] = useState({});
    const location = useLocation();
    const requestOptions = {
        method:'get',
        headers:{ "Access-Control-Request-Headers": "*",
                "Access-Control-Request-Method": "*",
                "Access-Control-Allow-Origin": "*"
            }
        }
    useEffect(()=> {
        fetch('http://34.122.147.59:8080/get_user/'+location.pathname.split('/')[2],requestOptions)
        .then(r=>r.json())
        .then(data=>{  
            console.log(data);
            setCustomer(data.data);
        })},[])
    // const customer = 
    //     {
    //       "area1_id": "CILINCING", 
    //       "area1_resi": "CILINCING", 
    //       "area2_id": "CILINCING", 
    //       "area2_resi": "CILINCING", 
    //       "cd_sex": "M", 
    //       "city_resi": "JAKARTA UTARA", 
    //       "cluster": "1", 
    //       "date_idx": "06", 
    //       "dt_birth": "06/08/1965", 
    //       "email_1": "", 
    //       "email_2": "", 
    //       "id": 1, 
    //       "insertion_time": "Wed, 17 Nov 2021 05:31:13 GMT", 
    //       "is_deleted": 0, 
    //       "ln_id_addr1": "JLN  BAKTI RAYA NO 59", 
    //       "ln_id_addr2": "", 
    //       "ln_resi_addr1": "JLN  BAKTI RAYA NO 59", 
    //       "ln_resi_addr2": "SESUAI PETUNJUK", 
    //       "modification_time": "Wed, 17 Nov 2021 05:31:13 GMT", 
    //       "month_idx": "08", 
    //       "nama_ibu_kandung": "ruda", 
    //       "name": "ACO ISMAIL", 
    //       "no_id": "1572040608610000", 
    //       "no_rt_rw_id": "006/006", 
    //       "no_rt_rw_resi": "006/006", 
    //       "phone1_resi": "", 
    //       "phone1_resi2": "", 
    //       "phone2_resi": "", 
    //       "phone2_resi2": "", 
    //       "phone_mobile": "081218596997", 
    //       "phone_mobile2": "", 
    //       "place_birth": "JAKARTA", 
    //       "post_code_id": "14120.0", 
    //       "post_code_resi": "14120.0", 
    //       "singleid": "206086500001", 
    //       "year_idx": "1965"
    //     }
    return ( 
    <div className="flex h-screen overflow-hidden  user__data">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
                            <div className="px-5 pt-5">
                                <table className="table-auto w-full">
                                    {/* Table header */}
                                    <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                                        <tr></tr>
                                    </thead>
                                
                                    <tbody className="text-sm divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Name</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.name}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">SingleID</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.singleid}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">No. KTP</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.no_id}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Gender</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.cd_sex}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Tanggal Lahir</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.dt_birth}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Tempat Lahir</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.place_birth}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Ln_Id_Addr1</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.ln_id_addr1}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Ln_Id_Addr2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.ln_id_addr2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Ln_Resi_Addr1</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.ln_resi_addr1}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">Ln_Resi_Addr2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.ln_resi_addr2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">no_rt_rw_id</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.no_rt_rw_id}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">no_rt_rw_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.no_rt_rw_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">area1_id</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.area1_id}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">area1_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.area1_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">area2_id</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.area2_id}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">area2_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.area2_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">city_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.city_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">area1_id</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.area1_id}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">post_code_id</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.post_code_id}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">post_code_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.post_code_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">email_1</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.email_1}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">email_2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.email_2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">phone1_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.phone1_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">phone1_resi2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.phone1_resi2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">phone2_resi</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.phone2_resi}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">phone2_resi2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.phone2_resi2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">phone_mobile</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.phone_mobile}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-slate-800">phone_mobile2</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">:</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-slate-800">{customer.phone_mobile2}</div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            
                            {/* Chart built with Chart.js 3 */}
                        </div>
                        
                    </div>
                    <SimilarData/>
                </div>
                
            </main>
            
        </div>
        
    </div> 
    );
}
 
export default User;