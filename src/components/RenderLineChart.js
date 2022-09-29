import { BarChart, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const dataBar = [
    {
        name: 'Entregues',
        uv: 4000,
        entregas: 40,
        amt: 2400,
    },
    {
        name: 'Em Rota',
        uv: 3000,
        entregas: 88,
        amt: 2210,
    },
    {
        name: 'Paradas',
        uv: 2000,
        entregas: 60,
        amt: 2290,
    }
];
const dataArea = [
    {
        name: '22',
        entregas: 30,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '23',
        entregas: 50,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '24',
        entregas: 5,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '25',
        entregas: 40,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '26',
        entregas: 20,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '27',
        entregas: 100,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '28',
        entregas: 80,
        pv: 9800,
        amt: 2290,
    }
];
export const renderBarChart = (
    <BarChart
        width={500}
        height={300}
        data={dataBar}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="entregas" fill="#8884d8" />
    </BarChart>
);
export const renderAreaChart = (
    <AreaChart
        width={500}
        height={300}
        data={dataArea}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="entregas" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
)

