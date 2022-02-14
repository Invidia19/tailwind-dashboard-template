import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10({customers}) {

  

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Customers</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">SingleID</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">No. KTP</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Nama Ibu Kandung</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Gender</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Tanggal lahir</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Tempat Lahir</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Opsi</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-left font-medium text-blue-500">{customer.singleid}</div>
                          
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800">{customer.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.no_id}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-left">{customer.nama_ibu_kandung}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.cd_sex}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.dt_birth}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.place_birth}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <Link to={"/user/"+customer.id}>
                          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                            <span className="hidden xs:block ml-2">Informasi</span>
                          </button>  
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
