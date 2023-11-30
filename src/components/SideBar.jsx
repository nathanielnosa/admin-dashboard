import { AiFillDashboard } from 'react-icons/ai';
import { FaBars, FaChartBar, FaChevronRight, FaPen, FaPlus, FaRegSun, FaStickyNote, FaTable, FaTrash, FaUserCircle, FaWrench } from 'react-icons/fa';
import Switcher from '../utility/Switcher';
const SideBar = ({ onHandle }) => {
    return (
        <div className="bg-[#f5f5f5] dark:bg-[#000] h-[175vh] px-[25px]">
            <div className="px-[2rem] flex items-center justify-center py-[1rem] border-b-[1px] border-[#000]/[0.3] dark:border-[#f5f5f5]/[0.3]">
                <h1 className="text-[#000037] dark:text-[#fff] text-[1.9rem] font-extrabold">Admin</h1>
                {/* toggle */}
                <div className="md:hidden cursor-pointer ml-[1rem] flex items-center gap-[30px] text-[#000033] dark:text-[#f5f5f5]">
                    <FaBars onClick={onHandle} />
                    <Switcher />
                </div>
            </div>
            <div className="text-[#000037] dark:text-[#fff] flex items-center justify-center gap-[.5rem] py-[1rem] border-b-[1px] border-[#000]/[0.3] dark:border-[#f5f5f5]/[0.3]">
                <AiFillDashboard />
                <p className="leading-[12px] text-[14px]font-bold">Dashboard</p>
            </div>

            <div className="pt-[15px] border-b-[1px] border-[#000]/[0.3] dark:border-[#f5f5f5]/[0.3] ">
                <p className="font-extrabold text-[10px] leading-[16px] text-[#000037]/[0.6] dark:text-[#fff]/[0.6] ">INTERFACE</p>
                <div className="flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaRegSun />
                        <p className="font-normal">Pages</p>
                    </div>
                    <FaChevronRight />
                </div>
                <div className="flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaChartBar />
                        <p className="font-normal">Charts</p>
                    </div>
                    <FaChevronRight />
                </div>
                <div className="flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaUserCircle />
                        <p className="font-normal">Users</p>
                    </div>
                    <FaChevronRight />
                </div>
            </div>

            <div className="pt-[15px] border-b-[1px] border-[#000]/[0.3] dark:border-[#f5f5f5]/[0.3] ">
                <p className="font-extrabold text-[10px] leading-[16px] text-[#000037]/[0.6] dark:text-[#fff]/[0.6] ">ADDONS</p>
                <div className="flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaWrench />
                        <p className="font-normal">Utilities</p>
                    </div>
                    <FaChevronRight />
                </div>
                <div className="transform ease-out duration-200 hover:group-[] flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaStickyNote />
                        <p className="font-normal">Components</p>
                    </div>
                    <FaChevronRight className='transform ease-out duration-200 hover:pl-[3px]' />
                </div>
                <div className="flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaTable />
                        <p className="font-normal">Table</p>
                    </div>
                    <FaChevronRight />
                </div>
            </div>

            <div className="pt-[15px]">
                <p className="font-extrabold text-[10px] leading-[16px] text-[#000037]/[0.6] dark:text-[#fff]/[0.6] ">Products</p>
                <div className="flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaPlus />
                        <p className="font-normal">Add Product</p>
                    </div>
                    <FaChevronRight />
                </div>
                <div className="transform ease-out duration-200 hover:group-[] flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaPen />
                        <p className="font-normal">Edit Product</p>
                    </div>
                    <FaChevronRight className='transform ease-out duration-200 hover:pl-[3px]' />
                </div>
                <div className="transform ease-out duration-200 hover:group-[] flex items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <FaTrash />
                        <p className="font-normal">Delete Product</p>
                    </div>
                    <FaChevronRight className='transform ease-out duration-200 hover:pl-[3px]' />
                </div>

            </div>

        </div>
    )
}

export default SideBar