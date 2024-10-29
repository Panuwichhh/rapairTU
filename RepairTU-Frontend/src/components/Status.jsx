import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Status() {

    const [repairedItems, setRepairedItems] = useState([]);
    const [pendingItems, setPendingItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/upload');
                const data = response.data;

                const repaired = data.filter(item => item.status === 'repaired');
                const pending = data.filter(item => item.status === 'pending');

                setRepairedItems(repaired);
                setPendingItems(pending);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    console.log(pendingItems);
    console.log(repairedItems);
    // สร้าง state เพื่อเก็บสถานะปัจจุบันของสวิตช์
    const [isRepaired, setIsRepaired] = useState(true);

    // ฟังก์ชันจัดการการเปลี่ยนสถานะของสวิตช์
    const handleToggle = () => {
        setIsRepaired(!isRepaired); // สลับสถานะเมื่อคลิก
    };


    return (
        <>
            <div className="w-full  bg-[##F6F6F6] flex items-center indent-10">
                <h1 className="font-bold text-5xl text-[#340000] my-5">STATUS</h1>
            </div>

            <div className="w-full h-[50rem] bg-gradient-to-t from-[#FFD705] to-[#FF0000] rounded-t-[35px]">

                <div className="w-[20%] h-[5%]"></div>
                <div className="flex justify-between items-center">
                    <label className="inline-flex items-center cursor-pointer ">
                        <input type="checkbox" id="toggleSwitch" className="sr-only peer"


                            onChange={handleToggle} // เรียกฟังก์ชันเมื่อมีการเปลี่ยนสถานะ
                            checked={!isRepaired} />
                        <div className="relative w-72 h-14 ml-20
                     rounded-full peer dark:bg-[#340000] 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    after:absolute after:top-[4px] after:start-[6px] after:bg-[#FFD705] after:rounded-full 
                    after:h-12 after:w-[48%] after:transition-all peer-checked:bg-[#340000]">
                            <div className="flex items-center justify-between h-full px-4">
                                <span className="text-[#340000] font-semibold ml-5 z-10">REPAIRED</span>
                                <span className="text-[#340000] font-semibold  z-10">PENDING REPAIR</span>
                            </div>
                        </div>
                    </label>

                    <Link to="/Upload" > <button id="to_add_page" className="text-5xl text-white mr-12 fa-solid fa-plus hover:opacity-80"></button></Link>
                </div>

                {/* <!-- Centering the gray box --> */}
                <div className="flex justify-center items-center w-full h-[75%] mt-10">
                    <div id="statusBox" className="w-[85%] h-[90%] bg-white rounded-md overflow-y-auto">
                        {isRepaired ? (
                            // แสดงรายการเมื่อสถานะเป็น "Repaired"
                            repairedItems.map((item, index) => (
                                <a href={`/Infomation/${item._id.toString()}`} key={index} className="flex justify-between p-2 bg-white  shadow-2xl hover:shadow-gray-500 shadow-inner ">
                                    <div class="w-1/5   flex items-center justify-center">
                                        <div class="w-20 h-20 rounded-md overflow-hidden border-2 border-gray-300 shadow-lg">
                                            <img src={`http://localhost:3000/api/${item.image_path.replace(/\\/g, '/')}`} class="w-full h-full object-cover" alt="images"></img>
                                        </div>
                                    </div>
                                    <div class="w-full h-full">
                                        <div class=" w-full h-1/2 font-black text-[3vh] flex items-center ">
                                            <p>{item.issue}</p>
                                            <p class="font-normal text-[15px] ml-10 ">{item.time}</p>
                                        </div>
                                        <div class=" w-full h-1/2 text-gray-500 ">
                                            {item.location}
                                        </div>
                                    </div>
                                    <div class="w-28 flex items-center justify-center ">
                                        <div id="status_color" class="w-5 h-5 bg-green-500 rounded-full"></div>
                                    </div>
                                </a>
                            ))
                        ) : (
                            // แสดงรายการเมื่อสถานะเป็น "Pending Repair"
                            pendingItems.map((item, index) => (
                                <a href={`/Infomation/${item._id.toString()}`} key={index} className="flex justify-between p-2 bg-white  shadow-2xl hover:shadow-gray-500 shadow-inner ">
                                    <div class="w-1/5   flex items-center justify-center">
                                        <div class="w-20 h-20 rounded-md overflow-hidden border-2 border-gray-300 shadow-lg">
                                            <img src={`http://localhost:3000/api/${item.image_path.replace(/\\/g, '/')}`} class="w-full h-full object-cover" alt="images"></img>
                                        </div>
                                    </div>
                                    <div class="w-full h-full">
                                        <div class=" w-full h-1/2 font-black text-[3vh] flex items-center ">
                                            <p>{item.issue}</p>
                                            <p class="font-normal text-[15px] ml-10 ">{item.time}</p>
                                        </div>
                                        <div class=" w-full h-1/2 text-gray-500 ">
                                            {item.location}
                                        </div>
                                    </div>
                                    <div class="w-28 flex items-center justify-center ">
                                        <div id="status_color" class="w-5 h-5 bg-red-500 rounded-full"></div>
                                    </div>
                                </a>
                            ))
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Status