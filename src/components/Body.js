import React from 'react';
import '../styles/styles.css';
import {Text, Flex, Divider, Box } from '@chakra-ui/react'
import {RenderBarChart, RenderAreaChart } from './RenderLineChart';
import CustomTable from './CustomTable';
import CustomTableMobile from './CustomTableMobile';
import { cores } from '../styles/colors';
import { useMedia } from 'react-use'




function Body() {
    const isMobile = useMedia('(max-width: 40em)')
    return (
        
        !isMobile ? 
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
                    <RenderAreaChart />
                </Box>
                <Box bg={cores.backgroundSecundario} boxShadow='2xl' ml='1%' borderRadius="md" borderColor={cores.backgroundPadrao} borderWidth='2px'>
                    <RenderBarChart />
                </Box>



            </Flex>

            <CustomTable />
        </Flex>
        :
        <Flex direction='column'>
            <Flex direction='column' justify='center' bg={cores.backgroundPadrao}>
                <Text ml='5%' as='b' color='#DADADA' className="txtHeader" fontSize='lg'>Relação entre encomendas entregues </Text>
                <Divider ml='5%' bg='white' w="90%" h="1px" orientation='horizontal' />
            </Flex>
            
            <Flex
                align='center'
                justify='center'
                bg={cores.backgroundPadrao}
                //bgGradient='linear(to-b, #1F333F 60%,white 0%)'
                pt='1%'
            >
                
                <Box bg={cores.backgroundSecundario} boxShadow='2xl' borderRadius="md" borderColor={cores.backgroundPadrao} borderWidth='2px'>  
                    <RenderAreaChart />
                </Box>
            </Flex>
            
            <Flex direction='column' pt='5%' justify='center' bg={cores.backgroundPadrao}>
                <Text ml='5%' as='b' color='#DADADA' className="txtHeader" fontSize='lg'>Relação entre encomendas entregues </Text>
                <Divider ml='5%' bg='white' w="90%" h="1px" orientation='horizontal' />
            </Flex>
            <Flex
                align='center'
                justify='center'
                bg={cores.backgroundPadrao}
                //bgGradient='linear(to-b, #1F333F 60%,white 0%)'
                pt='1%'
            >
                
                <Box bg={cores.backgroundSecundario} boxShadow='2xl' borderRadius="md" borderColor={cores.backgroundPadrao} borderWidth='2px'>  
                    <RenderBarChart />
                </Box>
            </Flex>
            <CustomTableMobile />
        </Flex>
       

    );
}

export default Body;