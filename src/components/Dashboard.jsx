import { FaBars, FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa"
import Switcher from "../utility/Switcher";
import profile from '../assets/nathaniel.jpeg'

const Dashboard = ({ onHandle }) => {
    return (
        <div className="bg-[#f5f5f5] dark:bg-[#000]">
            <div className="flex flex-col md:flex-row items-start md:items-center h-[120px] md:h-[70px] justify-between shadow-lg px-[25px] dark:border-b-[#f8f9fc]/[0.2] dark:border-b-[1px] dark:bg-[#000033] ">
                <div className="flex items-center rounded-[5px] py-[10px] md:py-[0px]">
                    <div className="cursor-pointer pr-[13px] text-[#000033] dark:text-[#f8f9fc]">
                        <FaBars onClick={onHandle} />
                    </div>
                    <input type="text" className="outline-none px-[13px] rounded-l-[5px] bg-[#000033] dark:bg-[#f8f9fc] h-[40px] w-[260px] md:w-[350px] placeholder:text-[18px] placeholder:text-white dark:placeholder:text-[#000033] text-white dark:text-[#000033]" placeholder="Search" />
                    <div className="bg-[#181855] cursor-pointer text-white h-[40px] p-[10px] rounded-r-[5px] flex items-center justify-center">
                        <FaSearch />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-[25px] pb-[10px]">
                    <div className="flex items-center gap-[15px] cursor-pointer border-r-[1px] border-r-[#000033]/[0.3] dark:border-r-[#f8f9fc]/[0.3] pr-[13px] dark:text-[#fff] text-[#000033]">
                        <FaEnvelope />
                        <FaRegBell />
                    </div>
                    <div className="flex items-center gap-[15px] cursor-pointer">
                        <p className="font-bold text-[#000033] dark:text-[#fff]">Nathaniel Nosa</p>
                        <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                            <img src={profile} alt="" className="w-[100%]" />
                        </div>
                    </div>
                    <Switcher />
                </div>
            </div>
        </div>
    )
}

export default Dashboard