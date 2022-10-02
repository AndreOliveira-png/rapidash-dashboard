import React, { useState } from 'react'
import { Input, Text, Flex, Box } from '@chakra-ui/react'
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import ModalCadastro from './ModalCadastro';
import { cores } from '../styles/colors';
import { Search2Icon } from '@chakra-ui/icons'
import { InputGroup, InputRightElement } from '@chakra-ui/react'


type UnitConversion = {
    id: string,
    nomeEntregador: string,
};

const data: UnitConversion[] = [
    {
        id: '9b854140-b757-4bbc-ab53-c8be7317a4b4',
        nomeEntregador: 'Jose dos Santos',
    },
    {
        id: '5e643e5c-7d9d-4ef0-b17b-1f8d7f9cab74',
        nomeEntregador: 'Nenhum',
    },
    {
        id: 'ed014465-17d7-4adf-9e2e-5481d5ecb41a',
        nomeEntregador: 'Marcelo Augusto',
    },
    {
        id: 'be188f63-eb3f-4c34-b76c-a6b526f46dc9',
        nomeEntregador: 'Rodrigo Santos',
    },
    {
        id: 'e6199a3f-56f1-4a46-9df3-b4e6d644db00',
        nomeEntregador: 'Nenhum',
    },
    {
        id: 'c61bede1-1d7e-4840-84b9-e670afc725fb',
        nomeEntregador: 'Marta de Melo',
    },
    {
        id: 'b51e0feb-d517-47f3-86af-0835a68de94a',
        nomeEntregador: 'Nenhum',
    },
]

let textoFiltrado: any = []
export const filter = (text: string) => {
    let str = text.toLowerCase()
    textoFiltrado = data.filter(dado => {
        if (dado.id.toLowerCase().includes(str)
            || 
            dado.nomeEntregador.toLowerCase().includes(str)
            ) {
            return dado
        }
    });

    return textoFiltrado

}
const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "ID"
    }),
    columnHelper.accessor("nomeEntregador", {
        cell: (info) => info.getValue(),
        header: "Nome Entregador"
    }),
];



function CustomTable() {

    const [dt, setDt] = useState([]);
    let text = ''
    const handleChange = (event: any) => {
        text = event.target.value;
        let aux = filter(text)
        if (aux !== dt) {
            setDt(filter(text))
        }

    };
    
    return (
        <Flex
        pb='5%'
        pt='5%'
        direction='column'
        bg={cores.backgroundPadrao}
    // bgGradient='linear(to-b,white 80%, #2F576D 20%)'
    >
    <Flex direction='column' align='center'>
            <Text as='b' color='#DADADA' fontSize='2xl'>Encomendas </Text>
            <InputGroup w='80%'>

                <Input
                    bg='#2F576D'
                    color='white'
                    focusBorderColor='#3E86B0'
                    borderWidth='1'
                    borderColor='#2F576D'
                    ml='1%'
                    w='100%'
                    onChange={handleChange}
                    placeholder='Digite o ID, nome, condição da entrega ou atribuição'
                    _placeholder={{ color: 'white' }}
                />
                <InputRightElement
                    bg={cores.backgroundSecundario}
                    borderRadius='0px 5px 5px 0px'
                    pointerEvents='none'
                    children={<Search2Icon color='white' />}
                />
            </InputGroup>
           
        </Flex>
        <Box
            className='boxTable'
            minH='300px'
            h='50vh'
            maxH='300px'
            pb='5px'
            borderRadius="md"
            borderWidth='1px'
            borderColor='#2F576D'
            mt='5%'
            ml='5%'
            w='90%'
            bg={cores.backgroundSecundario}

        >
             {dt.length === 0 ?
                <Flex w='100%'  h='100%' direction='row' justifyContent ='center' alignItems='center'>
                    <Text  as='b' fontSize='sm' color='white'>Nenhuma Entrega corresponde ao que foi digitado.</Text>
                </Flex>         
                :dt.length !== 0 ? 
                <DataTable columns={columns} data={dt} />  
                :
                 <DataTable columns={columns} data={data} />                 
            }
            
        </Box>
        <ModalCadastro />
    </Flex>


    )
}

export default CustomTable;