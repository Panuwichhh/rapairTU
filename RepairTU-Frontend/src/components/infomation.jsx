import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Info() {

    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState(null); // Initialize state for postInfo

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/upload/${postId}`);
                const data = response.data;
                setPostInfo(data);
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };

        fetchData();
    }, [postId]);

    if (!postInfo) return <p>Loading...</p>; // Display a loading message while data is being fetched

    return (
        <>
            <div className="flex col-2 ">
                <div className="w-1/2 w-full h-full ">
                    <div className="flex flex-col items-center justify-center text-center justify-center place-content-center h-screen p-3 bg-gradient-to-l from-[#FF0000] to-[#FFD705] rounded-tr-[7rem] rounded-br-[7rem] ">
                        <img className="w-[50em] h-[40rem] bg-gray-400 my-10 mx-10" src={`http://localhost:3000/api/${postInfo.image_path.replace(/\\/g, '/')}`} alt="" />
                    </div>
                </div>
                <div className="w-1/2  w-full">
                    <p className="text-[5rem] ml-5">{postInfo.location}</p>
                    <p className="test-[5rem] ml-5">{postInfo.issue}</p>
                    <div className="flex flex-col items-center">
                        <div className="p-10  h-1/2 mx-5 mt-5 shadow-lg rounded-2xl bg-gray-200">
                            {postInfo.details}
                        </div>
                        <button className=" shadow-lg bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-10 mt-10 rounded" type="button">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Info
