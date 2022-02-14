import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
const Input = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const customer = 
        {
          "area1_id": "CILINCING", 
          "area1_resi": "CILINCING", 
          "area2_id": "CILINCING", 
          "area2_resi": "CILINCING", 
          "cd_sex": "M", 
          "city_resi": "JAKARTA UTARA", 
          "cluster": "1", 
          "date_idx": "06", 
          "dt_birth": "06/08/1965", 
          "email_1": "", 
          "email_2": "", 
          "id": 1, 
          "insertion_time": "Wed, 17 Nov 2021 05:31:13 GMT", 
          "is_deleted": 0, 
          "ln_id_addr1": "JLN  BAKTI RAYA NO 59", 
          "ln_id_addr2": "", 
          "ln_resi_addr1": "JLN  BAKTI RAYA NO 59", 
          "ln_resi_addr2": "SESUAI PETUNJUK", 
          "modification_time": "Wed, 17 Nov 2021 05:31:13 GMT", 
          "month_idx": "08", 
          "nama_ibu_kandung": "ruda", 
          "name": "ACO ISMAIL", 
          "no_id": "1572040608610000", 
          "no_rt_rw_id": "006/006", 
          "no_rt_rw_resi": "006/006", 
          "phone1_resi": "", 
          "phone1_resi2": "", 
          "phone2_resi": "", 
          "phone2_resi2": "", 
          "phone_mobile": "081218596997", 
          "phone_mobile2": "", 
          "place_birth": "JAKARTA", 
          "post_code_id": "14120.0", 
          "post_code_resi": "14120.0", 
          "singleid": "206086500001", 
          "year_idx": "1965"
        }

    const [name,setName] = useState(customer.name); // onChange={(e)=> handleName(e)}
    const [noktp,setNoktp] = useState(customer.no_id); // onChange={(e)=> handleNoktp(e)}
    const [namaIbuKandung,setNamaIbuKandung] = useState(customer.nama_ibu_kandung); // onChange={(e)=> handleNoktp(e)}
    const [gender,setGender] = useState(customer.cd_sex); // onChange={(e)=> handleGender(e)}
    const [dob,setDob] = useState(customer.dt_birth);  // onChange={(e)=> handleDob(e)}
    const [placebirth,setPlacebirth] = useState(customer.place_birth);    // onChange={(e)=> handlePlacebirth(e)}
    const [lnIdAddress1,setLnIdAddress1] = useState(customer.ln_id_addr1);    // onChange={(e)=> handleLnidaddress1(e)}
    const [lnIdAddress2,setLnIdAddress2] = useState(customer.ln_id_addr2);    // onChange={(e)=> handleLnidaddress2(e)}
    const [lnResiAddress1,setLnResiAddress1] = useState(customer.ln_resi_addr1);    // onChange={(e)=> handleLnresiaddress1(e)}
    const [lnResiAddress2,setLnResiAddress2] = useState(customer.ln_resi_addr2);    // onChange={(e)=> handleLnresiaddress2(e)}
    const [rtrwId,setRtrwId] = useState(customer.no_rt_rw_id);    // onChange={(e)=> handleRtrwid(e)}
    const [rtrwResi,setRtrwResi] = useState(customer.no_rt_rw_resi);    // onChange={(e)=> handleRtrwresi(e)}
    const [area1Id,setArea1Id] = useState(customer.area1_id);  // onChange={(e)=> handleArea1id(e)}
    const [area1Resi,setArea1Resi] = useState(customer.area1_resi);  // onChange={(e)=> handleArea1resi(e)}
    const [area2Id,setArea2Id] = useState(customer.area2_id);  // onChange={(e)=> handleArea2id(e)}
    const [area2Resi,setArea2Resi] = useState(customer.area2_resi);  // onChange={(e)=> handleArea2resi(e)}
    const [cityResi,setCityResi] = useState(customer.city_resi);    // onChange={(e)=> handleCityresi(e)}
    const [postCodeId,setPostCodeId] = useState(customer.post_code_id);    // onChange={(e)=> handlePostcodeid(e)}
    const [postCodeResi,setPostCodeResi] = useState(customer.post_code_resi);    // onChange={(e)=> handlePostcoderesi(e)}
    const [email1,setEmail1] = useState(customer.email_1);    // onChange={(e)=> handleEmail1(e)}
    const [email2,setEmail2] = useState(customer.email_2);    // onChange={(e)=> handleEmail2(e)}
    const [phone1Resi,setPhone1Resi] = useState(customer.phone1_resi);    // onChange={(e)=> handlePhone1resi(e)}
    const [phone1Resi2,setPhone1Resi2] = useState(customer.phone2_resi);  // onChange={(e)=> handlePhone1resi2(e)}
    const [phone2Resi,setPhone2Resi] = useState(customer.phone1_resi2);    // onChange={(e)=> handlePhone2resi(e)}
    const [phone2Resi2,setPhone2Resi2] = useState(customer.phone2_resi2);  // onChange={(e)=> handlePhone2resi2(e)}
    const [phoneMobile,setPhoneMobile] = useState(customer.phone_mobile);  // onChange={(e)=> handlePhonemobile(e)}
    const [phoneMobile2,setPhoneMobile2] = useState(customer.phone_mobile2);    // onChange={(e)=> handlePhonemobile2(e)}

    const handleInput = () => {
        const jsoninput = {
            "Name": name,
            "No_Id": noktp,
            "Nama_Ibu_Kandung": namaIbuKandung,
            "Cd_Sex": gender,
            "Dt_Birth": dob,
            "Place_Birth": placebirth,
            "Ln_Id_Addr1": lnIdAddress1,
            "Ln_Id_Addr2": lnIdAddress2,
            "Ln_Resi_Addr1": lnResiAddress1,
            "Ln_Resi_Addr2": lnResiAddress2,
            "No_Rt_Rw_Id": rtrwId,
            "No_Rt_Rw_Resi": rtrwResi,
            "Area1_Id": area1Id,
            "Area1_Resi": area1Resi,
            "Area2_Id": area2Id,
            "Area2_Resi": area2Resi,
            "City_Resi": cityResi,
            "Post_Code_Id": postCodeId,
            "Post_Code_Resi": postCodeResi,
            "Email_1": email1,
            "Email_2": email2,
            "Phone1_Resi": phone1Resi,
            "Phone2_Resi": phone1Resi2,
            "Phone1_Resi2": phone2Resi,
            "Phone2_Resi2": phone2Resi2,
            "Phone_Mobile": phoneMobile,
            "Phone_Mobile2": phoneMobile2,
        }
        const requestOptions = {
            method:'post',
            headers:{ 
                    'Content-Type': 'application/json',
                    "Access-Control-Request-Headers": "*",
                    "Access-Control-Request-Method": "*",
                    "Access-Control-Allow-Origin": "*"
                },
            body:JSON.stringify(jsoninput)
            }
        

        fetch('http://34.122.147.59:8080/user',requestOptions)
        .then(r=>r.json())
        .then(data=>console.log(data))
        
        return console.log(jsoninput);
    }
    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }
    
    const handleNoktp = (e) => {
        e.preventDefault();
        setNoktp(e.target.value)
    }

    const handleNamaibukandung = (e) => {
        e.preventDefault();
        setNamaIbuKandung(e.target.value)
    }
    
    const handleGender = (e) => {
        e.preventDefault();
        setGender(e.target.value)
    }
    
    const handleDob = (e) => {
        e.preventDefault();
        setDob(e.target.value)
    }
    
    const handlePlacebirth = (e) => {
        e.preventDefault();
        setPlacebirth(e.target.value)
    }
    
    const handleLnidaddress1 = (e) => {
        e.preventDefault();
        setLnIdAddress1(e.target.value)
    }
    
    const handleLnidaddress2 = (e) => {
        e.preventDefault();
        setLnIdAddress2(e.target.value)
    }
    
    const handleLnresiaddress1 = (e) => {
        e.preventDefault();
        setLnResiAddress1(e.target.value)
    }
    
    const handleLnresiaddress2 = (e) => {
        e.preventDefault();
        setLnResiAddress2(e.target.value)
    }
    
    const handleRtrwid = (e) => {
        e.preventDefault();
        setRtrwId(e.target.value)
    }
    
    const handleRtrwresi = (e) => {
        e.preventDefault();
        setRtrwResi(e.target.value)
    }
    
    const handleArea1id = (e) => {
        e.preventDefault();
        setArea1Id(e.target.value)
    }
    
    const handleArea1resi = (e) => {
        e.preventDefault();
        setArea1Resi(e.target.value)
    }
    
    const handleArea2id = (e) => {
        e.preventDefault();
        setArea2Id(e.target.value)
    }
    
    const handleArea2resi = (e) => {
        e.preventDefault();
        setArea2Resi(e.target.value)
    }
    
    const handleCityresi = (e) => {
        e.preventDefault();
        setCityResi(e.target.value)
    }
    
    const handlePostcodeid = (e) => {
        e.preventDefault();
        setPostCodeId(e.target.value)
    }
    
    const handlePostcoderesi = (e) => {
        e.preventDefault();
        setPostCodeResi(e.target.value)
    }
    
    const handleEmail1 = (e) => {
        e.preventDefault();
        setEmail1(e.target.value)
    }
    
    
    const handleEmail2 = (e) => {
        e.preventDefault();
        setEmail2(e.target.value)
    }
    
    const handlePhone1resi = (e) => {
        e.preventDefault();
        setPhone1Resi(e.target.value)
    }
    
    const handlePhone1resi2 = (e) => {
        e.preventDefault();
        setPhone1Resi2(e.target.value)
    }
    
    const handlePhone2resi = (e) => {
        e.preventDefault();
        setPhone2Resi(e.target.value)
    }
    
    const handlePhone2resi2 = (e) => {
        e.preventDefault();
        setPhone2Resi2(e.target.value)
    }
    
    const handlePhonemobile = (e) => {
        e.preventDefault();
        setPhoneMobile(e.target.value)
    }
    
    const handlePhonemobile2 = (e) => {
        e.preventDefault();
        setPhoneMobile2(e.target.value)
    }
    



    return ( 
        <div className="flex h-screen overflow-hidden  user__data">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
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
                                                    <input type="text" name="name" value={name} onChange={(e)=> handleName(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">No. KTP</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={noktp} onChange={(e)=> handleNoktp(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Nama Ibu Kandung</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={namaIbuKandung} onChange={(e)=> handleNamaibukandung(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Gender</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={gender}  onChange={(e)=> handleGender(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Tanggal Lahir</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={dob} onChange={(e)=> handleDob(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Tempat Lahir</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={placebirth} onChange={(e)=> handlePlacebirth(e)}  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Ln_Id_Addr1</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={lnIdAddress1} onChange={(e)=> handleLnidaddress1(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Ln_Id_Addr2</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={lnIdAddress2} onChange={(e)=> handleLnidaddress2(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Ln_Resi_Addr1</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={lnResiAddress1} onChange={(e)=> handleLnresiaddress1(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">Ln_Resi_Addr2</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={lnResiAddress2} onChange={(e)=> handleLnresiaddress2(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">no_rt_rw_id</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={rtrwId} onChange={(e)=> handleRtrwid(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">no_rt_rw_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={rtrwResi} onChange={(e)=> handleRtrwresi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">area1_id</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={area1Id} onChange={(e)=> handleArea1id(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">area1_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={area1Resi} onChange={(e)=> handleArea1resi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">area2_id</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={area2Id} onChange={(e)=> handleArea2id(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">area2_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={area2Resi} onChange={(e)=> handleArea2resi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">city_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={cityResi} onChange={(e)=> handleCityresi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">post_code_id</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={postCodeId}  onChange={(e)=> handlePostcodeid(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">post_code_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={postCodeResi} onChange={(e)=> handlePostcoderesi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">email_1</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={email1} onChange={(e)=> handleEmail1(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">email_2</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={email2} onChange={(e)=> handleEmail2(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">phone1_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name"  value={phone1Resi} onChange={(e)=> handlePhone1resi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">phone1_resi2</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={phone1Resi2} onChange={(e)=> handlePhone1resi2(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">phone2_resi</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={phone2Resi} onChange={(e)=> handlePhone2resi(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">phone2_resi2</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={phone2Resi2} onChange={(e)=> handlePhone2resi2(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">phone_mobile</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={phoneMobile} onChange={(e)=> handlePhonemobile(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-slate-800">phone_mobile2</div>
                                                </td>
                                                
                                                <td className="p-2 whitespace-nowrap">
                                                    <input type="text" name="name" value={phoneMobile2} onChange={(e)=> handlePhonemobile2(e)} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>

                                                </td>
                                                <td>
                                                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleInput}>Submit</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                
                                {/* Chart built with Chart.js 3 */}
                            </div>
                            
                        </div>
                    </div>
                    
                </main>
            </div>
        
        </div> 
     );
}
 
export default Input;