import { FaChartPie, FaEllipsisV, FaProductHunt, FaUserFriends } from "react-icons/fa";
import PieChartsUI from "../charts/PieChartsUI";
import LineChartUI from "../charts/LineChartUI";
import { Progress } from 'antd';

const ChartMain = () => {
    return (
        <div className="pt-[25px] px-[25px] dark:bg-[#000] h-fit py-[12px]">
            <div className="flex items-center justify-between">
                <h1 className="text-[18px] md:text-[28px] cursor-pointer font-bold text-[#000033] dark:text-[#fff]">Dashboard</h1>
                <button className="rounded bg-[#000033] dark:bg-[#fff] text-white dark:text-[#000033] font-normal px-[15px] md:px-[30px] py-[5px] md:py-[10px] cursor-pointer">Print Report</button>
            </div>

            {/* card */}
            <div className="py-[25px] grid grid-rows-4 md:grid-cols-4 gap-[30px] md:h-[25vh]">
                <div className="card p-[1rem] w-[100%] h-[100px] border-l-[5px] border-[#00bbcc] cursor-pointer hover:shadow-lg transform ease-in-out duration-[.4s] hover:scale-[103%] rounded-lg text-white dark:text-[#000033] flex items-center justify-between bg-[#000033] dark:bg-[#fff] ">
                    <div className="">
                        <h2 className="font-bold text-[12px] leading-[17px]">Total Products</h2>
                        <h1 className="text-center text-[30px] font-extrabold ">54</h1>
                    </div>
                    <FaProductHunt size={40} />
                </div>

                <div className="card p-[1rem] w-[100%] h-[100px] border-l-[5px] border-[#00cc2c] cursor-pointer hover:shadow-lg transform ease-in-out duration-[.4s] hover:scale-[103%] rounded-lg text-white dark:text-[#000033] flex items-center justify-between bg-[#000033] dark:bg-[#fff] ">
                    <div className="">
                        <h2 className="font-bold text-[12px] leading-[17px]">Total Sales(Monthly)</h2>
                        <h1 className="text-center text-[30px] font-extrabold ">&#8358;450,954</h1>
                    </div>
                    <FaChartPie size={40} />
                </div>

                <div className="card p-[1rem] w-[100%] h-[100px] border-l-[5px] border-[#3d00cc] cursor-pointer hover:shadow-lg transform ease-in-out duration-[.4s] hover:scale-[103%] rounded-lg text-white dark:text-[#000033] flex items-center justify-between bg-[#000033] dark:bg-[#fff] ">
                    <div className="">
                        <h2 className="font-bold text-[12px] leading-[17px]">Total Users</h2>
                        <h1 className="text-center text-[30px] font-extrabold ">617,394</h1>
                    </div>
                    <FaUserFriends size={40} />
                </div>

                <div className="card p-[1rem] w-[100%] h-[100px] border-l-[5px] border-[#cc0000] cursor-pointer hover:shadow-lg transform ease-in-out duration-[.4s] hover:scale-[103%] rounded-lg text-white dark:text-[#000033] flex items-center justify-between bg-[#000033] dark:bg-[#fff] ">
                    <div className="">
                        <h2 className="font-bold text-[12px] leading-[17px]">Total Sales(Yearly)</h2>
                        <h1 className="text-center text-[30px] font-extrabold ">&#8358;5,411,448</h1>
                    </div>
                    <FaChartPie size={40} />
                </div>

            </div>

            {/* charts */}
            <div className="flex flex-col md:flex-row w-full gap-[15px]">
                <div className="w-[100%] md:basis-[65%] cursor-pointer bg-[#000033] dark:bg-[#f8f9fc] shadow-lg  rounded-t-md">
                    <div className="flex items-center bg-[#f8f9fc] justify-between shadow-md p-[8px] border border-[#ededed]">
                        <h2 className="font-bold">Sales Overview</h2>
                        <FaEllipsisV />
                    </div>
                    <div className="overflow-scroll md:overflow-auto w-[100%] md:basis-[65%]">
                        <LineChartUI />
                    </div>
                </div>
                <div className="basis-[35%] cursor-pointer bg-[#000033] dark:bg-[#f8f9fc] shadow-lg  rounded-t-md">
                    <div className="flex items-center bg-[#f8f9fc] justify-between shadow-md p-[8px] border border-[#ededed]">
                        <h2 className="font-bold">Resources</h2>
                        <FaEllipsisV />
                    </div>
                    <div className="">
                        <PieChartsUI />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full mt-[20px] gap-[15px]">
                <div className="basis-[65%] cursor-pointer bg-[#000033] dark:bg-[#f8f9fc] shadow-xl rounded-t-md">
                    <div className="flex items-center bg-[#f8f9fc] justify-between shadow-lg p-[8px] border border-[#ededed]">
                        <h2 className="font-bold">Delivery Progress</h2>
                        <FaEllipsisV />
                    </div>
                    <div className="py-[10px] px-[10px] text-white dark:text-[#000033] ">
                        <h1>Refund Products</h1>
                        <Progress percent={10} size="small" trailColor="#ededed" />
                        <h2>Customer Database </h2>
                        <Progress percent={50} size="small" trailColor="#ededed" />
                        <h2>Product Tracking</h2>
                        <Progress percent={60} size="small" trailColor="#ededed" />
                        <h2>Successful Delivery</h2>
                        <Progress percent={90} size="small" trailColor="#ededed" />
                    </div>
                </div>
                <div className="basis-[40%]">
                    <div className="flex items-center bg-[#f8f9fc] justify-between shadow-lg p-[8px] border border-[#ededed]">
                        <h2 className="font-bold">Place Ads Here</h2>
                        <FaEllipsisV />
                    </div>

                    <div className="py-[30px] px-[10px] text-center font-medium text-[#000033] dark:text-[#f5f5f5] ">
                        <marquee behavior="scroll" direction="">
                            <p>You want to advertise your <br /> product or services?</p>
                            <p>Chat us or give us a call on</p>
                            <p>08177507780</p>
                        </marquee>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ChartMain