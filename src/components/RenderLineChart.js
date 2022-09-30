import { BarChart, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles/styles.css'
import { QuestionIcon, CheckIcon, WarningTwoIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import { Flex,Text } from '@chakra-ui/react'

// The default icon size is 1em (16px)


const CustomTooltipBar = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <div className="custom-tooltip-header">
                    <p className="label">{`${label}`}</p>
                    {label === "Entregues" ?
                        <CheckIcon mr='10%' />
                        :
                        label === "Em Rota" ?
                            <EmailIcon mr='10%' />
                            :
                            <WarningTwoIcon mr='10%' />
                    }
                </div>
                <div className="custom-tooltip-body">
                    <p className="desc">{`Quantidade de entregas: ${payload[0].value}`}</p>

                </div>
            </div>
        );
    }
    return null;
};

const CustomTooltipArea = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <div className="custom-tooltip-header">
                    <p className="label">{`Dia ${label}`}</p>
                    <CalendarIcon mr='10%' />
                </div>
                <div className="custom-tooltip-body">
                    <p className="desc">{`Quantidade de entregas: ${payload[0].value}`}</p>

                </div>
            </div>
        );
    }
    return null;
};
const renderLegend = (props) => {
    const { payload } = props;

    return (
        <Flex direction='row' justify='center' align='center'>
            <QuestionIcon color="white" />
            {
                payload.map((entry, index) => (
                    <Text ml='1%' as='b' color='white'>{entry.value.charAt(0).toUpperCase() + entry.value.slice(1)}</Text>
                ))
            }
        </Flex>
    );
}
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const windowSize = getWindowSize();

const dataBar = [
    {
        name: 'Entregues',
        uv: 4000,
        entregas: 40,
        amt: 2400,
        fill: '#4F8CB0',
    },
    {
        name: 'Em Rota',
        uv: 3000,
        entregas: 88,
        amt: 2210,
        fill: '#2C80B0',
    },
    {
        name: 'Paradas',
        uv: 2000,
        entregas: 60,
        amt: 2290,
        fill: '#3E86B0',
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
        width={windowSize.innerWidth / 3.6}
        height={windowSize.innerHeight / 2.2}
        data={dataBar}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} dataKey="name" />
        <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
        <Tooltip
            cursor={{ fill: '#1A384A' }}
            content={<CustomTooltipBar />}
            wrapperStyle={{
                outline: 'none',
            }}
        />
        <Legend content={renderLegend} />
        <Bar stroke="#636219" dataKey="entregas" fill="white" />
    </BarChart>
);
export const renderAreaChart = (
    <AreaChart
        width={windowSize.innerWidth / 2}
        height={windowSize.innerHeight / 2.2}
        data={dataArea}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} dataKey="name" />
        <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
        <Tooltip
            content={<CustomTooltipArea />}
            wrapperStyle={{
                outline: 'none',
            }}
        />
        <Area type="monotone" dataKey="entregas" stroke="#B0AD35" fill="#636219" />
    </AreaChart>
)

