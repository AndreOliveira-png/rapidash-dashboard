import React, { useEffect } from 'react';
import '../styles/styles.css';
import { Text, Flex, Spacer, Image } from '@chakra-ui/react'
import {cores} from '../styles/colors';
import { useMedia } from 'react-use'


function Header() {
    const isMobile = useMedia('(max-width: 40em)')
    useEffect(() => {
        document.title = 'Rapidash Dashboard';
    });
    return (
        
        !isMobile ? 
        <Flex
            direction='column'
            bg={cores.backgroundPadrao}

        >
            <Flex direction='row' align='center'>
                <Text as='b' color='#DADADA' ml='10%' className="txtHeader" fontSize='2xl'>Bem Vindo SysAdmin</Text>
                <Spacer />
                <Text as='b' color='#DADADA' className="txtHeader" fontSize='2xl'>Rapidash Sistemas</Text>
                <Image
                    boxSize='10%'
                    objectFit='cover'
                    src='./rapidashlogo.png' alt='Dan Abramov' />
            </Flex>

            <Flex direction='row'>
                <Text ml='10%' as='b' color='#DADADA' className="txtHeader" fontSize='2xl'>Relação entre encomendas entregues </Text>
                <Spacer />
                <Text mr='10%' as='b' color='#DADADA' className="txtHeader" fontSize='2xl'>Relação entre entregas por dia </Text>
            </Flex>
        </Flex>
        :
        <Flex 
            direction='column'
            bg={cores.backgroundPadrao}
        >

            <Flex direction='row' align='center'>
          
                <Text ml='5%'as='b' color='#DADADA' className="txtHeader" fontSize='lg'>Bem Vindo SysAdmin</Text>
                <Spacer />
                <Image
                    boxSize='20%'
                    objectFit='cover'
                    src='./rapidashlogo.png' alt='Dan Abramov' />

              
            </Flex>         
        </Flex>
            
    );
}

export default Header;
