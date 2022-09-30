import React from 'react';
import '../styles/styles.css';
import { Text, Flex, Spacer, Image } from '@chakra-ui/react'

function Header() {
    return (
        <Flex
            direction='column'
            bg='#2F576D'
            
        >
            <Flex direction='row' align='center'>
                <Text  as='b' color='white' ml='10%' className="txtHeader" fontSize='2xl'>Bem Vindo SysAdmin</Text>
                <Spacer />
                <Text  as='b' color='white' className="txtHeader" fontSize='2xl'>Rapidash Sistemas</Text>
                <Image
                    boxSize='10%'
                    objectFit='cover'
                    src='./rapidashlogo.png' alt='Dan Abramov' />
            </Flex>

            <Flex direction='row'>
                <Text ml='10%' as='b' color='white' className="txtHeader" fontSize='2xl'>Relação entre encomendas entregues </Text>
                <Spacer />
                <Text  mr='10%' as='b' color='white' className="txtHeader" fontSize='2xl'>Relação entre entregas por dia </Text>
            </Flex>
        </Flex>
    );
}

export default Header;
