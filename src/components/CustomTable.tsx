import React, { useState } from 'react'
import { Input, Text, Flex, Box } from '@chakra-ui/react'
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import ModalCadastro from './ModalCadastro';
import { cores } from '../styles/colors';
import { Search2Icon } from '@chakra-ui/icons'
import { InputLeftElement, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useMedia } from 'react-use'


type UnitConversion = {
    id: string,
    atribuida: string,
    nomeEntregador: string,
    entregue: string,
};

const data: UnitConversion[] = [
    {
        id: '9b854140-b757-4bbc-ab53-c8be7317a4b4',
        atribuida: 'Sim',
        nomeEntregador: 'Jose dos Santos',
        entregue: 'Não',
    },
    {
        id: '5e643e5c-7d9d-4ef0-b17b-1f8d7f9cab74',
        atribuida: 'Não',
        nomeEntregador: 'Nenhum',
        entregue: 'Não',
    },
    {
        id: 'ed014465-17d7-4adf-9e2e-5481d5ecb41a',
        atribuida: 'Sim',
        nomeEntregador: 'Marcelo Augusto',
        entregue: 'Sim',
    },
    {
        id: 'be188f63-eb3f-4c34-b76c-a6b526f46dc9',
        atribuida: 'Sim',
        nomeEntregador: 'Rodrigo Santos',
        entregue: 'Sim',
    },
    {
        id: 'e6199a3f-56f1-4a46-9df3-b4e6d644db00',
        atribuida: 'Não',
        nomeEntregador: 'Nenhum',
        entregue: 'Não',
    },
    {
        id: 'c61bede1-1d7e-4840-84b9-e670afc725fb',
        atribuida: 'Sim',
        nomeEntregador: 'Marta de Melo',
        entregue: 'Não',
    },
    {
        id: 'b51e0feb-d517-47f3-86af-0835a68de94a',
        atribuida: 'Não',
        nomeEntregador: 'Nenhum',
        entregue: 'Não',
    },
]

let textoFiltrado: any = []
export const filter = (text: string) => {
    let str = text.toLowerCase()
    textoFiltrado = data.filter(dado => {
        if (dado.id.toLowerCase().includes(str)
            || dado.atribuida.toLowerCase().includes(str)
            || dado.nomeEntregador.toLowerCase().includes(str)
            || dado.entregue.toLowerCase().includes(str)) {
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
    columnHelper.accessor("atribuida", {
        cell: (info) => info.getValue(),
        header: "Atribuida"
    }),
    columnHelper.accessor("nomeEntregador", {
        cell: (info) => info.getValue(),
        header: "Nome Entregador"
    }),
    columnHelper.accessor("entregue", {
        cell: (info) => info.getValue(),
        header: "Entregue"
    }),
];



function CustomTable() {
    const isMobile = useMedia('(max-width: 40em)')

    const [dt, setDt] = useState([]);
    let text = ''
    const handleChange = (event: any) => {
        text = event.target.value;
        let aux = filter(text)
        if (aux !== dt) {
            setDt(filter(text))
        }

    };
    console.log(dt)
    return ( 
        <Flex
            pb='5%'
            pt='1%'
            direction='column'
            bg={cores.backgroundPadrao}
        // bgGradient='linear(to-b,white 80%, #2F576D 20%)'
        >
            <Flex direction='row'>
                <Text ml='10%' as='b' color='#DADADA' fontSize='lg'>Encomendas </Text>
                <InputGroup w='41%'>

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
                <ModalCadastro />
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
                mt='1%'
                ml='10%'
                w='80%'
                bg={cores.backgroundSecundario}

            >
                {dt.length === 0 ?
                <Flex w='100%'  h='100%' direction='row' justifyContent ='center' alignItems='center'>
                    <Text  as='b' fontSize='lg' color='white'>Nenhuma Entrega corresponde ao que foi digitado.</Text>
                </Flex>         
                :dt.length !== 0 ? 
                <DataTable columns={columns} data={dt} />  
                :
                 <DataTable columns={columns} data={data} />                 
                }
            </Box>
        </Flex>
    )
}

export default CustomTable;