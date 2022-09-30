import React from 'react';
import '../styles/styles.css';
import { Button, Input, Text, Flex, Spacer, Divider, Box } from '@chakra-ui/react'
import { renderBarChart, renderAreaChart } from './RenderLineChart';
import CustomTable from './CustomTable';
import ModalCadastro from './ModalCadastro';


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
            <Flex 
            pb='5%'
            mt='1%' 
            direction='column' 
            bgGradient='linear(to-b,white 80%, #2F576D 20%)'>
                <Flex direction='row'>
                    <Text ml='10%' as='b' color='black' fontSize='2xl'>Entregue </Text>
                    <Input borderWidth='1' borderColor='#2F576D' ml='1%' w='32%' placeholder='Digite o ID, nome, condição da entrega ou atribuição' />
                    <ModalCadastro />
                </Flex>
                <Box pb='5px' borderRadius="md" borderWidth='1px' borderColor='#2F576D' mt='1%' ml='10%' w='80%' bg='white'>
                    <CustomTable />
                </Box>
            </Flex>
        </Flex>

    );
}

export default Body;