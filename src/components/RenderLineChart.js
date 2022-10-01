import { BarChart, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles/styles.css'
import { QuestionIcon, CheckIcon, WarningTwoIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import { useMedia } from 'react-use'
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

export const RenderBarChart = () => {
    const isMobile = useMedia('(max-width: 40em)')
    const screenWidth = isMobile ? windowSize.innerWidth * 3.1 : windowSize.innerWidth
    const screenHeight = isMobile ? windowSize.innerHeight / 1.5 : windowSize.innerHeight
    const dataBar = [
        {
            name: 'Entregues',
            uv: 4000,
            entregas: 40,
            amt: 2400,
            fill: 'url(#colorUv1)',
        },
        {
            name: 'Em Rota',
            uv: 3000,
            entregas: 88,
            amt: 2210,
            fill: 'url(#colorUv2)',
        },
        {
            name: 'Paradas',
            uv: 2000,
            entregas: 60,
            amt: 2290,
            fill: 'url(#colorUv3)',
        }
    ];

    return(
    <BarChart
        width={screenWidth / 3.6}
        height={ screenHeight / 2.2}
        data={dataBar}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >
         <defs>
            <linearGradient id="colorUv1" x1="2" y1="0" x2="2" y2="3">
                <stop offset="15%" stopColor="#4f8cb0" stopOpacity={0.9} />
                <stop offset="30%" stopColor="#5ab4e9" stopOpacity={0.1} />
            </linearGradient>
        </defs>
        <defs>
            <linearGradient id="colorUv2" x1="2" y1="0" x2="2" y2="3">
                <stop offset="15%" stopColor="#2c80b0" stopOpacity={0.7} />
                <stop offset="30%" stopColor="#0094e9" stopOpacity={0.2} />
            </linearGradient>
        </defs>
        <defs>
            <linearGradient id="colorUv3" x1="2" y1="0" x2="2" y2="3">
                <stop offset="15%" stopColor="#003654" stopOpacity={0.7} />
                <stop offset="30%" stopColor="#004a75" stopOpacity={0.2} />
            </linearGradient>
        </defs>

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
    )
}


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

export const RenderAreaChart = () =>{
    const isMobile = useMedia('(max-width: 40em)')
    const screenWidth = isMobile ? windowSize.innerWidth * 1.7 : windowSize.innerWidth
    const screenHeight = isMobile ? windowSize.innerHeight / 1.5 : windowSize.innerHeight
    return(
<AreaChart
        width={ screenWidth / 2}
        height={screenHeight / 2.2}
        data={dataArea}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
    >
        <defs>
            <linearGradient id="colorUv" x1="2" y1="0" x2="3" y2="3">
                <stop offset="5%" stopColor="#636219" stopOpacity={0.7} />
                <stop offset="10%" stopColor="#797809" stopOpacity={0.2} />
            </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} dataKey="name" />
        <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
        <Tooltip
            content={<CustomTooltipArea />}
            wrapperStyle={{
                outline: 'none',
            }}
        />

        <Area type="monotone" dataKey="entregas" stroke="#B0AD35" fill="url(#colorUv)" />
    </AreaChart>
    )
}
