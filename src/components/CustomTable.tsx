import React, { useState } from 'react'
import { Input, Text, Flex, Box } from '@chakra-ui/react'
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import ModalCadastro from './ModalCadastro';
import {cores} from '../styles/colors';


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

    textoFiltrado = data.filter(dado => {
        if (dado.id.includes(text)
            || dado.atribuida.includes(text)
            || dado.nomeEntregador.includes(text)
            || dado.entregue.includes(text)) {
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

    const [dt, setDt] = useState([]);
    let text = ''
    const handleChange = (event: any) => {
        text = event.target.value;
        let aux =  filter(text)
        if(aux !== dt){
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
                <Text ml='10%' as='b' color='#DADADA' fontSize='2xl'>Entregue </Text>
                <Input
                    bg='#2F576D'
                    color='white'
                    focusBorderColor='#3E86B0'
                    borderWidth='1'
                    borderColor='#2F576D'
                    ml='1%'
                    w='43%'
                    onChange={handleChange}
                    placeholder='Digite o ID, nome, condição da entrega ou atribuição'
                    _placeholder={{ color: 'white' }}
                     />
                <ModalCadastro />
            </Flex>
            <Box 
            className='boxTable'
            minH='300px'
             h='50%' 
             maxH ='300px' 
             pb='5px' 
             borderRadius="md" 
             borderWidth='1px' 
             borderColor='#2F576D' 
             mt='1%' 
             ml='10%'
             w='80%' 
             bg={cores.backgroundSecundario}

             >
                {dt.length !== 0 ?
                    <DataTable columns={columns} data={dt} />
                    :
                    <DataTable columns={columns} data={data} />
                }
            </Box>
        </Flex>


    )
}

export default CustomTable;