const SimilarData = () => {
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
    return ( 
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <div className="px-5 pt-5">
                <h2 className="font-semibold text-slate-800">SingleID yang sama</h2>
            </div>
            <div className="px-5 pt-5  divide-y">
                <div className="">
                    <h2 className="font-semibold text-slate-800 my-4">{customer.name}</h2>
                </div>
                <div className="">
                    <h2 className="font-semibold text-slate-800 my-4">{customer.name}</h2>
                </div>
                <div className="">
                    <h2 className="font-semibold text-slate-800 my-4">{customer.name}</h2>
                </div>
                <div className="">
                    <h2 className="font-semibold text-slate-800 my-4">{customer.name}</h2>
                </div>
            </div>
        </div>
     );
}
 
export default SimilarData;