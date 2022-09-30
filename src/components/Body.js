import React from 'react';
import '../styles/styles.css';
import {Flex, Divider, Box } from '@chakra-ui/react'
import { renderBarChart, renderAreaChart } from './RenderLineChart';
import CustomTable from './CustomTable';


function Body() {
    return (

        <Flex direction='column'>
            <Flex justify='center' bg='#2F576D'>
                <Divider bg='white' w="80%" h="2px" orientation='horizontal' />
            </Flex>

            <Flex
                direction='row'
                align='flex-start'
                bgGradient='linear(to-b, #2F576D 60%,white 0%)'
                pt='1%'
            >
              
                <Box boxShadow='2xl' ml='10%' bg='white' borderRadius="md" borderColor='#2F576D' borderWidth='2px'>
                    {renderBarChart}
                </Box>
                
                <Box boxShadow='2xl' ml='7%' bg='white' borderRadius="md" borderColor='#2F576D' borderWidth='2px'>
                    {renderAreaChart}
                </Box>
      
            </Flex>
            <CustomTable />
        </Flex>

    );
}

export default Body;