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
    Text,
} from '@chakra-ui/react'
import '../styles/styles.css';
import { cores } from '../styles/colors';
import { useMedia } from 'react-use'
import { Delivery, Product } from '../types/types'
import TableProducts from './TableProducts';
import { CustomToast } from './Toast';


function ModalCadastro() {
    const inputNameRef = useRef<HTMLInputElement | null>();
    const inputQtdRef = useRef<HTMLInputElement | null>();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [fullName, setFullName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [message, ] = useState<string>();
    const [inputValues, setInputValues] = useState<Product[]>([])
    const [isNotValid, setIsNotValid] = useState<boolean[]>([])
    const isMobile = useMedia('(max-width: 40em)')
    const initialRef = React.useRef(null)
    const { errorToast, successToast } = CustomToast();

    const handleSave = () => {

        if (inputNameRef.current?.value.trim().length === 0 || inputQtdRef.current?.value.trim().length === 0) {
            errorToast({title:"Erro ao adicionar um novo produto",message:"Por favor preencha os dados do produto"});
            return
        }

        if (inputValues.some((el) => { return el.name === inputNameRef.current?.value })) {          
            errorToast({title:"Erro ao adicionar um novo produto",message:"Este produto já foi cadastrado. Remova-o para cadastrar novamente"});
            return
        }


        let product: Product[] = inputValues
        setInputValues([])

        let prod: Product = {
            name: inputNameRef.current?.value,
            qtd: inputQtdRef?.current?.value
        }
        product.push(prod)
        setInputValues([...product])
    };
    const removeProduct = (id: number) => {
        let product: Product[] = inputValues
        setInputValues([])
        product.splice(id, 1);
        setInputValues([...product])
    }
    const saveDelivery = () => {
        let valid: any = []
        setFullName(fullName)
        setAddress(address)
        if (fullName.trim().length === 0) {
            valid[0] = [true]

        }
        if (address.trim().length === 0) {
            valid[1] = [true]
        }
        if (inputValues.length === 0) {
            console.log('Entrou')
            if (inputNameRef.current?.value.trim().length === 0) {
                valid[2] = [true]

            }
            if (inputQtdRef.current?.value.trim().length === 0) {
                valid[3] = [true]
            }
        }

        setIsNotValid(valid)
        if(inputValues.length === 0 && (!valid[2] || !valid[3])){
            errorToast({title:"Erro ao cadastrar uma encomenda",message:`Cadastre ao menos um produto.`});
            return
        }
        if (valid.some((entry: any) => typeof entry[0] === 'boolean')) {
            errorToast({title:"Erro ao cadastrar uma encomenda",message:`Preencha os campos destacados.`});
            return
        }

        let deliveries: Delivery = {
            fullName,
            address,
            products: inputValues
        }
        console.log(deliveries)
        successToast({title:"Sucesso",message:`A encomenda foi cadastrada.`});
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
                    <ModalHeader textAlign={'center'} color='white' as='b'>Cadastro de Entregas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel color='white' as='b'>Nome Completo</FormLabel>
                            <Input
                                color='#cccccc'
                                borderColor={isNotValid[0] ? 'red' : 'white'}
                                onChange={e => { setFullName(e.target.value) }}
                                value={fullName}
                                ref={initialRef}
                                placeholder='Digite o Nome Completo'
                                _placeholder={{ color: '#cccccc' }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel mt={3} color='white' as='b'>Endereço</FormLabel>
                            <Input color='#cccccc'
                                onChange={e => { setAddress(e.target.value) }}
                                borderColor={isNotValid[1] ? 'red' : 'white'}
                                value={address}
                                ref={initialRef}
                                placeholder='Digite o Endereço'
                                _placeholder={{ color: '#cccccc' }} />
                        </FormControl>

                        <FormControl mt={4}>
                            <Flex
                                direction='row'
                                justify='space-between'
                            >
                            </Flex>
                            <Flex
                                mt={3}
                                direction='row'
                                align='flex-end'
                            >
                                <Flex w='100%' direction='column'>
                                    <FormLabel color='white' as='b'>Nome do Produto</FormLabel>
                                    <Input
                                        borderColor={isNotValid[2] ? 'red' : 'white'}
                                        color='#cccccc'
                                        placeholder={`Nome do Produto`}
                                        _placeholder={{ color: '#cccccc' }}
                                        ref={el => inputNameRef.current = el}
                                        type="text"
                                    />
                                </Flex>
                                <Flex w='25%' direction='column'>
                                    <FormLabel ml={3} color='white' as='b'>Quantidade</FormLabel>
                                    <Input
                                        borderColor={isNotValid[3] ? 'red' : 'white'}
                                        ml={3}
                                        color='#cccccc'
                                        placeholder={`Quantidade`}
                                        _placeholder={{ color: '#cccccc' }}
                                        ref={el => inputQtdRef.current = el}
                                        type="text"
                                    />
                                </Flex>
                                <Button w='25%' colorScheme='brand' ml={5} onClick={handleSave}>
                                    Salvar
                                </Button>
                            </Flex>
                        </FormControl>
                        {message && <Text color={'#F95E5E'}>{message}</Text>}
                        <TableProducts data={inputValues} removeProduct={removeProduct} />

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='close' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='brand' onClick={() => { saveDelivery() }}>Cadastrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalCadastro;