import React, { useEffect } from 'react';
import '../styles/styles.css';
import { Text, Flex, Spacer, Image } from '@chakra-ui/react'
import {cores} from '../styles/colors';


function Header() {
    useEffect(() => {
        document.title = 'Rapidash Dashboard';
    });
    return (
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
                <Text ml='10%' as='b' color='#DADADA' className="txtHeader" fontSize='2xl'>Relação entre entregas por dia </Text>
                <Spacer />
                <Text mr='10%' as='b' color='#DADADA' className="txtHeader" fontSize='2xl'>Relação entre encomendas entregues</Text>
            </Flex>
        </Flex>
    );
}

export default Header;
