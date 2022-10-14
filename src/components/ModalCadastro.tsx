import React, { useState, useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    Flex,
} from '@chakra-ui/react'
import '../styles/styles.css';
import { cores } from '../styles/colors';
import { useMedia } from 'react-use'
import { Delivery, Product } from '../types/types'


function ModalCadastro() {
    const inputNameRef = useRef<Array<HTMLInputElement | null>>([]);
    const inputQtdRef = useRef<Array<HTMLInputElement | null>>([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputValues, setInputValues] = useState<Product[]>([])
    const [inputCounter, setInputCounter] = useState(1)
    const isMobile = useMedia('(max-width: 40em)')
    const initialRef = React.useRef(null)
    let fullName = ''
    let product: any[] = []

    const setFullName = (value: string) => {
        fullName = value;
    }


    const handleSave = () => {

        inputNameRef.current.forEach((input, index) => {
            console.log(index)
            if (!input?.value || !inputNameRef?.current[index]?.value) {
                let prod: Product = {
                    name: input?.value,
                    qtd: inputNameRef?.current[index]?.value
                }
                setInputValues(prod)
            }
        }

        )
        console.log(inputValues)
        console.log(inputQtdRef.current)
        console.log(inputNameRef.current)

    };
    const removeProduct = (e: any) => {
        setInputCounter(inputCounter - 1);
    };
    const addProduct = (e: any) => {
        setInputCounter(inputCounter + 1);
    };
    const saveDelivery = () => {

        let deliveries: Delivery = {
            fullName,
            products: inputValues
        }
    }

    return (
        <>
            {isMobile ?
                <Flex justify='center'>
                    <Button w='60%' p='6%' fontSize='xl' mt='5%' onClick={onOpen} ml='1%' colorScheme='brand'>Cadastrar Entrega</Button>
                </Flex>
                :
                <Button onClick={onOpen} ml='1%' colorScheme='brand'>Cadastrar Entrega</Button>
            }

            <Modal
                size='xl'
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent bg={cores.backgroundSecundario}>
                    <ModalHeader color='white' as='b'>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel color='white' as='b'>Nome Completo</FormLabel>
                            <Input color='#cccccc'
                                onChange={e => { setFullName(e.target.value) }}
                                ref={initialRef}
                                placeholder='Nome Completo'
                                _placeholder={{ color: '#cccccc' }} />
                        </FormControl>

                        <FormControl mt={4}>
                            <Flex
                                direction='row'
                                justify='space-between'
                            >
                                <FormLabel color='white' as='b'>Produtos</FormLabel>
                                <Button
                                    colorScheme='brand'
                                    ml={3}
                                    onClick={addProduct}

                                >
                                    Adicionar
                                </Button>
                            </Flex>

                            {Array.from(Array(inputCounter)).map((c, index) => {
                                return (
                                    <Flex
                                        mt={3}
                                        direction='row'
                                        align='flex-end'
                                    >
                                        <Flex w='100%' direction='column'>
                                            <FormLabel color='white' as='b'>Nome do Produto</FormLabel>
                                            <Input
                                                id={`name${index}`}
                                                color='#cccccc'
                                                placeholder={`Nome do Produto`}
                                                _placeholder={{ color: '#cccccc' }}
                                                ref={el => inputNameRef.current[index] = el}
                                                key={c}
                                                className={`${index}`}
                                                type="text"
                                            />
                                        </Flex>
                                        <Flex w='25%' direction='column'>
                                            <FormLabel ml={3} color='white' as='b'>Quantidade</FormLabel>
                                            <Input
                                                id={`qtd${index}`}
                                                ml={3}
                                                color='#cccccc'
                                                placeholder={`Quantidade`}
                                                _placeholder={{ color: '#cccccc' }}
                                                ref={el => inputQtdRef.current[index] = el}
                                                key={c}
                                                className={`${index}`}
                                                type="text"
                                            />
                                        </Flex>
                                        <Button w='25%' colorScheme='brand' ml={5} onClick={handleSave}>
                                            salvar
                                        </Button>
                                        <Button w='25%' colorScheme='close' ml={5} onClick={removeProduct}>
                                            Remover
                                        </Button>


                                    </Flex>
                                );
                            })}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='close' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='brand' >Cadastrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalCadastro;