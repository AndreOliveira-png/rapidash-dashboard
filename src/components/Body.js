import React from 'react';
import '../styles/styles.css';
import { Flex, Divider, Box } from '@chakra-ui/react'
import { renderBarChart, renderAreaChart } from './RenderLineChart';
import CustomTable from './CustomTable';
import { cores } from '../styles/colors';




function Body() {
    return (

        <Flex direction='column'>
            <Flex justify='center' bg={cores.backgroundPadrao}>
                <Divider bg='white' w="80%" h="2px" orientation='horizontal' />
            </Flex>

            <Flex
                direction='row'
                align='flex-start'
                bg={cores.backgroundPadrao}
                //bgGradient='linear(to-b, #1F333F 60%,white 0%)'
                pt='1%'
            >

                <Box bg={cores.backgroundSecundario} boxShadow='2xl' ml='10%' borderRadius="md" borderColor={cores.backgroundPadrao} borderWidth='2px'>
                    {renderAreaChart}
                </Box>
                <Box bg={cores.backgroundSecundario} boxShadow='2xl' ml='1%' borderRadius="md" borderColor={cores.backgroundPadrao} borderWidth='2px'>
                    {renderBarChart}
                </Box>



            </Flex>

            <CustomTable />
        </Flex>

    );
}

export default Body;