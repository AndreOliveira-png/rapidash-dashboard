import React, { useEffect, useState } from 'react'
import { Input, Button, Text, Flex, Box } from '@chakra-ui/react'
import { createColumnHelper } from "@tanstack/react-table";
import { DataTableProducts } from "./DataTableProducts";
import ModalCadastro from './ModalCadastro';
import { cores } from '../styles/colors';
import { Search2Icon } from '@chakra-ui/icons'
import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { Product } from '../types/types'




const columnHelper = createColumnHelper<Product>();

const columns = [
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: "Nome"
    }),
    columnHelper.accessor("qtd", {
        cell: (info) => info.getValue(),
        header: "Quantidade"
    }),
];


const TableProducts = (props: any) => {

    const [dt, setDt] = useState([])

    useEffect(() => {
        setDt(props.data)
    }, [props.data])

    return (
        <Flex
            direction='column'
            bg={cores.backgroundPadrao}
        // bgGradient='linear(to-b,white 80%, #2F576D 20%)'
        >
            <Flex pt='10%' direction='row' bg={cores.backgroundSecundario}>
            </Flex>
            <Box
                className='boxTable'
                borderWidth='1px'
                borderColor='#2F576D'
                w='100%'
                maxH={'30vh'}
                bg={cores.backgroundSecundario}
            >
                {dt.length === 0 ?
                    <Flex w='100%' h='100%' direction='row' justifyContent='center' alignItems='center'>
                        <Text as='b' fontSize='lg' color='white'>Nenhum Produto inserido.</Text>
                    </Flex>
                    :
                    <DataTableProducts columns={columns} data={dt} removeProduct={props.removeProduct} />
                }
            </Box>
        </Flex>
    )


}

export default TableProducts;