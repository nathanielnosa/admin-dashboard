import { PieChart, Pie, Cell, } from 'recharts';

const data = [
    { name: 'Group A', value: 700 },
    { name: 'Group B', value: 500 },
    { name: 'Group C', value: 500 },
    { name: 'Group D', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PieChartsUI = () => {

    return (
        <div className='flex flex-col items-center justify-center py-2 overflow-scroll'>
            <PieChart width={300} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="grid grid-cols-4 gap-[5px] md:gap-[18px]">
                {
                    data.map(({ name, value }) => (
                        <p key={value} className=' text-white dark:text-[#000033] cursor-pointer font-thin md:font-bold'>{name}</p>
                    ))
                }
            </div>
            <div className="grid grid-cols-4 gap-[28px] md:gap-[28px] w-[220px] md:w-[300px]">
                {
                    COLORS.map((item, index) => (
                        <div key={index} className="h-[30px] w-[30px]" style={{ backgroundColor: item }}></div>
                    ))
                }
            </div>
        </div>
    )
}
export default PieChartsUI